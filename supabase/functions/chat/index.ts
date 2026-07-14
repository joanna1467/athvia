// AthVia recruiting guide — Supabase Edge Function
// Relays chat messages to Gemini. The API key lives in Supabase's
// encrypted secrets vault (set via dashboard or `supabase secrets set`)
// and is read here by NAME — it never appears in code or in the website.

import { corsHeaders } from '../_shared/cors.ts'

const SYSTEM_PROMPT = `You are AthVia's recruiting guide — a knowledgeable,
encouraging assistant for high school athletes recruiting to NAIA, NCAA D2,
and NCAA D3 programs (never JUCO; D1 only for context).

Rules:
- Answer questions about eligibility, recruiting timelines, contact rules,
  emailing coaches, division differences, and AthVia's sports.
- Be precise about NAIA vs NCAA differences (separate eligibility centers,
  different contact rules, NAIA sponsors emerging sports like competitive
  dance and cheer).
- If unsure about a specific rule, say so and point the athlete to their
  school counselor or the official NAIA/NCAA eligibility center.
- Never invent deadlines, standards, or rules.
- Stay on recruiting topics. Politely decline homework help or anything
  unrelated.
- Never ask for or encourage sharing of personal information.
- Keep answers short and practical. You are talking to teenagers.`

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { messages } = await req.json()
    const apiKey = Deno.env.get('GEMINI_API_KEY')
    if (!apiKey) throw new Error('GEMINI_API_KEY not configured')

    const contents = (messages ?? []).slice(-12).map(
      (m: { role: string; text: string }) => ({
        role: m.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: String(m.text).slice(0, 2000) }],
      }),
    )

    const res = await fetch(
      'https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-goog-api-key': apiKey,
        },
        body: JSON.stringify({
          systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
          contents,
          generationConfig: { maxOutputTokens: 800, temperature: 0.4 },
        }),
      },
    )

    const data = await res.json()
    const reply =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ??
      "Sorry — I couldn't generate an answer just now. Please try again."

    return new Response(JSON.stringify({ reply }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  } catch (e) {
    return new Response(JSON.stringify({ error: String(e) }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }
})
