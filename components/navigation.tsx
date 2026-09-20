"use client";

import { useState } from "react";

const links = [
  ["Sobre", "#sobre"],
  ["Competências", "#competencias"],
  ["Trajetória", "#experiencia"],
  ["Projetos", "#projetos"],
  ["Formação", "#formacao"],
  ["Contato", "#contato"],
] as const;

export function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-nav">
      <a className="brand-mark" href="#topo" aria-label="Voltar ao início">
        LH<span>.</span>
      </a>
      <button
        className="nav-toggle"
        type="button"
        aria-expanded={open}
        aria-controls="nav-menu"
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        onClick={() => setOpen((current) => !current)}
      >
        <span />
        <span />
      </button>
      <nav className={open ? "nav-menu is-open" : "nav-menu"} id="nav-menu" aria-label="Navegação principal">
        {links.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}
