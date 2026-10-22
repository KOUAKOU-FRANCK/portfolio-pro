import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Accueil from "./pages/Accueil.jsx";
import Informatique from "./pages/Informatique.jsx";
import Projets from "./pages/Projets.jsx";
import Photographie from "./pages/Photographie.jsx";
import Apropos from "./pages/Apropos.jsx";
import Contact from "./pages/Contact.jsx";
import NotFound from "./pages/NotFound.jsx";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#contenu">
        Aller au contenu
      </a>
      <ScrollToTop />
      <Navbar />
      <main id="contenu" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/informatique" element={<Informatique />} />
          <Route path="/projets" element={<Projets />} />
          <Route path="/photographie" element={<Photographie />} />
          <Route path="/a-propos" element={<Apropos />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
