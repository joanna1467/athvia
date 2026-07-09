import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App'
import Landing from './pages/Landing'
import Explore from './pages/Explore'
import Schools from './pages/Schools'
import Events from './pages/Events'
import Resources from './pages/Resources'
import Pricing from './pages/Pricing'
import SignIn from './pages/SignIn'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route index element={<Landing />} />
          <Route path="explore" element={<Explore />} />
          <Route path="schools" element={<Schools />} />
          <Route path="events" element={<Events />} />
          <Route path="resources" element={<Resources />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="signin" element={<SignIn />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
