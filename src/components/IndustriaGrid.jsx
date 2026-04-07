export default function IndustriaGrid({ cards = [] }) {
  const cores = {
    producao: "#38bdf8",
    desenvolvimento: "#a78bfa",
    integracao: "#34d399",
  };

  return (
    <>
      <div className="areas-grid industria-grid">
        {(cards || []).map((card, i) => (
          <div key={i} className="area-card industria-card">
            <span
              className="industria-dot"
              style={{ backgroundColor: cores[card.tipo] }}
            ></span>

            <h4>{card.titulo}</h4>
            <p>{card.texto}</p>
          </div>
        ))}
      </div>

      <div className="industria-legenda">
        <span>
          <span
            className="legenda-dot"
            style={{ backgroundColor: "#38bdf8" }}
          ></span>
          Produção
        </span>

        <span>
          <span
            className="legenda-dot"
            style={{ backgroundColor: "#a78bfa" }}
          ></span>
          Desenvolvimento
        </span>

        <span>
          <span
            className="legenda-dot"
            style={{ backgroundColor: "#34d399" }}
          ></span>
          Integração
        </span>
      </div>
    </>
  );
}