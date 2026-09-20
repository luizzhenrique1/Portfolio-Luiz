export const skills = {
  Linguagens: ["HTML5", "CSS3", "JavaScript", "Python", "TypeScript", "SQL", "C#"],
  "Tecnologias e ferramentas": ["React", "Next.js", "Tailwind CSS", "Git e GitHub", "Figma", "Vercel", "APIs REST"],
  "Soft skills": ["Comunicação", "Trabalho em equipe", "Proatividade", "Resolução de problemas"],
};

export const services = [
  ["Front-end Development", "Interfaces responsivas e acessíveis, com atenção a performance, semântica e detalhes de interação."],
  ["Web Design", "Layouts modernos com hierarquia visual, tipografia e experiência de usuário bem resolvidas."],
  ["UI / UX", "Fluxos, componentes e protótipos que transformam necessidades reais em produtos simples de usar."],
  ["Branding digital", "Identidades visuais coesas, do conceito aos sistemas digitais, para marcas que precisam ser lembradas."],
  ["Automação", "Processos digitais mais eficientes usando JavaScript, Python, IA e ferramentas que reduzem trabalho repetitivo."],
] as const;

export const experiences = [
  ["Atual", "Comercial em Vendas", "Atendimento, comunicação com clientes e suporte ao processo de vendas."],
  ["07 / 2025", "Auxiliar de Logística / SHEIN", "Organização, identificação de encomendas, separação e transporte interno."],
  ["02 / 2025", "Desenvolvedor Web / Freelancer", "Desenvolvimento de site estático para melhorar a presença digital de uma marca."],
] as const;

export const projects = [
  {
    number: "01",
    type: "Aplicativo web",
    name: "FinancesTCC (Finwise)",
    description: "Aplicação de controle financeiro pessoal com foco em clareza visual, organização de conteúdo e experiência fluida.",
    technologies: ["Next.js", "Tailwind CSS", "JavaScript"],
    href: "https://finwise-site-remake.vercel.app",
    action: "Ver projeto",
    image: "/assets/projeto1.jpeg",
    alt: "Telas do projeto Finwise",
  },
  {
    number: "02",
    type: "Web / Freelance",
    name: "Vault Finances",
    description: "Interface web desenvolvida como freelancer, com identidade visual própria e foco em apresentar serviços financeiros com clareza.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    href: "https://vaultfinances.vercel.app",
    action: "Ver projeto",
    image: "/assets/projeto2.jpeg",
    alt: "Tela do projeto Vault Finances",
  },
  {
    number: "03",
    type: "Automação",
    name: "Long Video Automation",
    description: "Automação para produção de conteúdo em vídeo que integra LLM, web scraping e Remotion para reduzir etapas manuais.",
    technologies: ["Python", "LLM", "Web Scraping", "Remotion"],
    href: "https://github.com/luizzhenrique1/Long-Video-Automation",
    action: "Ver repositório",
    image: "/assets/projeto3.png",
    alt: "Imagem do projeto Long Video Automation",
  },
] as const;
