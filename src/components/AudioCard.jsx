import React from "react";
import { Headphones } from "lucide-react";

export default function AudioCard({ duration, title, description, src }) {
  return (
    <div className="audio-card">
      <div className="audio-card__top">
        <span className="audio-card__icon" aria-hidden="true">
          <span className="audio-card__icon-svg">
            <Headphones size={20} strokeWidth={1.8} />
          </span>
        </span>

        <span className="audio-card__eyebrow">
          Ouvir em {duration}
        </span>
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