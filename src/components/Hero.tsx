import { informacoesPessoais } from "../data/conteudo";

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="container hero-grid">
        <div>
          <span className="etiqueta">Engenharia & Desenvolvimento</span>
          <h1>Olá, eu sou {informacoesPessoais.nome}</h1>
          <p>{informacoesPessoais.apresentacaoCurta}</p>
          <div className="grupo-botoes">
            <a className="botao" href="#projetos">
              Ver Projetos
            </a>
            <a className="botao botao-secundario" href="#contato">
              Entrar em Contato
            </a>
          </div>
          <small>Foco em aprendizado contínuo, inovação e resolução de problemas reais.</small>
        </div>
        <div className="hero-foto-wrapper">
          <img
            src={informacoesPessoais.foto}
            alt={`Foto de ${informacoesPessoais.nome}`}
            className="hero-foto"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;

