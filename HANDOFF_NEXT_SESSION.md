# Handoff — Próxima sesión: Fase 3

> **Este archivo es guía para la próxima sesión del agente.**
> Se eliminará antes de hacer público el repo.

---

## Estado actual

- ✅ **Fase 1** (Next.js 15.5 + 3 temas + layout shell) — **Archivada y verificada**
- ✅ **Fase 2** (GitHub Actions + deploy pipeline + git push) — **Completada**
- 🔲 **Fase 3** — Pendiente

## Lo que hay que leer antes de arrancar

Para entender el proyecto y retomar, leer en este orden:

1. **`next.config.ts`** — Configuración actual con `basePath: '/portfolio'`, `output: 'export'`
2. **`tailwind.config.ts`** — Sistema de variables CSS para los 3 temas
3. **`app/globals.css`** — Los 3 bloques de temas (`:root`, `.dark`, `.rustmode`)
4. **`components/theme-toggle.tsx`** — Toggle de 3 vías con mounted guard
5. **`components/navbar.tsx`** — Navbar con 4 stubs
6. **`app/layout.tsx`** — Root layout con ThemeProvider
7. **`app/layout.tsx`** -> **`app/page.tsx`** — Home placeholder
8. **`package.json`** — Dependencias y scripts
9. **`.github/workflows/deploy.yml`** — Pipeline de deploy
10. **`openspec/changes/archive/2026-07-01-phase-1-foundation/spec.md`** — Spec de Fase 1 (contexto)
11. **`openspec/changes/archive/2026-07-01-phase-1-foundation/design.md`** — ADRs (contexto)

## Fase 3 — Projects page

### Scope
- Página `/projects` con fetch client-side a la GitHub API
- `https://api.github.com/users/bjcf-dev/repos`
- Cards con: nombre, descripción, estrellas, lenguaje principal
- Skeleton loaders durante la carga
- Highlight lenguajes Rust y TypeScript

### Stack
- Sin server components — fetch en el cliente (useEffect o custom hook)
- Tailwind para los skeletons y cards
- Los datos se cachean en sessionStorage para evitar re-fetch

### Archivos a crear/modificar
1. `app/projects/page.tsx` — Página Projects
2. `components/project-card.tsx` — Card de proyecto
3. `components/project-skeleton.tsx` — Skeleton loader

### Decisiones de diseño tomadas
- `basePath: '/portfolio'` — Links de navegación ya lo respetan (usamos `<Link>`)
- Pnpm con `ignore-scripts=true` — No necesitamos build scripts
- Modo interactivo — El usuario decide después de cada fase

## Cómo visualizar el portfolio

### Dev server (recomendado)
```bash
pnpm dev
# Abrir http://localhost:3000
```

## HTTPS local (NOTA IMPORTANTE)
GitHub Pages sirve el sitio en HTTPS. Para desarrollo local con HTTPS:

```bash
# Opción 1: Usar el flag experimental de Next.js
pnpm dev -- --experimental-https

# Opción 2: Usar local-ssl-proxy (necesita instalación)
# npx local-ssl-proxy --source 3001 --target 3000
# Abrir https://localhost:3001
```

## Theme toggle
El toggle de temas (Light → Dark → Rustmode) funciona con:
- **next-themes** manejando el cambio de clase en `<html>`
- **CSS custom properties** en `:root` / `.dark` / `.rustmode`
- **Mounted guard** que evita hydration mismatch

Si no se ve funcionando al abrir `out/index.html` directo:
→ Usar **`pnpm dev`** en su lugar (necesita el servidor de Next.js para las rutas con basePath)

## Handoff guardado en Engram
Buscar en Engram: `sdd/handoff-phase-3` para contexto adicional de la sesión pasada.

## Próximos pasos (orden sugerido)

1. Leer este handoff + los archivos listados arriba
2. Iniciar SDD con `/sdd-ff phase-3-projects-page` (fast-forward planning)
3. Implementar Fase 3
4. Verificar con build y visualmente en el navegador
5. Archivar

---

*Creado: 2026-07-01 — Eliminar antes de hacer público el repo*
