import { profile, whatsappLink } from "../data/profile.js";

// Affiche uniquement les moyens de contact renseignés dans data/profile.js.
export default function ContactLinks({ message = "", className = "" }) {
  const liens = [
    profile.email && { label: "E-mail", href: `mailto:${profile.email}`, texte: profile.email },
    profile.whatsapp && { label: "WhatsApp", href: whatsappLink(message), texte: "Écrire sur WhatsApp" },
    profile.linkedin && { label: "LinkedIn", href: profile.linkedin, texte: "Profil LinkedIn" },
    profile.github && { label: "GitHub", href: profile.github, texte: "Mes dépôts GitHub" },
  ].filter(Boolean);

  return (
    <ul className={`contact-links ${className}`}>
      {liens.map((l) => (
        <li key={l.label}>
          <span className="contact-links__label">{l.label}</span>
          <a
            href={l.href}
            {...(l.href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
          >
            {l.texte}
          </a>
        </li>
      ))}
    </ul>
  );
}
