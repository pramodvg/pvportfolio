import Toolbar from './Component/Navigation/Toolbar/Toolbar'
import Home from './Component/Layouts/Home/home';
import About from './Component/Layouts/About/about'
import Service from './Component/Layouts/Service/service'
import Portfolio from './Component/Layouts/Portfolio/Portfolio'
import ContactMe from './Component/Layouts/Contact/Contactme'
import Footer from './Component/Layouts/Footer/footer'
// import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Toolbar />
      <Home />
      <About />
      <Service />
      <Portfolio />
      <ContactMe />
      {/* <Routes>
        <Route path="/pvportfolio" element={<Home />} />
        <Route path="/pvportfolio/about" element={<About />} />
        <Route path="/pvportfolio/service" element={<Service />} />
        <Route path="/pvportfolio/portfolio" element={<Portfolio />} />
        <Route path="/pvportfolio/contact" element={<ContactMe />} />
        <Route path="*" element={<Footer />} />
      </Routes> */}
      <Footer />
    </>
  );
}

export default App;
