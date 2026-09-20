import Link from "next/link";
import { applicationRecords, impeccableCommands } from "@/data/impeccable";

const categoryOrder = ["Criar", "Avaliar", "Refinar", "Simplificar", "Preparar", "Sistematizar"] as const;

export default function ImpeccablePage() {
  const usedCount = impeccableCommands.filter((command) => command.used).length;

  return (
    <div className="impeccable-page">
      <header className="impeccable-header">
        <Link className="brand-mark" href="/">LH<span>.</span></Link>
        <Link className="back-link" href="/">Voltar ao portfólio <span aria-hidden="true">↗</span></Link>
      </header>

      <main>
        <section className="impeccable-hero" aria-labelledby="impeccable-title">
          <p className="eyebrow">Caderno de processo / V2</p>
          <h1 id="impeccable-title">Impeccable em prática.</h1>
          <p className="impeccable-lead">
            Catálogo dos 23 comandos e registro das decisões usadas para corrigir o portfólio anterior sem aceitar automaticamente a primeira sugestão visual.
          </p>
          <div className="impeccable-summary" aria-label="Resumo da atividade">
            <span><strong>23</strong> comandos estudados</span>
            <span><strong>{usedCount}</strong> intervenções registradas</span>
            <span><strong>v1 → v2</strong> versões preservadas</span>
          </div>
        </section>

        <section className="catalog-section" aria-labelledby="catalog-title">
          <div className="section-heading-row">
            <div><p className="eyebrow">01 / Catálogo</p><h2 id="catalog-title">Vocabulário de correção.</h2></div>
            <p>Finalidade, momento de uso, risco e evidência para cada comando oficial.</p>
          </div>
          <div className="command-groups">
            {categoryOrder.map((category) => (
              <section className="command-group" key={category} aria-labelledby={`category-${category}`}>
                <div className="command-group-title"><span>{String(categoryOrder.indexOf(category) + 1).padStart(2, "0")}</span><h3 id={`category-${category}`}>{category}</h3></div>
                <div className="command-list">
                  {impeccableCommands.filter((command) => command.category === category).map((command) => (
                    <article className={command.used ? "command-card is-used" : "command-card"} key={command.name}>
                      <div className="command-card-top"><h4>{command.name}</h4><span>{command.used ? "Aplicado" : "Estudado"}</span></div>
                      <dl>
                        <div><dt>Finalidade</dt><dd>{command.purpose}</dd></div>
                        <div><dt>Momento de uso</dt><dd>{command.when}</dd></div>
                        <div><dt>Exemplo</dt><dd>{command.example}</dd></div>
                        <div><dt>Riscos</dt><dd>{command.risks}</dd></div>
                        <div><dt>Evidência</dt><dd>{command.evidence}</dd></div>
                      </dl>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </section>

        <section className="records-section" aria-labelledby="records-title">
          <div className="section-heading-row"><div><p className="eyebrow">02 / Aplicação</p><h2 id="records-title">Do diagnóstico à decisão.</h2></div><p>Registros da página principal do portfólio. Cada intervenção parte de um problema observável e termina com uma decisão justificada.</p></div>
          <div className="record-list">
            {applicationRecords.map((record, index) => (
              <article className="record-card" key={record.commands}>
                <div className="record-index">{String(index + 1).padStart(2, "0")}</div>
                <div className="record-body">
                  <p className="record-command">{record.commands}</p>
                  <div className="record-grid">
                    <div><h3>Problema observado</h3><p>{record.problem}</p></div>
                    <div><h3>Hipótese de melhoria</h3><p>{record.hypothesis}</p></div>
                    <div><h3>Prompt / orientação</h3><p>{record.prompt}</p></div>
                    <div><h3>Resultado produzido</h3><p>{record.result}</p></div>
                    <div><h3>Evidência</h3><p>{record.evidence}</p></div>
                    <div><h3>Decisão tomada</h3><p>{record.decision}</p></div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="impeccable-footer"><span>LH<span className="accent">.</span></span><span>V1 preservada em Git / V2 publicada</span><Link href="#impeccable-title">Voltar ao topo</Link></footer>
    </div>
  );
}
