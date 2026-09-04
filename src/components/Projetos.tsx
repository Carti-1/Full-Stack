import CardProjetos from "./CardProjetos";
import { projetos, type Projeto } from "../data/conteudo";

function Projetos() {
  return (
    <section className="secao" id="projetos">
      <div className="container">
        <p className="titulo-secao">Portfólio</p>
        <h2>Projetos em Destaque</h2>
        <div className="grade-servicos grade-projetos">
          {projetos.map((projeto: Projeto) => (
            <CardProjetos
              key={projeto.id}
              titulo={projeto.titulo}
              descricao={projeto.descricao}
              tecnologia={projeto.tecnologia}
              link={projeto.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projetos;

