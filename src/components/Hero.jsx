import grafenoBg from "../assets/grafeno-bg.jpg";

export default function Hero() {
  return (
    <section className="hero">
      <div
        className="hero__background"
        style={{ backgroundImage: `url(${grafenoBg})` }}
      ></div>

      <div className="hero__overlay"></div>

      <div className="hero__content">
        <h1>Grafeno, o material do futuro.</h1>

        <p>
          Como pode um material com apenas um átomo de espessura transformar a
          tecnologia?
        </p>

        <div className="hero__buttons">
          <a href="#oque" className="hero__button">
            Explorar o tema
          </a>

          <a href={process.env.PUBLIC_URL + '/laboratorio-virtual/index.html'} className="hero__button hero__button--secondary">
  Laboratório virtual
          </a>

          <a 
  href="https://www.spatial.io/s/GrafenoMinho3D-Hangout-69b2cec3821cd5a28b4fb0f7?share=2617973722789225201" 
  className="hero__button hero__button--secondary"
  target="_blank"
  rel="noopener noreferrer"
>
  Metaverso
        </a>
        </div>
      </div>
    </section>
  );
}
