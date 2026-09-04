import { informacoesPessoais, destaques } from "../data/conteudo";

function Sobre() {
  return (
    <section className="secao" id="sobre">
      <div className="container sobre-grid">
        <div>
          <p className="titulo-secao">Sobre Mim</p>
          <h2>Trajetória e Foco Profissional</h2>
          <p className="sobre-texto">{informacoesPessoais.bio}</p>
      
        </div>
        <aside className="quadro-compromissos">
          <h3>Pilares de Formação</h3>
          <ul>
            {destaques.map((destaque) => (
              <li key={destaque}>{destaque}</li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}

export default Sobre;

