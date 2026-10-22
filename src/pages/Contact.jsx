import ContactLinks from "../components/ContactLinks.jsx";

// Pas de formulaire en V1 : aucun service d'envoi n'est connecté,
// et le cahier des charges interdit de simuler un envoi réussi.
export default function Contact() {
  return (
    <>
      <title>Contact — Kouakou Kouadio Franck</title>
      <section className="page-header">
        <div className="container">
          <h1>Contact</h1>
          <p>
            Recruteurs, entreprises, particuliers : pour une opportunité, une collaboration ou une
            prestation photo, écrivez-moi directement.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container contact">
          <ContactLinks className="contact-links--large" message="Bonjour Franck, je vous contacte depuis votre portfolio." />
        </div>
      </section>
    </>
  );
}
