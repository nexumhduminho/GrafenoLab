export default function AudioCard({ duration, title, description, src }) {
  return (
    <div className="audio-card">
      <div className="audio-card__top">
        <span className="audio-card__icon" aria-hidden="true">
          <svg
            className="audio-card__icon-svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 12a8 8 0 1 1 16 0" />
            <path d="M6 12v6a2 2 0 0 0 2 2h1v-8H8a2 2 0 0 0-2 2Z" />
            <path d="M18 12v6a2 2 0 0 1-2 2h-1v-8h1a2 2 0 0 1 2 2Z" />
          </svg>
        </span>

        <span className="audio-card__eyebrow">Ouvir em {duration}</span>
      </div>

      <h3 className="audio-card__title">{title}</h3>

      <p className="audio-card__text">{description}</p>

      <audio controls className="audio-card__player">
        <source src={src} type="audio/mpeg" />
        O teu navegador não suporta áudio.
      </audio>
    </div>
  );
}