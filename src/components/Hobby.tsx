import CardHobby from "./CardHobby";
import { hobbies, type Hobby } from "../data/conteudo";

function Hobbies() {
  return (
    <section className="secao secao-clara" id="hobbies">
      <div className="container">
        <p className="titulo-secao">Interesses</p>
        <h2>Hobbies & Atividades</h2>
        <div className="grade-servicos grade-hobbies">
          {hobbies.map((hobby: Hobby) => (
            <CardHobby
              key={hobby.id}
              titulo={hobby.titulo}
              descricao={hobby.descricao}
              imagem={hobby.imagem}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hobbies;

