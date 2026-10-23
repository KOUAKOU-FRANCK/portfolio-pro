import { useEffect, useRef, useState } from "react";

// Galerie avec visionneuse agrandie.
// La visionneuse utilise l'élément natif <dialog> : Échap ferme, les flèches changent de photo.
export default function PhotoGallery({ photos, variante = "" }) {
  const [index, setIndex] = useState(null);
  const dialogRef = useRef(null);
  const photo = index !== null ? photos[index] : null;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (photo && !dialog.open) dialog.showModal();
    if (!photo && dialog.open) dialog.close();
  }, [photo]);

  const precedente = () => setIndex((i) => (i - 1 + photos.length) % photos.length);
  const suivante = () => setIndex((i) => (i + 1) % photos.length);

  const onKeyDown = (e) => {
    if (e.key === "ArrowLeft") precedente();
    if (e.key === "ArrowRight") suivante();
  };

  if (photos.length === 0) {
    return <p className="muted">Aucune photo dans cette catégorie pour le moment.</p>;
  }

  return (
    <>
      <ul className={`gallery${variante ? ` gallery--${variante}` : ""}`}>
        {photos.map((p, i) => (
          <li key={p.id}>
            <button type="button" className="gallery__item" onClick={() => setIndex(i)}>
              <img src={p.miniature} alt={p.alt} width={p.largeur} height={p.hauteur} loading="lazy" />
              <span className="gallery__legende" aria-hidden="true">{p.categorie}</span>
              <span className="sr-only">Agrandir la photo</span>
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        className="lightbox"
        aria-label="Visionneuse de photos"
        onClose={() => setIndex(null)}
        onKeyDown={onKeyDown}
        onClick={(e) => e.target === dialogRef.current && setIndex(null)}
      >
        {photo && (
          <figure>
            <img src={photo.src} alt={photo.alt} />
            <figcaption>
              {photo.categorie} · {index + 1} / {photos.length}
            </figcaption>
          </figure>
        )}
        <button type="button" className="lightbox__close" onClick={() => setIndex(null)}>
          <span aria-hidden="true">×</span>
          <span className="sr-only">Fermer</span>
        </button>
        {photos.length > 1 && (
          <>
            <button type="button" className="lightbox__nav lightbox__nav--prev" onClick={precedente}>
              <span aria-hidden="true">‹</span>
              <span className="sr-only">Photo précédente</span>
            </button>
            <button type="button" className="lightbox__nav lightbox__nav--next" onClick={suivante}>
              <span aria-hidden="true">›</span>
              <span className="sr-only">Photo suivante</span>
            </button>
          </>
        )}
      </dialog>
    </>
  );
}
