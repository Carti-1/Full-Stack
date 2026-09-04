import { informacoesPessoais } from "../data/conteudo";

function Footer() {
  const anoAtual: number = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-conteudo">
        <strong>
          {informacoesPessoais.nome} — {informacoesPessoais.cargo}
        </strong>
        <p>
          {informacoesPessoais.nome} | © {anoAtual} — Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

