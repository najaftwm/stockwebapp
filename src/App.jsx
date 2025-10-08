import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
// import LoginPage from "./pages/LoginPage"
import OtpVerification from "./pages/otpVerification"
function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route index element={<Home/>}/>
      {/* <Route path="create-acount" element={<LoginPage/>}/> */}
      {/* <Route path="/verify" element={<OtpVerification />} /> */}
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App
