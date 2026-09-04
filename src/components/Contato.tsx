import { useState, type FormEvent } from "react";
import { informacoesPessoais } from "../data/conteudo";

function Contato() {
  const [mensagemEnviada, setMensagemEnviada] = useState<boolean>(false);

  function enviarFormulario(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    setMensagemEnviada(true);
    evento.currentTarget.reset();
  }

  return (
    <section className="secao" id="contato">
      <div className="container contato-grid">
        <div>
          <p className="titulo-secao">Contato</p>
          <h2>Vamos conversar?</h2>
          <p>
            Estou disponível para oportunidades de estágio, colaboração em projetos ou troca de experiências sobre tecnologia.
          </p>
          <div className="contatos-diretos">
            <p>
              <strong>E-mail:</strong>{" "}
              <a href={informacoesPessoais.email} className="link-destaque">
                jpedro.tec24@gmail.com
              </a>
            </p>
            <p>
              <strong>GitHub:</strong>{" "}
              <a
                href={informacoesPessoais.github}
                target="_blank"
                rel="noopener noreferrer"
                className="link-destaque"
              >
                github.com/Carti-1
              </a>
            </p>
            <p>
              <strong>LinkedIn:</strong>{" "}
              <a
                href={informacoesPessoais.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="link-destaque"
              >
                João Pedro Silva
              </a>
            </p>
          </div>
        </div>

        <form className="formulario" onSubmit={enviarFormulario}>
          <label htmlFor="nome">Nome</label>
          <input id="nome" name="nome" type="text" placeholder="Seu nome" required />

          <label htmlFor="contato">Telefone ou E-mail</label>
          <input
            id="contato"
            name="contato"
            type="text"
            placeholder="exemplo@email.com ou (00) 00000-0000"
            required
          />

          <label htmlFor="mensagem">Mensagem</label>
          <textarea
            id="mensagem"
            name="mensagem"
            rows={5}
            placeholder="Como posso te ajudar ou colaborar com o seu time?"
            required
          ></textarea>

          <button className="botao" type="submit">
            Enviar mensagem
          </button>
          {mensagemEnviada && (
            <p className="mensagem-sucesso">
              Mensagem registrada com sucesso na interface!
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contato;

