import React from 'react'
// import Toolbar from './Component/Navigation/Toolbar/Toolbar'
// import Home from './Component/Layouts/Home/home';
// import About from './Component/Layouts/About/about'
// import Service from './Component/Layouts/Service/service'
// import Portfolio from './Component/Layouts/Portfolio/Portfolio'
// import ContactMe from './Component/Layouts/Contact/Contactme'
// import Footer from './Component/Layouts/Footer/footer'
// import { Routes, Route } from "react-router-dom";
export default function footer() {
    return (
        <div>
            <footer id="footer">
                <div className="footer-links text-center">
                    <a href='https://github.com/pramodvg' target="_blank"><i className='fa fa-github'></i>Github</a>
                    <a href='https://www.linkedin.com/in/pramod-vaghasia-2641a919a' target="_blank"><i className='fa fa-linkedin'></i>LinkedIn</a>
                </div>
                <div>

                </div>
                <p>
                    Copyright All Rights Reserved By <strong>Pramod Vaghasia.</strong>
                </p>
            </footer>
            {/* <Toolbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/service" element={<Service />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<ContactMe />} />
                <Route path="*" element={<Footer />} />
            </Routes>
            <Footer /> */}
        </div>
    )
}
