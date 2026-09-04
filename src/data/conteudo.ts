export interface InformacoesPessoais {
  nome: string;
  cargo: string;
  instituicao: string;
  apresentacaoCurta: string;
  bio: string;
  foto: string;
  email: string;
  github: string;
  linkedin: string;
}

export interface Habilidade {
  nome: string;
  categoria: string;
}

export interface Projeto {
  id: number;
  titulo: string;
  descricao: string;
  tecnologia: string;
  link: string;
}

export interface Hobby {
  id: number;
  titulo: string;
  descricao: string;
  imagem: string;
}

export const informacoesPessoais: InformacoesPessoais = {
  nome: "João Pedro",
  cargo: "Estudante de Engenharia de Computação",
  instituicao: "SENAI CIMATEC",
  apresentacaoCurta: "Estudante de Engenharia de Computação com foco em desenvolvimento de software, automação, machine learning, e bancos de dados.",
  bio: "Sou estudante de Engenharia de Computação com foco em desenvolvimento de software e automação. Tenho construído minha base técnica desenvolvendo projetos práticos com Java, Python, React e JavaScript, aplicando conceitos sólidos de Programação Orientada a Objetos e Modelagem de Dados. Além disso, possuo vivência com sistemas embarcados e microcontroladores, como Arduino. Meu objetivo é ingressar no mercado de tecnologia para colaborar na resolução de problemas reais, aplicando meus conhecimentos e evoluindo profissionalmente em um ambiente dinâmico.",
  foto: "https://avatars.githubusercontent.com/u/136253558?v=4",
  email: "mailto:jpedro.tec24@gmail.com",
  github: "https://github.com/Carti-1",
  linkedin: "https://www.linkedin.com/in/jo%C3%A3o-pedro-silva-218435270/"
};

export const destaques: string[] = [
  "Graduação em Engenharia de Computação (SENAI CIMATEC)",
  "Foco em Desenvolvimento de Software, Automação, Machine Learning e Bancos de Dados",
  "Programação Orientada a Objetos & Modelagem de Dados",
  "Vivência com Sistemas Embarcados e Arduino/ESP32",
];

export const habilidades: Habilidade[] = [
  { nome: "React", categoria: "Frontend" },
  { nome: "JavaScript", categoria: "Linguagem" },
  { nome: "HTML5", categoria: "Frontend" },
  { nome: "CSS3", categoria: "Frontend" },
  { nome: "Java", categoria: "Linguagem / POO" },
  { nome: "Python", categoria: "Linguagem / IA" },
  { nome: "C", categoria: "Linguagem" },
  { nome: "Arduino", categoria: "Embarcados" },
  { nome: "Git & GitHub", categoria: "Controle de Versão" }
];

export const projetos: Projeto[] = [
  {
    id: 1,
    titulo: "KASTAI",
    descricao: "Projeto de inteligência artificial desenvolvido para criar e praticar soluções tecnológicas inovadoras.",
    tecnologia: "Python",
    link: "https://github.com/Carti-1/KASTAI"
  },
  {
    id: 2,
    titulo: "Sistema de Streaming",
    descricao: "Sistema para organizar e simular o gerenciamento de conteúdos e transmissões de streaming.",
    tecnologia: "Java | POO",
    link: "https://github.com/Carti-1/Sistema-de-Streaming"
  },
  {
    id: 3,
    titulo: "RPG-TerminalQuest",
    descricao: "Jogo de RPG via linha de comando criado para exercitar lógica avançada e conceitos de orientação a objetos.",
    tecnologia: "Java | POO",
    link: "https://github.com/Carti-1/RPG-TerminalQuest"
  }
];

export const hobbies: Hobby[] = [
  {
    id: 1,
    titulo: "Basquete",
    descricao: "Prática esportiva que estimula estratégia, trabalho em equipe e foco.",
    imagem: "https://portalconteudoaberto.com.br/wp-content/uploads/2023/08/lebron-james-nba-recorde-1.webp"
  },
  {
    id: 2,
    titulo: "Jogos",
    descricao: "Interesse por jogos eletrônicos, narrativa interativa e lógica de games.",
    imagem: "https://media.istockphoto.com/id/1513524265/pt/foto/video-game-controller-gaming-concept.jpg?s=612x612&w=0&k=20&c=dOZXcOWU3HoE8L-k5THo5lj0Xm_dJ6CxtuxS_1q7dyg="
  },
  {
    id: 3,
    titulo: "Música",
    descricao: "Apreciação musical e momentos de inspiração para criatividade e foco.",
    imagem: "https://dcdn-us.mitiendanube.com/stores/001/784/472/products/img_4135-c0340fbbc038d978d217587284344426-1024-1024.webp"
  }
];

