# Regra crítica — Avaliação de dependências e não redundância

As tecnologias e bibliotecas mencionadas anteriormente são **opções**, e NÃO requisitos para instalar todas.

Antes de adicionar qualquer biblioteca ou dependência ao projeto, faça uma análise de necessidade.

## Princípio principal

> **Não instale uma biblioteca apenas porque ela foi mencionada. Instale-a somente se ela resolver um problema real que não seja melhor resolvido pelas tecnologias já utilizadas.**

O objetivo é ter a menor quantidade de dependências possível, mantendo uma experiência visual excelente.

---

## Hierarquia de tecnologias

Utilize preferencialmente esta ordem:

### 1. Next.js + React + TypeScript

Base obrigatória da aplicação.

### 2. Tailwind CSS

Base para estilos e sistema visual.

### 3. CSS nativo

Antes de utilizar JavaScript para uma animação simples, verifique se:

- `transition`
- `transform`
- `@keyframes`
- `animation`
- `opacity`
- `filter`

já resolvem o problema.

Não utilizar uma biblioteca JavaScript para um efeito que pode ser realizado de maneira simples e eficiente pelo CSS.

### 4. Motion

Utilize **Motion como biblioteca principal de animação React**.

Priorize Motion para:

- entrance animations;
- fade;
- slide;
- scale;
- hover;
- tap;
- scroll reveal;
- scroll-linked animations;
- layout animations;
- page transitions;
- stagger;
- gestures;
- microinterações.

Motion deve ser a solução padrão para animações relacionadas diretamente à interface React.

---

# Regra para Anime.js

**Não instale Anime.js inicialmente.**

Primeiro implemente as animações utilizando:

1. CSS;
2. Motion.

Somente introduza Anime.js se surgir uma necessidade que Motion não resolva de maneira adequada ou se Anime.js oferecer uma vantagem técnica significativa.

Exemplos que podem justificar Anime.js:

- timelines extremamente complexas;
- animações avançadas de SVG;
- morphing de SVG;
- sequências altamente coreografadas;
- manipulação direta de elementos DOM necessária;
- animações matemáticas ou procedurais específicas.

Se Motion resolver o problema satisfatoriamente, **não utilize Anime.js**.

Se Anime.js não for necessário, não o instale.

---

# Regra para React Bits

React Bits pode ser utilizado como uma biblioteca de componentes/efeitos.

Antes de utilizar um componente do React Bits, compare:

- implementação própria com CSS;
- implementação própria com Motion;
- componente existente do React Bits.

Escolha a solução mais simples que entregue o melhor resultado.

React Bits é especialmente apropriado para:

- efeitos de texto;
- backgrounds;
- efeitos visuais;
- componentes experimentais;
- efeitos de cursor;
- elementos decorativos;
- animações específicas.

Não utilizar React Bits simplesmente porque o efeito existe na biblioteca.

---

# Regra para Magic UI

Magic UI é opcional.

Antes de instalar ou utilizar qualquer componente do Magic UI, verifique se:

- o componente realmente melhora o design;
- não existe equivalente já implementado;
- React Bits não oferece uma solução melhor;
- Motion + Tailwind não conseguem produzir o mesmo resultado de maneira mais simples.

Se o componente for essencialmente redundante, não utilizar.

---

# Regra para KokonutUI

KokonutUI também é opcional.

Utilize apenas quando um componente específico apresentar uma vantagem clara em relação a:

- Tailwind;
- componentes próprios;
- Motion;
- React Bits;
- Magic UI.

Não misture múltiplos sistemas de componentes sem necessidade.

---

# Regra para Rive

Rive não deve ser uma dependência obrigatória.

Primeiro avalie se o elemento pode ser implementado com:

- CSS;
- SVG;
- Motion;
- React Bits.

Utilize Rive somente se existir uma animação interativa que realmente se beneficie de:

- state machines;
- animação vetorial interativa;
- resposta a estados do usuário;
- animações complexas criadas no editor Rive.

Exemplo:

Um mascote interativo no Hero que muda de estado de acordo com a interação do usuário pode justificar Rive.

Um simples elemento flutuando na tela NÃO justifica Rive.

---

# BKLIT e Limora AI

BKLIT e Limora AI devem ser tratados principalmente como:

**referências de design, UX, composição e direção visual.**

Não adicionar dependências ou código dessas plataformas apenas por terem sido utilizadas como referência.

Analise:

- hierarquia;
- tipografia;
- composição;
- espaçamento;
- interação;
- animações;
- ritmo da página;
- uso de elementos visuais.

Crie uma implementação própria.

Não copiar literalmente layouts, identidade visual, textos ou elementos proprietários.

---

# Sistema de decisão

Para cada nova biblioteca, responda internamente:

### Pergunta 1
Existe algum problema real que precisa ser resolvido?

Se não:

**não instalar.**

### Pergunta 2
CSS ou Tailwind resolve?

Se sim:

**não instalar biblioteca.**

### Pergunta 3
Motion resolve?

Se sim:

**preferir Motion.**

### Pergunta 4
Existe um componente pronto que economiza tempo significativamente?

Se sim:

avaliar React Bits, Magic UI ou KokonutUI.

### Pergunta 5
A nova biblioteca adiciona uma capacidade realmente diferente?

Se não:

**não adicionar.**

### Pergunta 6
Essa dependência aumenta significativamente a complexidade ou o bundle?

Se sim:

só utilizar se o benefício justificar claramente o custo.

---

# Regra contra duplicação

Não utilizar simultaneamente várias bibliotecas para realizar a mesma categoria de trabalho.

Por exemplo:

### ERRADO

```text
CSS animations
+
Motion
+
Anime.js
+
React Bits
+
Magic UI
+
KokonutUI
```

todos realizando pequenas animações de entrada, hover e scroll.

### CORRETO

```text
Tailwind
+
CSS
+
Motion
```

como base.

E adicionar:

```text
React Bits
```

somente quando um efeito específico realmente justificar.

Adicionar:

```text
Anime.js
```

somente se surgir uma animação que Motion não resolva adequadamente.

Adicionar:

```text
Rive
```

somente se houver uma animação interativa específica que necessite dele.

---

# Resultado esperado

A aplicação final deve possuir uma arquitetura deliberadamente enxuta.

Prefira:

**menos bibliotecas + melhor utilização**

em vez de:

**muitas bibliotecas + efeitos redundantes.**

O fato de uma biblioteca estar listada no briefing NÃO significa que ela precise aparecer no `package.json`.

Ao finalizar o projeto, apresente uma pequena auditoria:

```text
Tecnologia       | Utilizada? | Onde? | Por quê?
--------------------------------------------------
Next.js           | Sim        | ...   | ...
Tailwind          | Sim        | ...   | ...
Motion            | Sim        | ...   | ...
React Bits        | Sim/Não    | ...   | ...
Magic UI          | Sim/Não    | ...   | ...
KokonutUI         | Sim/Não    | ...   | ...
Anime.js          | Sim/Não    | ...   | ...
Rive              | Sim/Não    | ...   | ...
```

Para cada tecnologia marcada como "Não", explique brevemente por que ela foi considerada desnecessária.

Para cada tecnologia marcada como "Sim", indique exatamente qual funcionalidade exclusiva justificou sua utilização.

## Regra final

**Se duas ferramentas resolverem o mesmo problema, escolha apenas uma.**

**Se uma ferramenta não for necessária, não instale.**

**Se CSS resolver, prefira CSS.**

**Se Motion resolver, prefira Motion em vez de adicionar outro motor de animação.**

O objetivo é construir um portfólio sofisticado, mas com uma stack limpa, justificável, performática e fácil de manter.