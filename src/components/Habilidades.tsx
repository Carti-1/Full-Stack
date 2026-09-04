import { habilidades } from "../data/conteudo";

function Habilidades() {
  return (
    <section className="secao secao-clara" id="habilidades">
      <div className="container">
        <p className="titulo-secao">Competências</p>
        <h2>Habilidades & Tecnologias</h2>
        <div className="grade-habilidades">
          {habilidades.map((item) => (
            <article className="card-habilidade" key={item.nome}>
              <span className="categoria-tag">{item.categoria}</span>
              <h3>{item.nome}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Habilidades;

