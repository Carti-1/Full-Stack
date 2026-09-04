interface CardHobbyProps {
  titulo: string;
  descricao: string;
  imagem: string;
}

function CardHobby({ titulo, descricao, imagem }: CardHobbyProps) {
  return (
    <article className="card-hobby">
      <div className="card-hobby-imagem-wrapper">
        <img src={imagem} alt={titulo} className="card-hobby-imagem" />
      </div>
      <div className="card-hobby-conteudo">
        <h3>{titulo}</h3>
        <p>{descricao}</p>
      </div>
    </article>
  );
}

export default CardHobby;

