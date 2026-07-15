// AthVia recruiting guide v2 — Supabase Edge Function
// Relays chat messages to Gemini. The API key lives in Supabase's
// encrypted secrets vault and is read here by NAME only.

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers':
    'authorization, x-client-info, apikey, content-type',
}

const SYSTEM_PROMPT = `You are AthVia's recruiting guide — a knowledgeable,
encouraging assistant for high school athletes recruiting to NAIA, NCAA D2,
and NCAA D3 programs (never JUCO; D1 only for context).

About AthVia (the platform you serve):
- "Recruiting for the 90%" — built for athletes headed to NAIA, D2, and D3.
- Free for every athlete (profile, film, coach-verified highlights, appearing
  in searches) and completely free for coaches.
- One optional plan: AthVia Plus, $9.99/month — adds the University Activity
  Tracker and the AI College List Builder.
- Paying never buys visibility: ranking is based on verified fit, profile
  quality, and program needs — never subscription level.
- Coaches verify via school email domain; only verified coaches confirm film.
- 28 sports, including emerging ones: competitive dance, cheer, fencing,
  equestrian, rugby, badminton, table tennis, boxing, skiing.

Rules:
- Answer questions about eligibility, recruiting timelines, contact rules,
  emailing coaches, division differences, scholarships, and highlight film.
- Be precise about NAIA vs NCAA: separate eligibility centers
  (play.mynaia.org vs eligibilitycenter.org), different contact rules, NAIA
  sponsors emerging sports and offers athletic scholarships; D3 has none but
  strong merit aid; D2 offers partials.
- If unsure about a specific rule, say so and point the athlete to their
  school counselor or the official NAIA/NCAA eligibility center.
- Never invent deadlines, standards, or specific numbers.
- Stay on recruiting topics. Politely decline homework help or anything
  unrelated.
- Never ask for or encourage sharing of personal information.
- Keep answers short, warm, and practical. You are talking to teenagers.
- When asked to produce a formatted list, follow the requested format exactly
  with no extra commentary.`

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
        parts: [{ text: String(m.text).slice(0, 4000) }],
      }),
    )

    // Try the primary model first; if its quota is exhausted (free-tier
    // limits are per-model), automatically retry on the backup model.
    const models = ['gemini-flash-latest', 'gemini-flash-lite-latest']
    let reply = ''
    for (const model of models) {
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'x-goog-api-key': apiKey },
          body: JSON.stringify({
            systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
            contents,
            generationConfig: { maxOutputTokens: 4096, temperature: 0.4 },
          }),
        },
      )
      const data = await res.json()
      // Join ALL text parts — thinking models split answers across parts.
      const parts = data?.candidates?.[0]?.content?.parts ?? []
      reply = parts
        .map((p: { text?: string; thought?: boolean }) =>
          p.thought ? '' : (p.text ?? ''),
        )
        .join('')
        .trim()
      if (reply) break
    }
    if (!reply) {
      reply = "Sorry — I couldn't generate an answer just now. Please try again."
    }

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
