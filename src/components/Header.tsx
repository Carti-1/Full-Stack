import { useState } from "react";

function Header() {
    const [menuAberto, setMenuAberto] = useState(false);
    const [temaClaro, setTemaClaro] = useState(false);

    const alternarTema = () => {
        setTemaClaro((prev) => !prev);
        document.body.classList.toggle('tema-claro');
    };

  return (
    <>
    <header className="header">
      <div className="container header-conteudo">
        <a className="marca" href="#inicio" onClick={fecharMenu}>
          <span>João Pedro</span>
          <small>Estudante de Engenharia da Computação</small>
        </a>

        <button
          className="menu-botao"
          type="button"
          onClick={alternarMenu}
          aria-label="Abrir ou fechar menu"
          aria-expanded={menuAberto}
        >
          {menuAberto ? "Fechar" : "Menu"}
        </button>

        <nav className={menuAberto ? "nav aberta" : "nav"} aria-label="Navegação principal">
          <a href="#inicio" onClick={fecharMenu}>Início</a>
          <a href="#sobre" onClick={fecharMenu}>Sobre</a>
          <a href="#projetos" onClick={fecharMenu}>Projetos</a>
          <a href="#habilidades" onClick={fecharMenu}>Habilidades</a>
          <a href="#hobbies" onClick={fecharMenu}>Hobbies</a>
          <a href="#contato" onClick={fecharMenu}>Contato</a>
          <a className="botao botao-pequeno" href="#contato" onClick={fecharMenu}>
            
          </a>
        </nav>
      </div>
    </header>
    </>
  );
}

export default Header;