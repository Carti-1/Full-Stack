interface CardProjetosProps {
  titulo: string;
  descricao: string;
  tecnologia: string;
  link: string;
}

function CardProjetos({ titulo, descricao, tecnologia, link }: CardProjetosProps) {
  return (
    <article className="card-servico card-projeto">
      <span className="modalidade">{tecnologia}</span>
      <h3>{titulo}</h3>
      <p>{descricao}</p>
      <a
        className="botao botao-pequeno botao-link"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        Ver no GitHub &rarr;
      </a>
    </article>
  );
}

export default CardProjetos;

