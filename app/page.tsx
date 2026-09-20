import Image from "next/image";
import { Navigation } from "@/components/navigation";
import { Reveal } from "@/components/reveal";
import { experiences, projects, services, skills } from "@/data/portfolio";

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <div id="topo" className="site-shell">
      <Navigation />
      <main>
        <section className="hero" id="sobre" aria-labelledby="hero-title">
          <div className="hero-copy">
            <Reveal>
              <p className="eyebrow">Portfólio pessoal</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 id="hero-title">Luiz Henrique</h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="hero-intro">Desenvolvedor Front-end criando interfaces claras, funcionais e com personalidade.</p>
            </Reveal>
            <Reveal delay={0.24}>
              <a className="button-primary" href="#contato">Falar comigo <Arrow /></a>
            </Reveal>
          </div>
          <Reveal className="hero-visual" delay={0.18}>
            <Image src="/assets/projeto1.2.jpeg" alt="Interface do projeto Finwise" width={1852} height={905} priority sizes="(max-width: 767px) 100vw, 48vw" />
          </Reveal>
        </section>

        <section className="about-section section" aria-labelledby="sobre-titulo">
          <Reveal><p className="eyebrow">Perfil</p></Reveal>
          <Reveal delay={0.06}><h2 id="sobre-titulo">Tecnologia com intenção.</h2></Reveal>
          <Reveal delay={0.12}><p className="large-copy">Com mais de cinco anos em design e tecnologia, foco em branding, web design e experiências digitais para negócios que querem se destacar.</p></Reveal>
        </section>

        <section className="services-section section" id="competencias" aria-labelledby="competencias-titulo">
          <Reveal><p className="eyebrow">Competências</p></Reveal>
          <Reveal delay={0.06}><h2 id="competencias-titulo">O que eu faço.</h2></Reveal>
          <div className="service-list">
            {services.map(([title, description], index) => (
              <Reveal key={title} delay={index * 0.04}>
                <article className="service-item">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div><h3>{title}</h3><p>{description}</p></div>
                </article>
              </Reveal>
            ))}
          </div>
          <div className="skills-grid">
            {Object.entries(skills).map(([group, entries], index) => (
              <Reveal key={group} delay={index * 0.06}>
                <div className="skills-group"><h3>{group}</h3><div className="tag-row">{entries.map((entry) => <span key={entry}>{entry}</span>)}</div></div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="experience-section section" id="experiencia" aria-labelledby="experiencia-titulo">
          <Reveal><p className="eyebrow">Trajetória</p></Reveal>
          <Reveal delay={0.06}><h2 id="experiencia-titulo">Experiência.</h2></Reveal>
          <div className="experience-list">
            {experiences.map(([period, role, description], index) => (
              <Reveal key={role} delay={index * 0.06}><article className="experience-item"><span>{period}</span><div><h3>{role}</h3><p>{description}</p></div></article></Reveal>
            ))}
          </div>
        </section>

        <section className="projects-section section" id="projetos" aria-labelledby="projetos-titulo">
          <Reveal><p className="eyebrow">Seleção</p></Reveal>
          <Reveal delay={0.06}><h2 id="projetos-titulo">Projetos reais.</h2></Reveal>
          <div className="project-list">
            {projects.map((project, index) => (
              <Reveal key={project.name} delay={index * 0.06}>
                <article className="project-card">
                  <div className="project-content"><p>{project.number} / {project.type}</p><h3>{project.name}</h3><p className="project-desc">{project.description}</p><div className="tag-row">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div><a className="text-link" href={project.href} target="_blank" rel="noopener noreferrer">{project.action} <Arrow /></a></div>
                  <Image src={project.image} alt={project.alt} width={1854} height={947} sizes="(max-width: 767px) 100vw, 52vw" />
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="details-section section" id="formacao" aria-label="Formação, interesses e viagens">
          <Reveal><article className="detail-block"><p className="eyebrow">Formação</p><h2>Aprendizado contínuo.</h2><p><strong>Formação principal:</strong> Tecnologia em Análise e Desenvolvimento de Sistemas, IFSP Guarulhos, 2024 em andamento.</p><p>Técnico em Desenvolvimento de Sistemas, Etec de Guarulhos, concluído.</p><h3>Cursos complementares</h3><ul className="course-list"><li><span>React na prática</span><span>2025</span></li><li><span>Git e GitHub para desenvolvedores</span><span>2025</span></li><li><span>Fundamentos de UI/UX Design</span><span>2024</span></li></ul></article></Reveal>
          <Reveal delay={0.08}><article className="detail-block" id="hobbies"><p className="eyebrow">Além do código</p><h2>Interesses.</h2><p>Momentos fora da rotina de estudos e projetos que também fazem parte de quem eu sou.</p><div className="tag-row"><span>Fotografia</span><span>Produção de vídeo</span><span>Viagens</span><span>Games</span></div></article></Reveal>
          <Reveal delay={0.16}><article className="detail-block" id="viagens"><p className="eyebrow">Viagem</p><h2>Cacupé, SC.</h2><p>Uma viagem marcada por praia, natureza e um respiro fora da rotina de estudos e projetos.</p><a className="text-link" href="#contato">Trocar uma ideia <Arrow /></a></article></Reveal>
        </section>

        <section className="contact-section section" id="contato" aria-labelledby="contato-titulo">
          <Reveal><p className="eyebrow">Contato</p></Reveal>
          <Reveal delay={0.06}><h2 id="contato-titulo">Vamos conversar.</h2></Reveal>
          <Reveal delay={0.12}><p className="large-copy">Estou em busca de uma oportunidade como Desenvolvedor Júnior e aberto a projetos com desafios interessantes.</p></Reveal>
          <Reveal delay={0.18}><div className="contact-links"><a href="mailto:luizdert10@outlook.com">E-mail <Arrow /></a><a href="https://wa.me/5511972614520" target="_blank" rel="noopener noreferrer">WhatsApp <Arrow /></a><a href="https://www.linkedin.com/in/luiz-henrique-324825200/" target="_blank" rel="noopener noreferrer">LinkedIn <Arrow /></a><a href="https://github.com/luizzhenrique1" target="_blank" rel="noopener noreferrer">GitHub <Arrow /></a></div></Reveal>
        </section>
      </main>
      <footer className="site-footer"><span>LH<span className="accent">.</span></span><span>© {new Date().getFullYear()} Luiz Henrique</span><a href="#topo">Voltar ao topo</a></footer>
    </div>
  );
}
