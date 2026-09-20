# DESIGN.md

## Direção

Portfólio de desenvolvedor com linguagem editorial, escura e tipográfica. A interface usa contraste alto, composição assimétrica e um único acento magenta para criar personalidade sem competir com os projetos.

**Design read:** portfólio de desenvolvedor para recrutadores e clientes, com linguagem editorial contemporânea, apoiada em CSS nativo, Next.js e Motion.

## Princípios

- Clareza antes de decoração.
- Uma intenção por bloco.
- Projetos e contato têm prioridade sobre efeitos.
- O acento magenta sinaliza ação e orientação, não enfeite.
- Bordas e espaço negativo organizam o conteúdo melhor que camadas de cards.
- O conteúdo deve continuar útil sem animação.

## Tokens

| Token | Valor | Uso |
| --- | --- | --- |
| `--ink` | `#111214` | fundo principal e texto sobre superfícies claras |
| `--surface` | `#181a1d` | superfícies elevadas |
| `--paper` | `#e8ecef` | texto principal e superfície clara |
| `--muted` | `#a7afb7` | texto secundário |
| `--accent` | `#d64cbf` | links, foco e chamadas principais |
| `--line` | `rgb(232 236 239 / .16)` | divisores e bordas |
| fonte | Kanit local | títulos, navegação e corpo |
| raio | 28px / 44px | mídia, cards e transições de seção |

## Tipografia

- Kanit é carregada localmente por `@fontsource/kanit`.
- Títulos usam peso 800, entrelinha compacta e tracking negativo controlado.
- Corpo usa peso 300 ou 400, cor `--muted` e entrelinha confortável.
- Rótulos usam caixa alta, tamanho reduzido e espaçamento de letras.

## Layout

- Conteúdo limitado a 1400px com padding fluido.
- Hero dividido entre apresentação e projeto visual.
- Seções alternam fundo escuro e superfície clara para marcar mudança de contexto.
- Listas com divisores substituem grades de cards quando a informação é sequencial.
- Em mobile, colunas viram uma única coluna e a imagem do projeto aparece antes do texto.

## Interação e estados

- `Reveal` anima entradas somente quando movimento não foi reduzido.
- Links e botões têm estado de hover, foco visível e feedback de pressão.
- O menu mobile expõe `aria-expanded`, `aria-controls` e rótulo dinâmico.
- O portfólio não possui carregamento remoto, formulário, autenticação ou estados vazios; não inventar estados para fluxos que não existem.
- Falhas de links externos devem ser observadas como risco de manutenção, não mascaradas por uma falsa tela de erro.

## Responsividade e acessibilidade

- Breakpoint principal em 767px.
- Hero usa `min-height: 100dvh`.
- Imagens usam `next/image` com `sizes` e texto alternativo.
- Foco visível usa o acento da marca.
- `prefers-reduced-motion` reduz transições e rolagem suave.

## Regras para futuras alterações

1. Não adicionar outra cor de destaque sem uma necessidade de estado que o magenta não possa expressar.
2. Não introduzir outra biblioteca de animação ou ícones sem justificar uma capacidade exclusiva.
3. Preservar a hierarquia: identidade, prova por projetos e contato.
4. Rodar `npm run typecheck`, `npm run lint` e `npm run build` após mudanças de interface.
5. Usar `/impeccable audit` para problemas técnicos e `/impeccable critique` para problemas de percepção visual; não tratar os dois resultados como equivalentes.
