# Portfólio Pessoal — Luiz Henrique

Portfólio pessoal desenvolvido como projeto acadêmico, aplicando práticas de desenvolvimento orientado por requisitos (histórias de usuário, critérios de aceitação, priorização MoSCoW, MVP e backlog) com apoio de Inteligência Artificial durante o planejamento e a implementação.

O site apresenta a identificação, competências, experiências profissionais, formação acadêmica, projetos, uma viagem marcante e formas de contato de Luiz Henrique, estudante de Análise e Desenvolvimento de Sistemas e desenvolvedor Front-end em busca de uma oportunidade como Desenvolvedor Júnior.

## Identificação do aluno

- **Nome:** Luiz Henrique
- **Curso:** Tecnologia em Análise e Desenvolvimento de Sistemas — IFSP Câmpus Guarulhos

## Tecnologias utilizadas

- **HTML5** semântico
- **CSS3** (identidade visual 100% customizada, com Grid/Flexbox próprios, responsiva e com animacoes nativas)
- **JavaScript** (vanilla, sem frameworks, com IntersectionObserver e requestAnimationFrame)
- **Google Fonts** — Kanit (tipografia display e corpo)

O uso de Bootstrap 5 era permitido pelo enunciado, mas foi dispensado propositalmente: todo o layout (incluindo o menu responsivo, o marquee horizontal e os cards empilhados de projetos) foi construído com CSS próprio para manter controle total sobre a identidade visual. Nenhum outro framework ou biblioteca de interface (React, Vue, Angular, Tailwind, etc.) foi utilizado, em conformidade com as restrições técnicas do projeto.

## Como executar o portfólio

Não é necessário nenhum processo de build ou instalação de dependências. Basta:

1. Baixar ou clonar este repositório.
2. Abrir o arquivo `index.html` diretamente no navegador,

   **ou**, para evitar eventuais bloqueios de CORS em alguns navegadores, servir a pasta localmente. Exemplo com Python:

   ```bash
   cd portfolio
   python3 -m http.server 8080
   ```

   E acessar `http://localhost:8080` no navegador.

## Estrutura do projeto

```
portfolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   ├── image1.png
│   ├── projeto1.jpeg, projeto1.1.jpeg, projeto1.2.jpeg
│   ├── projeto2.jpeg, projeto2.1.jpeg, projeto2.2.jpeg
│   └── projeto3.jpg, projeto3.1.jpeg, projeto3.2.jpeg
├── docs/
│   └── documentacao.md
└── README.md
```

## Resumo das funcionalidades

- **Identificação e apresentação pessoal** — seção hero com nome completo, título profissional e bio curta (sem foto, por decisão de composição visual registrada na documentação).
- **Competências e conhecimentos** — cartões de "Services" (áreas de atuação) e uma grade de tags organizada por categoria: linguagens, tecnologias/ferramentas e soft skills.
- **Experiências relevantes** — linha do tempo com cargo, período e descrição de cada atuação, da mais recente para a mais antiga.
- **Formação acadêmica** — formação principal (ADS — IFSP) e técnica (Etec) em destaque, com cursos complementares listados separadamente (nome + ano).
- **Projetos realizados ou em desenvolvimento** — cartões com título, descrição, tecnologias e link real para cada projeto: Finwise, Vault Finances e Long Video Automation.
- **Viagens realizadas** — destaque para a viagem a Cacupé, Santa Catarina.
- **Hobbies e lazer** — seção própria com interesses pessoais (item Could have da priorização MoSCoW, implementado nesta entrega).
- **Formas de contato** — links funcionais para e-mail (mailto), WhatsApp (wa.me), LinkedIn e GitHub.

### Interações implementadas em JavaScript

- Menu de navegação responsivo (hambúrguer no mobile, com animação de morph para "X").
- Navegação por scroll suave até cada seção.
- *Scroll spy*: destaque automático do item do menu correspondente à seção visível.
- Revelação progressiva dos elementos ao rolar a página (via `IntersectionObserver`, sem uso de `scroll` listener bruto).
- Estado visual da navbar ao rolar a página.
- Botão "voltar ao topo".
- Ano atualizado automaticamente no rodapé.

## Documentação

A documentação completa do planejamento do projeto — definição do projeto, prompts utilizados, histórias de usuário, critérios de aceitação, priorização MoSCoW, descrição do MVP e backlog acionável — está disponível em [`docs/documentacao.md`](./docs/documentacao.md).

## Link da versão publicada

[Luiz Henrique -- Front-end Developer](https://portfolio-luiz-cyan.vercel.app)
