import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "@/pages/home/Home"
import { About } from "./pages/about/About"
import { UforoPrivacyPolicy } from "./pages/privacy_policy/PrivacyPolicy"
import { DataProtectionPolicy } from "./pages/privacy_policy/DataProtectionPolicy"
import { CareersPage } from "./pages/careers/Careers"
import { ScrollToTop } from "./components/ScrollToTop"

function App() {
  

  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy-policy" element={<UforoPrivacyPolicy />} />
        <Route path="/data-protection-policy" element={<DataProtectionPolicy />} />
        <Route path="/careers" element={<CareersPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
