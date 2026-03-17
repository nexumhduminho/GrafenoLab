export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="content-section">
      <div className="content-section__container">
        <div className="content-section__header">
          <h2 className="section-title">{title}</h2>
          {subtitle && <p className="section-subtitle">{subtitle}</p>}
        </div>

        <div className="content-section__text">{children}</div>
      </div>
    </section>
  );
}