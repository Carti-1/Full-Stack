import { useState } from 'react';
import './App.css';

export default function App() {
  const [temaClaro, setTemaClaro] = useState(false);

  const alternarTema = () => {
    setTemaClaro((prev) => !prev);
    document.body.classList.toggle('tema-claro');
  };

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <a className="navbar-brand" href="#sobre">Portifólio</a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="nav justify-content-center">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#sobre">Sobre Mim</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#habilidades">Habilidades</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#projetos">Projetos</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contato">Contato</a>
                </li>
                <li className="nav-item">
                  <button
                    id="botao-tema"
                    className="btn btn-outline-light ms-lg-3"
                    type="button"
                    onClick={alternarTema}
                  >
                    {temaClaro ? 'Tema escuro' : 'Tema claro'}
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <section className="apresentacao">
          <div className="coluna-foto">
            <div id="foto">
              <img src="https://avatars.githubusercontent.com/u/136253558?v=4" alt="Minha Foto" />
            </div>
            <div id="nome">
              <h2><strong>João Pedro</strong></h2>
            </div>
          </div>

          <div id="sobre">
            <h3><strong>Sobre Mim</strong></h3>
            <p>
              Sou estudante de Engenharia de Computação no SENAI CIMATEC, com foco em desenvolvimento de software e automação. Tenho construído minha base técnica desenvolvendo projetos práticos com Java, Python, React, JavaScript aplicando conceitos sólidos de <strong>Programação Orientada a Objetos</strong> e <strong>Modelagem de Dados</strong>. Além disso, possuo vivência com sistemas embarcados e microcontroladores, como Arduino. Meu objetivo é ingressar no mercado de tecnologia para colaborar na resolução de problemas reais, aplicando meus conhecimentos e evoluindo profissionalmente em um ambiente dinâmico.
            </p>
          </div>
        </section>

        <section className="informacoes">
          <div id="habilidades">
            <h3><strong>Habilidades</strong></h3>
            <div>
              <span className="badge text-bg-primary me-1">HTML</span>
              <span className="badge text-bg-secondary me-1">CSS</span>
              <span className="badge text-bg-success me-1">JavaScript</span>
              <span className="badge text-bg-danger me-1">Python</span>
              <span className="badge text-bg-warning me-1">Java</span>
              <span className="badge text-bg-info me-1">C</span>
            </div>
          </div>

          <div id="projetos">
            <h3><strong>Projetos Recentes</strong></h3>
            <ul className="lista-projetos">
              <li className="projeto">
                <h4>KASTAI</h4>
                <p>Projeto de inteligência artificial desenvolvido para praticar soluções tecnológicas.</p>
                <span className="tecnologias">Python</span>
                <a href="https://github.com/Carti-1/KASTAI" target="_blank" rel="noopener noreferrer">Ver no GitHub</a>
              </li>
              <li className="projeto">
                <h4>Sistema de Streaming</h4>
                <p>Sistema para organizar e simular o gerenciamento de conteúdos de streaming.</p>
                <span className="tecnologias">Java | POO</span>
                <a href="https://github.com/Carti-1/Sistema-de-Streaming" target="_blank" rel="noopener noreferrer">Ver no GitHub</a>
              </li>
              <li className="projeto">
                <h4>RPG-TerminalQuest</h4>
                <p>Jogo de RPG no terminal criado para praticar lógica e programação orientada a objetos.</p>
                <span className="tecnologias">Java | POO</span>
                <a href="https://github.com/Carti-1/RPG-TerminalQuest" target="_blank" rel="noopener noreferrer">Ver no GitHub</a>
              </li>
            </ul>
          </div>
        </section>

        <section className="Like">
          <div id="Hobby">
            <h3><strong>Hobbies</strong></h3>
            <div className="lista-hobbies">
              <div className="card" style={{ width: '18rem' }}>
                <img
                  src="https://portalconteudoaberto.com.br/wp-content/uploads/2023/08/lebron-james-nba-recorde-1.webp"
                  className="card-img-top"
                  alt="Basquete"
                />
                <div className="card-body">
                  <h5 className="card-title">Basquete</h5>
                </div>
              </div>

              <div className="card" style={{ width: '18rem' }}>
                <img
                  src="https://media.istockphoto.com/id/1513524265/pt/foto/video-game-controller-gaming-concept.jpg?s=612x612&w=0&k=20&c=dOZXcOWU3HoE8L-k5THo5lj0Xm_dJ6CxtuxS_1q7dyg="
                  className="card-img-top"
                  alt="Jogos"
                />
                <div className="card-body">
                  <h5 className="card-title">Jogos</h5>
                </div>
              </div>

              <div className="card" style={{ width: '18rem' }}>
                <img
                  src="https://dcdn-us.mitiendanube.com/stores/001/784/472/products/img_4135-c0340fbbc038d978d217587284344426-1024-1024.webp"
                  className="card-img-top"
                  alt="Música"
                />
                <div className="card-body">
                  <h5 className="card-title">Música</h5>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div id="contato">
          <h4><strong>Contato</strong></h4>
          <p>
            <a className="link-contato" href="mailto:joaopedro@example.com">
              <i className="bi bi-envelope-fill" aria-hidden="true"></i> Gmail
            </a>
          </p>
          <p>
            <a className="link-contato" href="https://github.com/Carti-1">
              <i className="bi bi-github" aria-hidden="true"></i> GitHub
            </a>
          </p>
          <p>
            <a className="link-contato" href="https://www.linkedin.com/in/jo%C3%A3o-pedro-silva-218435270/">
              <i className="bi bi-linkedin" aria-hidden="true"></i> Linkedin
            </a>
          </p>
          <p>© {new Date().getFullYear()} João Pedro</p>
        </div>
      </footer>
    </>
  );
}