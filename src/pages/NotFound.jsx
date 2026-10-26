import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <section className="section">
        <div className="container cta">
          <h1>Page introuvable</h1>
          <p>Cette page n'existe pas ou a été déplacée.</p>
          <Link to="/" className="btn btn--primary">
            Retour à l'accueil
          </Link>
        </div>
      </section>
    </>
  );
}
