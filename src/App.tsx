import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "@/pages/home/Home"
import { PrivacyPolicy } from "./pages/privacy_policy/PrivacyPolicy"
import { DataProtectionPolicy } from "./pages/privacy_policy/DataProtectionPolicy"

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/data-protection-policy" element={<DataProtectionPolicy />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
