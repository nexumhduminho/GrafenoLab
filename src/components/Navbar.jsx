export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__brand">
        GRAFENO<span>.Lab</span>
      </div>

      <nav className="navbar__nav">
        <a href="#oque">O que é?</a>
        <a href="#propriedades">Propriedades</a>
        <a href="#aplicacoes">Aplicações</a>
        <a href="#futuro">Formação e Profissões</a>
      </nav>
    </header>
  );
}