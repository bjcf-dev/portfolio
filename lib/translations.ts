// ponytail: flat key-value translation map. Add keys as needed.
export const translations = {
  en: {
    "nav.home": "Home",
    "nav.projects": "Projects",
    "nav.sops": "SOPs",
    "nav.contact": "Contact",
    "hero.title": "Hi, I'm",
    "hero.name": "Billy",
    "hero.subtitle": "Backend & Blockchain developer.",
    "hero.desc": "Rust, TypeScript, on-chain programs, and clean architecture.",
    "hero.cta.projects": "View Projects",
    "hero.cta.sops": "Browse SOPs",
    "about.p1":
      "I spent a few years in quality control for pharma manufacturing — Boehringer Ingelheim, B. Braun, Brugarolas — where a documentation error wasn't a bug ticket, it was a regulatory problem. That discipline stuck: I write tests before I trust code, and I don't ship what I can't explain.",
    "about.p2":
      "I'm now retraining through DAW at La Salle and building on-chain programs in Rust and Anchor on Solana. It's the part of the stack I care most about right now, and the part I have the least experience in — so most of what's here is proof of work, not proof of expertise.",
    "cta.label": "Open to work",
    "cta.title": "Looking for the next challenge",
    "cta.text":
      "I'm actively looking for a role — whether it's a job, a project, or a collaboration where I can build on-chain systems, tooling, and backend infrastructure. If you're working on something interesting — or just want to talk Solana, Rust, or DevOps — let's talk.",
    "cta.button": "Get in touch",
    "projects.title": "Projects",
    "projects.intro":
      "A mix of production-minded projects and hands-on exercises — some built to solve a real problem, others to learn a language or pattern for the first time. The fundamentals are here too; that's part of the process, not something to hide.",
    "sops.title": "SOPs",
    "sops.intro":
      "Standard Operating Procedures — step-by-step guides for the projects and tools I build, written the way I wish I'd found them.",
    "contact.title": "Contact",
    "contact.intro":
      "A collaboration, a project, or just a conversation about development — I'm open to hearing what you have in mind.",
    "footer.copyright": "Billy Flores",
    "dock.home": "Home",
    "dock.projects": "Projects",
    "dock.sops": "SOPs",
    "dock.contact": "Contact",
    "dock.github": "GitHub",
    "dock.linkedin": "LinkedIn",
    "dock.preview.home": "Billy Flores — Backend & Blockchain developer",
    "dock.preview.projects": "On-chain programs, tools, and learning exercises",
    "dock.preview.sops": "Step-by-step guides for projects and tools",
    "dock.preview.contact": "Get in touch — collaborations, projects, or talk",
    "dock.preview.github": "github.com/bjcf-dev",
    "dock.preview.linkedin": "linkedin.com/in/bjcf",
    "theme.light": "Light",
    "theme.dark": "Dark",
    "theme.rust": "Rust",
    "lang.en": "EN",
    "lang.es": "ES",
  },
  es: {
    "nav.home": "Inicio",
    "nav.projects": "Proyectos",
    "nav.sops": "SOPs",
    "nav.contact": "Contacto",
    "hero.title": "Hola, soy",
    "hero.name": "Billy",
    "hero.subtitle": "Desarrollador Backend & Blockchain.",
    "hero.desc": "Rust, TypeScript, programas on-chain y arquitectura limpia.",
    "hero.cta.projects": "Ver Proyectos",
    "hero.cta.sops": "Explorar SOPs",
    "about.p1":
      "Pasé varios años en control de calidad para la industria farmacéutica — Boehringer Ingelheim, B. Braun, Brugarolas — donde un error de documentación no era un ticket de bug, era un problema regulatorio. Esa disciplina se quedó: escribo tests antes de confiar en el código, y no entrego lo que no puedo explicar.",
    "about.p2":
      "Ahora me estoy reconvirtiendo a través de DAW en La Salle y construyendo programas on-chain en Rust y Anchor en Solana. Es la parte del stack que más me importa ahora mismo, y la que menos experiencia tengo — así que la mayor parte de lo que hay aquí es prueba de trabajo, no prueba de expertise.",
    "cta.label": "Buscando oportunidades",
    "cta.title": "En busca del próximo reto",
    "cta.text":
      "Estoy buscando activamente un rol — ya sea un trabajo, un proyecto, o una colaboración donde pueda construir sistemas on-chain, tooling e infraestructura backend. Si estás trabajando en algo interesante — o solo quieres hablar de Solana, Rust o DevOps — hablemos.",
    "cta.button": "Contactar",
    "projects.title": "Proyectos",
    "projects.intro":
      "Una mezcla de proyectos orientados a producción y ejercicios prácticos — algunos construidos para resolver un problema real, otros para aprender un lenguaje o patrón por primera vez. Los fundamentos también están aquí; es parte del proceso, no algo que ocultar.",
    "sops.title": "SOPs",
    "sops.intro":
      "Procedimientos Operativos Estándar — guías paso a paso para los proyectos y herramientas que construyo, escritas como me hubiera gustado encontrarlas.",
    "contact.title": "Contacto",
    "contact.intro":
      "Una colaboración, un proyecto, o simplemente una conversación sobre desarrollo — estoy abierto a escuchar lo que tengas en mente.",
    "footer.copyright": "Billy Flores",
    "dock.home": "Inicio",
    "dock.projects": "Proyectos",
    "dock.sops": "SOPs",
    "dock.contact": "Contacto",
    "dock.github": "GitHub",
    "dock.linkedin": "LinkedIn",
    "dock.preview.home": "Billy Flores — Desarrollador Backend & Blockchain",
    "dock.preview.projects": "Programas on-chain, herramientas y ejercicios",
    "dock.preview.sops": "Guías paso a paso para proyectos y herramientas",
    "dock.preview.contact": "Contacto — colaboraciones, proyectos o charla",
    "dock.preview.github": "github.com/bjcf-dev",
    "dock.preview.linkedin": "linkedin.com/in/bjcf",
    "theme.light": "Claro",
    "theme.dark": "Oscuro",
    "theme.rust": "Rust",
    "lang.en": "EN",
    "lang.es": "ES",
  },
} as const;

export type Lang = keyof typeof translations;
export type TranslationKey = keyof typeof translations.en;
