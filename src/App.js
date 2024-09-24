import { Routes, Route, BrowserRouter } from "react-router-dom"
import Header from "./components/header"
import Footer from "./components/footer"
import Home from "./pages/Home"
import Career from "./pages/Career"
import ContactUs from "./pages/Contact-us"
import CareerPage from "./pages/Career-page"
import Service from "./pages/Service"
import JobPage from "./pages/JobPage"
import AdminLogin from "./pages/AdminLogin"
import AdminJobPost from "./pages/AdminJobPost"

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Header />
       <Routes>
         <Route>
           <Route path="/" element={<Home />} />
           <Route path="career" element={<Career />} />
           <Route path="contact-us" element={<ContactUs />} />
           <Route path="career-page" element={<CareerPage />} />
           <Route path="service" element={<Service />} />
           <Route path="/listings/:alias" element={<JobPage />} />
           <Route path="/admin" element={<AdminLogin />} />
           <Route path="/admin/job-post" element={<AdminJobPost />} />
         </Route>
       </Routes>
       <Footer />
     </BrowserRouter>
   </div>
  );
}

export default App;
