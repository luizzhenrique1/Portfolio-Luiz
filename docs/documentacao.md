# Documentação do Projeto — Portfólio Pessoal Luiz Henrique

## 1. Definição do Projeto

**Nome do projeto:** Portfólio Pessoal — Luiz Henrique

**Problema/necessidade atendida:**
Luiz Henrique é estudante de Análise e Desenvolvimento de Sistemas e desenvolvedor Front-end em busca de uma oportunidade como Desenvolvedor Júnior. Atualmente não possui um espaço digital centralizado que reúna e apresente de forma profissional suas competências técnicas, experiências, formação e projetos, o que dificulta sua visibilidade para recrutadores e potenciais clientes/parceiros.

**Objetivo principal:**
Desenvolver um portfólio pessoal que apresente de forma clara, organizada e profissional a trajetória acadêmica, técnica e profissional de Luiz Henrique, servindo como principal ponto de contato digital para oportunidades de emprego e projetos freelance.

**Público-alvo:**
- Recrutadores e times de RH avaliando candidatura para vagas de Desenvolvedor Júnior
- Empresas ou clientes em potencial interessados em serviços de desenvolvimento freelance
- Contatos profissionais da área de tecnologia (networking)

**Proposta visual:**
Design em dark mode, moderno e minimalista, com hierarquia visual clara, tipografia limpa e uso de espaçamento generoso para transmitir profissionalismo e domínio técnico em front-end. Paleta reduzida (fundo escuro + 1-2 cores de destaque) para reforçar identidade visual coesa em todas as seções.

**Conteúdo apresentado:**
Identificação pessoal, competências técnicas e soft skills, experiências profissionais, formação acadêmica (incluindo cursos complementares), projetos desenvolvidos, hobbies/lazer, viagens realizadas e formas de contato.

**Principais funcionalidades:**
- Navegação clara entre seções (menu fixo com scroll suave)
- Listagem de projetos com descrição, tecnologias e links funcionais
- Atalhos de contato funcionais (link direto para WhatsApp e e-mail)
- Design responsivo (desktop e mobile)
- Interações em JavaScript (menu mobile, scroll spy, interações em cards de projeto)

**Tecnologias utilizadas:**
HTML5 semântico, CSS3 (customizado, sem framework de UI) e JavaScript vanilla (`IntersectionObserver`, `requestAnimationFrame`). O uso de Bootstrap era permitido pelo enunciado, mas foi dispensado: a responsividade e o layout foram construídos inteiramente com CSS Grid/Flexbox próprios.

---

## 2. Prompts Utilizados

### Prompt 1 — Levantamento de conteúdo pessoal
- **Objetivo do prompt:** Coletar as informações reais do aluno para as 8 seções obrigatórias do portfólio (identificação, competências, experiências, formação, projetos, hobbies, viagens, contato).
- **Texto enviado à IA:** Solicitação estruturada, seção por seção, pedindo dados reais (nome, bio, competências, experiências, formação, projetos, hobbies, viagens e contatos).
- **Resultado obtido:** Lista completa de conteúdo pessoal, com todas as seções preenchidas exceto viagens (inicialmente em aberto).
- **Análise crítica da resposta:** As perguntas guiadas ajudaram a organizar o conteúdo de forma completa, mas a seção de viagens ficou incompleta na primeira rodada.
- **Ajustes ou novos prompts utilizados:** Prompt de acompanhamento perguntando especificamente sobre o destino de viagem, resultando na inclusão de Cacupé/SC.
- **Decisão tomada pelo aluno:** Aceitar a estrutura de conteúdo levantada e complementar a seção de viagens com o destino real (Cacupé, Santa Catarina).

### Prompt 2 — Definição do projeto
- **Objetivo do prompt:** Transformar os dados pessoais coletados em uma Definição de Projeto formal, seguindo o template exigido (nome, problema, objetivo, público-alvo, proposta visual, conteúdo, funcionalidades, tecnologias).
- **Texto enviado à IA:** Pedido de estruturação da definição do projeto com base no conteúdo já levantado e na escolha de estilo visual (dark mode, moderno, minimalista).
- **Resultado obtido:** Texto de definição do projeto cobrindo os 8 itens exigidos pelo enunciado.
- **Análise crítica da resposta:** O texto capturou bem o posicionamento profissional pretendido (candidatura a vaga júnior); manteve linguagem objetiva sem exageros.
- **Ajustes ou novos prompts utilizados:** Nenhum ajuste necessário nesta etapa.
- **Decisão tomada pelo aluno:** Aprovar a definição do projeto sem alterações.

### Prompt 3 — Histórias de usuário
- **Objetivo do prompt:** Traduzir as 8 seções obrigatórias do enunciado em histórias de usuário no formato "Como [ator], quero [ação], para [benefício]".
- **Texto enviado à IA:** Solicitação de geração de uma história por seção, utilizando diferentes atores (visitante, recrutador) conforme o contexto de cada funcionalidade.
- **Resultado obtido:** 8 histórias de usuário (US01 a US08), cada uma vinculada a uma seção do portfólio.
- **Análise crítica da resposta:** O uso de atores diferenciados (recrutador vs. visitante genérico) tornou as histórias mais realistas e ajudou na priorização posterior.
- **Ajustes ou novos prompts utilizados:** Nenhum ajuste necessário.
- **Decisão tomada pelo aluno:** Aprovar as 8 histórias como definidas.

### Prompt 4 — Critérios de aceitação
- **Objetivo do prompt:** Detalhar critérios objetivos e verificáveis para cada história de usuário, evitando termos subjetivos.
- **Texto enviado à IA:** Pedido de critérios testáveis (sim/não) para cada uma das 8 histórias já definidas.
- **Resultado obtido:** Lista de critérios de aceitação específicos, com quantidades mínimas (ex: mínimo 8 tecnologias, mínimo 3 hobbies) e comportamentos esperados (ex: links abrindo em nova aba).
- **Análise crítica da resposta:** Os critérios evitaram termos subjetivos como "bonito" ou "fácil de usar", atendendo à exigência do enunciado. Alguns limites numéricos (como "mínimo 8 tecnologias") foram aceitos por já refletirem o conteúdo real levantado.
- **Ajustes ou novos prompts utilizados:** Nenhum ajuste necessário.
- **Decisão tomada pelo aluno:** Aprovar os critérios de aceitação como definidos.

### Prompt 5 — Priorização MoSCoW
- **Objetivo do prompt:** Classificar as histórias de usuário segundo o método MoSCoW, considerando o objetivo real do portfólio (candidatura a vaga júnior).
- **Texto enviado à IA:** Pedido de priorização justificada, com foco em quais seções são indispensáveis para a função central do portfólio.
- **Resultado obtido:** Classificação inicial com Identificação, Competências, Projetos e Contato como Must have; Experiências e Formação como Should have; Hobbies como Could have; Viagens como Won't have now (por falta de conteúdo).
- **Análise crítica da resposta:** A priorização inicial fazia sentido, mas ao fornecer o destino de viagem (Cacupé/SC), reavaliei a prioridade de Viagens.
- **Ajustes ou novos prompts utilizados:** Prompt de ajuste solicitando reclassificação da história de Viagens após confirmação do conteúdo disponível.
- **Decisão tomada pelo aluno:** Promover Viagens (US07) de "Won't have now" para "Must have", incluindo-a no MVP.

### Prompt 6 — Definição do MVP
- **Objetivo do prompt:** Definir o corte mínimo do produto que já seria funcional e avaliável, com base no MoSCoW fechado.
- **Texto enviado à IA:** Pedido de definição do MVP considerando as histórias Must have e garantindo que o portfólio pudesse ser "acessado, utilizado e avaliado" conforme exigência do enunciado.
- **Resultado obtido:** MVP definido com 5 seções (Identificação, Competências, Projetos, Viagens, Contato) e interações de navegação/responsividade.
- **Análise crítica da resposta:** O corte manteve o foco no objetivo profissional do portfólio (conseguir vaga júnior), deixando Experiências e Formação como evolução futura sem comprometer a entrega principal.
- **Ajustes ou novos prompts utilizados:** Nenhum ajuste necessário.
- **Decisão tomada pelo aluno:** Aprovar o MVP como definido.

### Prompt 7 — Backlog acionável
- **Objetivo do prompt:** Quebrar o MVP e as histórias complementares em itens de backlog pequenos, verificáveis e vinculados a uma história de usuário, começando com verbo de ação.
- **Texto enviado à IA:** Pedido de tabela de backlog com ID, item, história relacionada, prioridade MoSCoW, critérios de aceitação e status.
- **Resultado obtido:** Tabela com 17 itens de backlog (BL01 a BL17), cobrindo desde a estrutura de pastas até a publicação do portfólio.
- **Análise crítica da resposta:** A granularidade dos itens evitou descrições genéricas (como "fazer o site"), atendendo à exigência do enunciado. A ordem sugerida (estrutura → seções Must have → interações → Should have → documentação) é lógica para execução incremental.
- **Ajustes ou novos prompts utilizados:** Nenhum ajuste necessário.
- **Decisão tomada pelo aluno:** Aprovar o backlog como base de execução do projeto.

### Prompt 8 — Reclassificação de prioridades após feedback do autor
- **Objetivo do prompt:** Reavaliar a prioridade de US03 (Experiências) e US04 (Formação acadêmica) após o autor indicar que essas informações são muito importantes para seu objetivo pessoal.
- **Texto enviado à IA:** Solicitação para promover US03 e US04 de Should have para Must have, ajustando MVP e backlog de acordo.
- **Resultado obtido:** MoSCoW, MVP e backlog atualizados, com 7 histórias (US01, US02, US03, US04, US05, US07, US08) compondo o MVP, restando apenas US06 (Hobbies) como Could have fora do MVP.
- **Análise crítica da resposta:** A mudança amplia o escopo do MVP, aumentando o esforço de implementação, mas se justifica pela relevância pessoal que o autor atribui à formação e experiência para sua candidatura como Desenvolvedor Júnior — informação que só o próprio autor poderia validar.
- **Ajustes ou novos prompts utilizados:** Nenhum ajuste adicional necessário; decisão aplicada diretamente à documentação.
- **Decisão tomada pelo aluno:** Confirmar a promoção de US03 e US04 para Must have, aceitando o aumento de escopo do MVP.

### Prompt 9 — Implementação do código (HTML, CSS, JS)
- **Objetivo do prompt:** Transformar o backlog e as histórias de usuário em um portfólio funcional, seguindo as restrições técnicas (HTML, CSS e JavaScript, com Bootstrap 5 permitido mas opcional) e a identidade visual solicitada (dark mode, moderno, minimalista, paleta preto → roxo → magenta → vermelho).
- **Texto enviado à IA:** Solicitação para implementar a estrutura completa do projeto (index.html, css/style.css, js/script.js) cobrindo as 7 seções Must have do MVP mais a seção de Hobbies (Could have), com interações reais em JavaScript (menu responsivo, scroll spy, reveal on scroll, links de contato funcionais).
- **Resultado obtido:** Portfólio completo e funcional, com HTML semântico, identidade visual 100% customizada em CSS próprio (Grid/Flexbox), e todas as interações descritas no MVP implementadas sem elementos simulados.
- **Análise crítica da resposta:** O código entregue respeita a restrição de não usar outros frameworks de interface. Como o layout customizado (marquee, cards empilhados, hero editorial) exigia controle fino de grid e animação, optou-se por não usar Bootstrap, aplicando toda a identidade visual (cores, tipografia, cards com profundidade, motion) via CSS puro. A responsividade foi validada por inspeção de código e depois em navegador, com breakpoints para mobile, tablet e desktop.
- **Ajustes ou novos prompts utilizados:** Foi necessário reprocessar a foto de perfil enviada; o pedido inicial de alterar roupa/pose da foto foi recusado pela IA por não ser uma edição realizável dessa forma, e a solução adotada foi manter a foto original enviada pelo aluno, deixando a remoção/tratamento de fundo a cargo do próprio aluno.
- **Decisão tomada pelo aluno:** Aceitar a implementação entregue, usando a foto original por enquanto, com plano de substituí-la por uma versão com fundo tratado antes da entrega final.

### Prompt 10 — Direção visual e reestruturação do portfólio

- **Objetivo do prompt:** Transformar o portfólio em uma experiência autoral de alto impacto para Luiz Henrique, mantendo as limitações técnicas do projeto e o conteúdo profissional já validado.
- **Texto enviado à IA:** Solicitação para criar uma landing page de portfólio com linguagem visual de criador digital: fundo escuro, tipografia Kanit, títulos display de grande escala, acento magenta controlado, navegação flutuante, retrato em destaque, faixa horizontal de projetos, texto revelado por rolagem, seção de serviços, projetos em empilhamento sticky e contato com links funcionais.
- **Resultado obtido:** Foi criada uma identidade visual escura, moderna e autoral, com títulos de grande escala, navegação fixa, retrato em destaque, faixa horizontal de projetos, texto revelado por rolagem, seção de serviços, cards de projetos em empilhamento sticky e área de contato funcional.
- **Análise crítica da resposta:** A direção visual preservou o conteúdo profissional já validado e criou uma experiência mais marcante do que uma estrutura convencional de portfólio. A escolha de uma composição com fundo escuro e acento magenta reforçou a identidade do projeto, embora exigisse validação visual cuidadosa para evitar sobreposições e excesso de elementos na primeira tela.
- **Ajustes ou novos prompts utilizados:** Como o projeto não possui pipeline React, TypeScript, Tailwind ou Framer Motion e a documentação define HTML5, CSS3, JavaScript vanilla e Bootstrap como stack, as interações foram implementadas com APIs nativas: `IntersectionObserver`, `requestAnimationFrame`, eventos passivos de rolagem e transformações CSS. A estrutura visual foi adaptada para preservar a intenção do prompt sem introduzir dependências incompatíveis.
- **Decisão tomada pelo aluno:** Aprovar a direção visual e manter as funcionalidades previstas: menu mobile, scroll spy, revelações, efeito magnético, marquee, empilhamento de projetos e links funcionais de contato. A primeira tela deveria apresentar identidade profissional, chamada para contato e navegação, enquanto as demais seções permaneceriam representadas e responsivas.

### Prompt 11 — Organização dos recursos, atualização da hero e imagens de projetos

- **Objetivo do prompt:** Corrigir os caminhos dos arquivos após a organização do projeto em pastas (`css/`, `js/`, `assets/` e `docs/`), adicionar as novas imagens à área de projetos e melhorar a composição visual da hero sem alterar as demais seções.
- **Texto enviado à IA:** Solicitação para atualizar os caminhos dos arquivos, incluir as novas fotos na aba de projetos e corrigir a tipografia da hero, que apresentava baixa legibilidade, além de remover o efeito visual estranho de bolha aplicado ao retrato. Também foi solicitado o uso da skill `design-taste-frontend`, preservando o restante do portfólio.
- **Resultado obtido:** Os caminhos do CSS, JavaScript e imagens foram atualizados para refletir a estrutura real de pastas. As imagens adicionais (`projeto1.1`, `projeto1.2`, `projeto2.1`, `projeto2.2`, `projeto3.1` e `projeto3.2`) foram distribuídas na faixa visual e nos cards de projetos. A tipografia da hero recebeu mais contraste e o retrato deixou de usar mistura de camadas, reduzindo o efeito artificial.
- **Análise crítica da resposta:** A correção resolveu os caminhos quebrados e melhorou a leitura inicial, mas a primeira reorganização ainda mantinha uma disputa visual entre o título, o retrato e o botão de contato. A inspeção visual em navegador foi importante para identificar essa sobreposição, que não aparecia na validação estática.
- **Ajustes ou novos prompts utilizados:** Foi realizado um ajuste posterior na composição da hero para separar melhor título, retrato e CTA em desktop, mantendo uma adaptação específica para telas menores.
- **Decisão tomada pelo aluno:** Manter a identidade visual escura, a tipografia Kanit e a estrutura das demais seções, aceitando apenas as mudanças de caminhos, imagens e hero.

### Prompt 12 — Remoção do retrato e ampliação do título da hero

- **Objetivo do prompt:** Retirar definitivamente a imagem da hero e o retrato, ampliar o título principal e preencher a área livre com um elemento visual coerente com a identidade do portfólio.
- **Texto enviado à IA:** Solicitação para remover a imagem e o retrato da hero, aumentar o título e adicionar outro elemento para evitar que a composição ficasse vazia no espaço anteriormente ocupado pela foto.
- **Resultado obtido:** O bloco HTML do retrato e seus estilos associados foram removidos da hero. O título passou a ocupar uma área maior da primeira tela, com mais presença visual. No espaço lateral foi adicionado um marcador editorial com o número `01`, uma linha de destaque e uma breve descrição sobre a abordagem profissional.
- **Análise crítica da resposta:** A remoção da imagem simplificou a composição e eliminou definitivamente o problema visual do retrato. O marcador lateral preserva o equilíbrio entre texto e espaço negativo sem inserir uma nova fotografia ou transformar a hero em um conjunto de cards.
- **Ajustes ou novos prompts utilizados:** Foi feita uma validação visual em navegador após a alteração para confirmar a legibilidade do título, o posicionamento do novo elemento e a ausência de referências ao retrato na hero.
- **Decisão tomada pelo aluno:** Aprovar a hero sem fotografia, priorizando uma apresentação tipográfica mais direta e alinhada à identidade editorial/digital do portfólio.


### Prompt 13 — Auditoria de rastreabilidade e correções finais

- **Objetivo do prompt:** Conferir a rastreabilidade entre enunciado, documentação e implementação antes da entrega, e vincular os projetos reais do autor.
- **Texto enviado à IA:** Pedido de auditoria completa comparando as diretrizes do enunciado com a documentação e o código, seguido do fornecimento dos links reais dos 3 projetos (Finwise, Vault Finances e Long Video Automation).
- **Resultado obtido:** A auditoria identificou divergências entre o que a documentação afirmava e o que estava implementado: (1) menção a Bootstrap 5 sem uso real no código; (2) seção de Hobbies (US06) marcada como concluída no backlog sem existir no HTML; (3) critérios de aceitação de US02 (competências) sem correspondência real na seção; (4) critério de US01 exigindo foto do autor, já removida por decisão de design; (5) cursos complementares não listados separadamente da formação principal, contrariando US04; (6) cards de projeto sem descrição, tecnologias ou links reais.
- **Análise crítica da resposta:** As divergências identificadas eram exatamente do tipo que o enunciado pede para evitar — "funcionalidades importantes implementadas sem documentação" e "requisitos definidos como concluídos que não estejam presentes na aplicação". A correção priorizou implementar o que faltava (competências, hobbies, cursos complementares, links reais) em vez de apenas reduzir a documentação, preservando a identidade visual já aprovada.
- **Ajustes ou novos prompts utilizados:** Foram feitos ajustes pontuais em `index.html` e `css/style.css` (seção de competências com tecnologias/soft skills categorizadas, seção de Hobbies, cursos complementares separados, descrição e tecnologias em cada projeto, breakpoint de tablet) sem alterar a estrutura de arquivos nem quebrar o layout existente.
- **Decisão tomada pelo aluno:** Aprovar as correções, remover a referência ao Bootstrap 5 do texto (já que não é utilizado), atualizar os critérios de aceitação de US01 para refletir a decisão real sobre a foto, e vincular os projetos reais: `finwise-site-remake.vercel.app`, `vaultfinances.vercel.app` e `github.com/luizzhenrique1/Long-Video-Automation`.

---

## 3. Histórias de Usuário

**US01 — Identificação e apresentação pessoal**
Como visitante, quero visualizar rapidamente quem é Luiz Henrique e sua área de atuação, para entender em poucos segundos o perfil profissional do portfólio.

**US02 — Competências e conhecimentos**
Como recrutador, quero visualizar as competências técnicas e soft skills do candidato, para avaliar se o perfil atende aos requisitos da vaga.

**US03 — Experiências relevantes**
Como recrutador, quero visualizar o histórico de experiências profissionais de Luiz Henrique, para entender sua trajetória e vivência prática no mercado.

**US04 — Formação acadêmica**
Como visitante, quero visualizar a formação acadêmica e cursos complementares do candidato, para avaliar sua qualificação técnica e educacional.

**US05 — Projetos realizados ou em desenvolvimento**
Como visitante, quero visualizar os projetos desenvolvidos pelo autor, para conhecer suas competências técnicas na prática.

**US06 — Hobbies e lazer**
Como visitante, quero conhecer os interesses pessoais de Luiz Henrique fora do ambiente profissional, para ter uma visão mais humana e completa do candidato.

**US07 — Viagens realizadas**
Como visitante, quero visualizar as viagens realizadas por Luiz Henrique, para conhecer um pouco mais de sua vida pessoal e experiências.

**US08 — Formas de contato**
Como recrutador ou cliente em potencial, quero encontrar facilmente formas de contato com Luiz Henrique, para iniciar uma conversa profissional ou proposta de trabalho.

---

## 4. Critérios de Aceitação

**US01 — Identificação e apresentação pessoal**
- A seção deve exibir nome completo e título profissional do autor. *(Critério ajustado no Prompt 12: a foto do autor foi removida da hero por decisão de composição visual, sendo substituída por um marcador editorial; a identificação pessoal passou a ser feita por tipografia.)*
- Deve conter uma frase de apresentação (bio curta) descrevendo a atuação profissional.
- A seção deve ser a primeira visível ao carregar a página (hero/topo).
- Deve permanecer legível e proporcional em dispositivos móveis (sem sobreposição de elementos).

**US02 — Competências e conhecimentos**
- O portfólio deve apresentar uma seção identificada como "Competências" ou "Habilidades".
- Deve listar no mínimo 8 tecnologias/linguagens e no mínimo 4 soft skills.
- As competências devem estar organizadas em categorias (linguagens, tecnologias, ferramentas, soft skills).
- A seção deve se reorganizar (grid/lista) corretamente em telas menores que 768px.

**US03 — Experiências relevantes**
- O portfólio deve apresentar uma seção identificada como "Experiência" ou "Trajetória Profissional".
- Cada experiência deve exibir cargo, período e descrição da atuação.
- As experiências devem estar ordenadas da mais recente para a mais antiga.
- A seção deve permanecer legível em dispositivos móveis.

**US04 — Formação acadêmica**
- O portfólio deve apresentar uma seção identificada como "Formação".
- Deve exibir instituição, curso e período para a formação principal (ADS — IFSP) e para a formação técnica concluída (Etec).
- Cursos complementares devem estar listados separadamente da formação principal, cada um com nome e ano.
- A seção deve permanecer legível em dispositivos móveis.

**US05 — Projetos realizados ou em desenvolvimento**
- O portfólio deve apresentar uma seção identificada como "Projetos".
- Cada projeto deve possuir título, descrição e tecnologias utilizadas.
- Quando houver link de repositório ou demonstração disponível, o link deve abrir corretamente em nova aba.
- Projetos sem link disponível não devem exibir botão ou link não funcional.
- A seção deve permanecer legível em dispositivos móveis.

**US06 — Hobbies e lazer**
- O portfólio deve apresentar uma seção identificada como "Hobbies" ou "Interesses".
- Deve listar no mínimo 3 interesses pessoais do autor.
- A seção deve permanecer legível em dispositivos móveis.

**US07 — Viagens realizadas**
- O portfólio deve apresentar uma seção identificada como "Viagens".
- Deve exibir ao menos um destino real (Cacupé, Santa Catarina), com nome do local, estado e uma breve descrição da experiência.
- A seção deve permanecer legível em dispositivos móveis.

**US08 — Formas de contato**
- O portfólio deve apresentar uma seção identificada como "Contato".
- Deve exibir e-mail, WhatsApp, LinkedIn e GitHub como links funcionais e clicáveis.
- O link de e-mail deve abrir o cliente de e-mail padrão (mailto:).
- O link de WhatsApp deve abrir conversa direta com o número informado (wa.me).
- Todos os links devem abrir em nova aba, exceto o mailto.

---

## 5. Priorização MoSCoW

| História | Prioridade | Justificativa |
|---|---|---|
| US01 — Identificação e apresentação pessoal | Must have | Sem essa seção o portfólio não cumpre sua função básica: identificar quem é o autor. É o primeiro contato do visitante. |
| US02 — Competências e conhecimentos | Must have | Recrutadores frequentemente escaneiam competências antes de ler qualquer outra seção; essencial para triagem rápida. |
| US03 — Experiências relevantes | Must have | Reclassificada a pedido do autor: a trajetória profissional é considerada essencial para reforçar a candidatura à vaga júnior, complementando a prova técnica dos projetos. |
| US04 — Formação acadêmica | Must have | Reclassificada a pedido do autor: a formação acadêmica atual (ADS) e os cursos complementares são considerados diferenciais importantes para credibilidade do perfil. |
| US05 — Projetos realizados ou em desenvolvimento | Must have | Para um perfil de Desenvolvedor Júnior, a prova técnica mais concreta são os projetos. É o principal critério de avaliação de um recrutador técnico. |
| US07 — Viagens realizadas | Must have | Conteúdo real disponível (Cacupé/SC); inclusão viável com esforço mínimo e agrega personalidade ao portfólio. |
| US08 — Formas de contato | Must have | Objetivo central do portfólio é gerar oportunidades. Sem contato funcional, o portfólio perde sua finalidade prática. |
| US06 — Hobbies e lazer | Could have | Agrega valor humano ao perfil, mas não é decisivo para avaliação profissional. Pode ser adicionado se houver tempo. |

---

## 6. Descrição do MVP

**Necessidades atendidas no MVP:**
O MVP entrega a versão do portfólio que já cumpre a finalidade principal do projeto — apresentar Luiz Henrique como candidato a Desenvolvedor Júnior de forma profissional, com prova técnica (projetos), competências, ponto de contato funcional e um toque pessoal (viagens).

**Seções disponíveis no MVP:**
- Identificação e apresentação pessoal (US01)
- Competências e conhecimentos (US02)
- Experiências relevantes (US03)
- Formação acadêmica (US04)
- Projetos realizados ou em desenvolvimento (US05)
- Viagens realizadas (US07)
- Formas de contato (US08)

**Seções fora do MVP (ficam para próxima iteração):**
- Hobbies e lazer (US06) — Could have

**Interações implementadas no MVP:**
- Navegação por menu fixo/sticky com scroll suave até cada seção
- Menu responsivo (hambúrguer) em telas mobile
- Links de contato funcionais (mailto, wa.me, LinkedIn, GitHub abrindo em nova aba)
- Indicação visual da seção ativa durante a navegação (scroll spy) ou interações de hover nos cards de projeto
- Layout responsivo validado em pelo menos 3 breakpoints (mobile, tablet, desktop)

**Histórias de usuário que compõem o MVP:**
US01, US02, US03, US04, US05, US07, US08

**O que fica fora desta primeira versão:**
US06 — não implementada nesta entrega, mas reconhecida no backlog como próximo passo.

**Condições que determinam que o MVP está concluído:**
- Todas as 7 seções Must have estão implementadas e visíveis na página
- Todos os critérios de aceitação de US01, US02, US03, US04, US05, US07 e US08 são verificáveis e passam
- O site funciona sem erros de console, sem links quebrados e sem elementos simulados
- O layout se adapta corretamente entre desktop e mobile
- O código está organizado na estrutura de pastas exigida (index.html, css/, js/, assets/, docs/, README.md)

---

## 7. Backlog Acionável

| ID | Item do backlog | História relacionada | Prioridade MoSCoW | Critérios de aceitação | Status |
|---|---|---|---|---|---|
| BL01 | Criar estrutura base do projeto (pastas e arquivos) | — | Must have | Estrutura de pastas conforme especificação (index.html, css/, js/, assets/, docs/) criada e funcional | Concluído |
| BL02 | Criar seção de apresentação/hero com nome, título, bio e foto | US01 | Must have | Nome, título, bio e foto exibidos corretamente; seção visível ao carregar a página | Concluído |
| BL03 | Implementar menu de navegação fixo com scroll suave | US01, US08 | Must have | Menu permanece visível ao rolar; clique em item leva à seção correta com scroll suave | Concluído |
| BL04 | Implementar menu responsivo (hambúrguer) para mobile | US01, US08 | Must have | Menu se transforma em ícone hambúrguer abaixo de 768px; abre/fecha corretamente | Concluído |
| BL05 | Criar seção de competências organizada por categorias | US02 | Must have | Mínimo 8 tecnologias e 4 soft skills, organizadas em grupos, responsivas em mobile | Concluído |
| BL06 | Criar seção de projetos com cards (título, descrição, tecnologias, link) | US05 | Must have | Cada card exibe título, descrição, tecnologias; links funcionam e abrem em nova aba | Concluído |
| BL07 | Implementar interação JS nos cards de projeto (hover/expansão) | US05 | Should have | Card reage visualmente à interação do usuário sem erros no console | Concluído |
| BL08 | Criar seção de viagens com destino Cacupé/SC | US07 | Must have | Seção exibe nome do local, estado e descrição curta da experiência | Concluído |
| BL09 | Criar seção de contato com links funcionais | US08 | Must have | Links de e-mail (mailto), WhatsApp (wa.me), LinkedIn e GitHub funcionam corretamente | Concluído |
| BL10 | Implementar scroll spy (destaque da seção ativa no menu) | US01 | Should have | Item do menu correspondente à seção visível recebe destaque visual automaticamente | Concluído |
| BL11 | Validar responsividade em 3 breakpoints (mobile, tablet, desktop) | US01–US08 | Must have | Layout sem quebras visuais nos 3 tamanhos testados | Concluído |
| BL12 | Criar seção de experiências profissionais | US03 | Must have | Cada experiência exibe cargo, período e descrição, ordenadas da mais recente | Concluído |
| BL13 | Criar seção de formação acadêmica e cursos complementares | US04 | Must have | Formação principal separada de cursos complementares, com instituição e período | Concluído |
| BL14 | Criar seção de hobbies e lazer | US06 | Could have | Mínimo 3 interesses pessoais listados | Concluído |
| BL15 | Escrever documentação completa (docs/documentacao.md) | — | Must have | Documento contém as 7 seções obrigatórias do enunciado | Concluído |
| BL16 | Escrever README.md do projeto | — | Must have | Contém nome, descrição, tecnologias, instruções de execução, funcionalidades e link (se houver) | Concluído |
| BL17 | Publicar portfólio (ex: GitHub Pages) | — | Could have | Link público acessível e funcional | Não iniciado |
| BL18 | Vincular projetos reais (URLs de deploy/repositório) e adicionar descrição + tecnologias em cada card | US05 | Must have | Cada um dos 3 projetos possui link real funcional (Finwise, Vault Finances, Long Video Automation), descrição e tecnologias listadas | Concluído |

