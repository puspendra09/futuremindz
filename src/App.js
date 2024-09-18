import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import Career from "./pages/Career"
import ContactUs from "./pages/Contact-us"
import CareerPage from "./pages/Career-page"
import Service from "./pages/Service"

function App() {
  return (
    <div className="App">
     <BrowserRouter>
       <Routes>
         <Route>
           <Route path="/" element={<Home />} />
           <Route path="career" element={<Career />} />
           <Route path="contact-us" element={<ContactUs />} />
           <Route path="career-page" element={<CareerPage />} />
           <Route path="service" element={<Service />} />
         </Route>
       </Routes>
     </BrowserRouter>
   </div>
  );
}

export default App;
