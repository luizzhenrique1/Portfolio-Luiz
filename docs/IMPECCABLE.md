# Processo Impeccable

## Configuração

O Impeccable é usado como uma skill do agente, não como dependência de runtime do site. No GitHub Copilot ele pode ser habilitado em **Settings > Experimental**. Em agentes compatíveis, a instalação do projeto é:

```bash
npx impeccable install
```

Depois, manter `PRODUCT.md` e `DESIGN.md` na raiz permite que os comandos recebam contexto de produto e regras visuais. A atualização da skill pode ser feita com:

```bash
npx impeccable update
```

## Os 23 comandos

### Create

- `impeccable`: descreve o que criar ou melhorar e orienta uma intervenção completa.
- `shape`: transforma uma ideia em um briefing de design com direção, público e restrições.

### Evaluate

- `audit`: encontra problemas de implementação, acessibilidade, responsividade e robustez e prioriza correções.
- `critique`: avalia o que enfraquece a percepção visual e recomenda melhorias de composição, hierarquia e consistência.

### Refine

- `animate`: usa movimento para explicar mudança, relação e feedback.
- `bolder`: dá mais presença a uma seção sem romper a identidade existente.
- `colorize`: usa cor para esclarecer ações, estados e personalidade visual.
- `delight`: adiciona momentos pequenos e significativos de surpresa ou satisfação.
- `layout`: reorganiza a página para tornar a leitura e os agrupamentos mais claros.
- `overdrive`: explora uma direção mais ousada quando o design está previsível.
- `quieter`: reduz ruído visual sem apagar a personalidade.
- `typeset`: melhora legibilidade, escala tipográfica, entrelinha e comprimento de linha.

### Simplify

- `adapt`: adapta uma interface a outro dispositivo, tela ou plataforma.
- `clarify`: torna mais claro o que aconteceu e qual ação deve vir em seguida.
- `distill`: remove excesso para destacar o que importa.

### Harden

- `harden`: trata erros, dados ausentes, falhas de conexão e ações inválidas.
- `onboard`: ajuda uma pessoa nova a alcançar seu primeiro resultado útil.
- `optimize`: localiza gargalos de performance, corrige-os e mede o resultado.
- `polish`: faz a revisão final de uma página existente, incluindo qualidade visual e funcional.

### System

- `document`: registra o sistema visual para que trabalhos futuros permaneçam consistentes.
- `extract`: transforma padrões repetidos em componentes e estilos compartilhados.
- `generate`: cria e compara variações de um elemento nomeado.
- `init`: dá ao Impeccable o contexto inicial do projeto.
- `live`: permite selecionar elementos no navegador, experimentar variações e escolher uma opção.

## Aplicação neste projeto

O catálogo completo e os registros desta aplicação estão disponíveis na página extra [/impeccable](https://portfolio-luiz-cyan.vercel.app/impeccable). Esta página é a evidência navegável da atividade; este arquivo mantém o processo em formato de documentação do repositório.

| Passo | Comando | Decisão |
| --- | --- | --- |
| Contexto | `init` | Criar `PRODUCT.md` e `DESIGN.md` antes de pedir mudanças ao agente. |
| Diagnóstico | `audit` | Verificar semântica, foco, imagens responsivas, overflow e manutenção. |
| Diagnóstico | `critique` | Verificar se o portfólio comunica identidade, prova e contato com rapidez. |
| Ajuste | `typeset` | Manter Kanit e revisar escala/entrelinha sem trocar a família por tendência. |
| Ajuste | `layout` | Preservar hero assimétrico e listas sequenciais; evitar uma grade genérica de cards. |
| Ajuste | `adapt` | Conferir a transição para uma coluna em 767px. |
| Ajuste | `polish` | Rodada final após as correções e antes de publicar. |
| Registro | `document` | Consolidar decisões em `DESIGN.md`. |
| Experimentação | `generate` ou `live` | Testar alternativas apenas quando houver uma pergunta de design concreta. |

## Auditoria crítica aplicada

### Problemas encontrados e decisão

1. **Contexto de produto ausente:** sem público, tarefa e critérios, uma sugestão visual poderia otimizar beleza em vez de contratação. Resolvido com `PRODUCT.md`.
2. **Sistema visual não documentado:** cores, fonte, raios e regras de responsividade poderiam variar em futuras edições. Resolvido com `DESIGN.md`.
3. **Risco de excesso de movimento:** revelações poderiam prejudicar leitura. A implementação existente mantém `prefers-reduced-motion`; preservar essa regra é obrigatório.
4. **Conteúdo de projeto como prova principal:** imagens usam `next/image`, `sizes` e `alt`, então a evidência visual é responsiva e acessível.
5. **Estados inexistentes:** não há API, formulário ou login. Não adicionar loaders, empty states ou toasts artificiais; `harden` só se aplica quando um fluxo real for criado.
6. **Página legada duplicada:** `index.html` e `app/` representam implementações distintas. A aplicação publicada é a rota Next em `app/`; a versão legada deve ser tratada como referência, não como segunda fonte de verdade.

### O que foi rejeitado

- Trocar a Kanit por uma fonte da moda sem um ganho de legibilidade comprovado.
- Adicionar gradientes, glassmorphism ou novas bibliotecas para produzir personalidade.
- Adicionar um carrossel para os projetos, pois ele esconderia a comparação rápida que recrutadores precisam fazer.
- Inventar estados de loading e erro para uma página estática.

## Roteiro de revisão

```text
/impeccable audit the portfolio for accessibility, responsive and implementation issues
/impeccable critique the portfolio for hierarchy, clarity and generic AI patterns
/impeccable typeset the portfolio without changing Kanit or the content hierarchy
/impeccable adapt the portfolio for narrow mobile screens
/impeccable polish the final page and preserve PRODUCT.md and DESIGN.md
/impeccable document the accepted visual decisions in DESIGN.md
```

Cada resposta do agente deve ser avaliada contra o público e os critérios de sucesso do `PRODUCT.md`. Uma recomendação só é aceita quando melhora uma tarefa real e não apenas quando parece mais chamativa.
