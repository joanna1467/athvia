import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App'
import Landing from './pages/Landing'
import Explore from './pages/Explore'
import Profile from './pages/Profile'
import Coaches from './pages/Coaches'
import Schools from './pages/Schools'
import Events from './pages/Events'
import Pricing from './pages/Pricing'
import About from './pages/About'
import SignIn from './pages/SignIn'

const redirect = sessionStorage.getItem('spa-redirect')
if (redirect) {
  sessionStorage.removeItem('spa-redirect')
  window.history.replaceState(null, '', redirect)
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route element={<App />}>
          <Route index element={<Landing />} />
          <Route path="explore" element={<Explore />} />
          <Route path="athlete/alina-fang" element={<Profile />} />
          <Route path="coaches" element={<Coaches />} />
          <Route path="schools" element={<Schools />} />
          <Route path="events" element={<Events />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="about" element={<About />} />
          <Route path="signin" element={<SignIn />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
