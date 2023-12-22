import React, { useEffect } from 'react'
import { BrowserRouter ,Route ,Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home';
import Footer from './Components/Footer';
import About from './Pages/About';
import Service from './Pages/Service';
import Case from './Pages/Case';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import BlogDescription from './Pages/Blog-page/BlogDescription';
import Aos from 'aos';

const App = () => {
  useEffect(() => {
    Aos.init()
  }, [])
  return (

  <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route exact path="/" element={<Home />} />
    <Route  path="/about" element={<About />} />
    <Route  path="/contact" element={<Contact />} />
    <Route  path="/service" element={<Service />} />
    <Route  path="/case" element={<Case />} />
    <Route  path="/blog" element={<Blog />} />
    <Route  path="/blogdescription" element={<BlogDescription />} />
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
