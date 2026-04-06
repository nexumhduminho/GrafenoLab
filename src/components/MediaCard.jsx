import React from "react";

export default function MediaCard({
  icon,
  eyebrow,
  title,
  description,
  buttonText,
  onButtonClick,
  variant,
  audioSrc
}) {
  return (
    <div className="audio-card">
      <div className="audio-card__top">
        <div className={`audio-card__icon ${variant}`}>
          <span className="audio-card__icon-svg">{icon}</span>
        </div>
        <p className="audio-card__eyebrow">{eyebrow}</p>
      </div>

      <h3 className="audio-card__title">{title}</h3>

      <p className="audio-card__text">{description}</p>

      {/* SE FOR ÁUDIO */}
      {variant === "audio" && audioSrc && (
        <audio controls className="audio-card__player">
          <source src={audioSrc} type="audio/mpeg" />
        </audio>
      )}

      {/* OUTROS CASOS */}
      {variant !== "audio" && (
        <button className="card-button" type="button" onClick={onButtonClick}>
          {buttonText}
        </button>
      )}
    </div>
  );
}