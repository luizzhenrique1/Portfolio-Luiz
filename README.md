# Portfólio Pessoal - Luiz Henrique

Portfólio pessoal de Luiz Henrique, estudante de Análise e Desenvolvimento de Sistemas no IFSP Guarulhos e desenvolvedor Front-end em busca de uma oportunidade como Desenvolvedor Júnior.

O site apresenta competências, trajetória profissional, formação, projetos reais, interesses, viagem e canais de contato.

## Tecnologias

- Next.js com App Router
- React e TypeScript
- Tailwind CSS
- Motion para revelações de conteúdo com respeito a movimento reduzido
- `next/image` para imagens responsivas e otimizadas
- Kanit hospedada localmente com `@fontsource/kanit`

## Como executar

```bash
npm install
npm run dev
```

Abra `http://localhost:3000` no navegador.

## Verificações

```bash
npm run typecheck
npm run lint
npm run build
```

## Processo de design com Impeccable

O projeto mantém o contexto de produto e o sistema visual em [PRODUCT.md](PRODUCT.md) e [DESIGN.md](DESIGN.md). A análise crítica, a explicação dos 23 comandos, os critérios de aceite e o roteiro de revisão estão em [docs/IMPECCABLE.md](docs/IMPECCABLE.md).

No GitHub Copilot, habilite o Impeccable em **Settings > Experimental**. Em agentes compatíveis, use `npx impeccable install` para instalar a skill e `npx impeccable update` para atualizá-la. O Impeccable não é uma dependência de runtime da aplicação.

## Estrutura

```text
app/          Páginas, estilos globais e metadados
components/   Navegação e componentes de animação
data/         Conteúdo tipado do portfólio
public/assets Imagens e favicon usados pela aplicação
assets/       Assets originais preservados
docs/         Auditoria e processo Impeccable
PRODUCT.md    Contexto de produto, público e critérios de sucesso
DESIGN.md     Sistema visual e regras para futuras alterações
SKILLS/       Instruções complementares do projeto
```

## Projetos vinculados

- [FinancesTCC (Finwise)](https://finwise-site-remake.vercel.app)
- [Vault Finances](https://vaultfinances.vercel.app)
- [Long Video Automation](https://github.com/luizzhenrique1/Long-Video-Automation)

## Deploy

[Luiz Henrique - Front-end Developer](https://portfolio-luiz-cyan.vercel.app)
