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
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 13a7 7 0 0 1 14 0" />
            <rect x="5" y="13" width="3.5" height="6" rx="1.5" />
            <rect x="15.5" y="13" width="3.5" height="6" rx="1.5" />
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