export default function VideoCard({ duration, title, description, link }) {
  return (
    <div className="video-card">
      <div className="video-card__top">
        <span className="video-card__icon" aria-hidden="true">
            <svg
                className="video-card__icon-svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                width="18"
                height="18"
            >
                <polygon points="8,5 19,12 8,19" />
            </svg>
            </span>
        <span className="video-card__label">Ver em {duration}</span>
      </div>

      <h3 className="video-card__title">{title}</h3>

      <p className="video-card__text">{description}</p>

      <div className="video-card__bottom">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="video-card__button"
        >
          Ver vídeo
        </a>
      </div>
    </div>
  );
}