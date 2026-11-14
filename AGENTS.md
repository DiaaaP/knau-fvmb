# AGENTS.md — KNAU Faculty Website

> Repository-wide instructions for Codex and any other coding agent.
> Project status: **design-to-code prototype**, not the faculty's official production website.

## Current user-approved revision

The latest user request overrides the historical brief below:
- Visible identity: `Факультет ветеринарной медицины КНАУ им. К.И. Скрябина`; abbreviation `ФВМ`. Remove biotechnology from the identity.
- Keep Home, About (Mission and Dean's Office), staff profiles, Industrial Council and the external AVN portal. Remove empty Applicants, Students, Departments and Contacts destinations from the site.
- Restore the first prototype's Manrope headings, Inter body text, white/navy palette and original header/hero styling. The user explicitly rejected the subsequent serif redesign.
- Centre the complete ministry line. Remove the large page footer entirely. Do not reintroduce prototype/disclaimer/navigation blocks at the bottom.
- Remove the mission's fundamental/applied science and biotechnology/genetics blocks.
- Add Industrial Council from the latest supplied text: purpose, five proposed participant categories and eight tasks. Present the composition as proposed categories, not an appointed membership list. Omit conversational framing such as «Госпожа Карина».
- Source context: the user-shared ChatGPT conversation and original reference screenshots in Stitch. These were read, including the screenshot that identifies Анарбек уулу Советбек as заместитель декана, кандидат ветеринарных наук, исполняющий обязанности доцента. The qualifier `по учебной работе` is not supported by the original and must not be displayed.
- The faculty's office phone and office email are legible in the original reference header. Personal staff mobile/email details and screenshots containing unrelated chat/device UI must not be published.
- Keep the complete ministry line and functional, accessible mobile navigation.

## 1. Mission and source of truth
Build a faithful, responsive, accessible frontend for the **Faculty of Veterinary Medicine and Biotechnology, KNAU named after K. I. Skryabin**, based on the **user-approved Google Stitch screens** accessible through the configured Stitch MCP server.

Priority order when guidance conflicts:
1. Explicit current user request and newly approved changes.
2. Approved Stitch screen / component / design-system data retrieved through MCP.
3. This `AGENTS.md` and approved content supplied by the user.
4. Existing project conventions and code.
5. Sensible implementation defaults.

The original site at `https://fv.knau.kg/` is **reference material, not the source code**. Do not claim to have its source, copy its HTML/CSS, or scrape/use unapproved content. Screenshots supplied by the user illustrate existing content and navigation; Stitch provides the target design. If Stitch and the reference screenshots disagree on factual information, flag the conflict rather than inventing a resolution.

## 2. Non-negotiable content requirements
- All visible website interface text: **Russian** (code, identifiers, commit messages may be English).
- Display this exact institutional line **at the top of every page**, in full, without abbreviation:

  `МИНИСТЕРСТВО НАУКИ, ВЫСШЕГО ОБРАЗОВАНИЯ И ИННОВАЦИЙ КЫРГЫЗСКОЙ РЕСПУБЛИКИ`

- Main faculty identity: `Факультет ветеринарной медицины и биотехнологии КНАУ им. К.И. Скрябина`.
- Keep distinct naming references (e.g., the screenshots also mention `имени А.А. Алдашева` for faculty leadership); do not silently merge, edit, or resolve these institutional names. Preserve exactly what is approved for each field.
- External education portal **must** link to `https://avn.knau.kg`, open in a new tab, with `rel="noopener noreferrer"`.
- Never fabricate staff names, photographs, titles, qualifications, contacts, historical dates, news, achievements, statistics, or official mission statements.
- The captured sample includes a leadership profile for `Анарбек уулу Советбек`; do not infer other staff details or reuse his photo for another person. Include publicly displayed contact data only when explicitly approved for the prototype.
- For unprovided text/images, use **clearly marked placeholders**, not made-up institutional facts. Keep content in a single typed data layer for future CMS integration.

## 3. Navigation / information architecture
Desktop and mobile should share these destinations:

- `Главная` — `/`
- `О нас` — `/about`
  - `Миссия` — `/about/mission`
  - `Деканат` — `/about/deans-office`
- `Абитуриентам` — `/applicants` (placeholder until requirements arrive)
- `Студентам` — `/students` (placeholder until requirements arrive)
- `Образовательный портал` — external `https://avn.knau.kg`
- `Кафедры` — `/departments` (placeholder until requirements arrive)
- `Контакты` — `/contacts` (placeholder until requirements arrive)

Detailed staff profiles should use `/about/deans-office/:slug` once content is approved. The labels above are the visual UI labels; route implementation must work under the final hosting base path.

Build only the approved screens now. Other destinations may be intentionally simple, labeled placeholder pages so navigation stays functional, but **never fabricate the missing content**. Avoid creating extra features not requested by the user.

## 4. Design language: academic, not "AI-looking"
Use the **approved Stitch design as the primary visual source**. Initial guide values (unless Stitch establishes different approved tokens):

| Token | Value |
| --- | --- |
| Primary | `#123A70` |
| Navy | `#0B2545` |
| Surface | `#FFFFFF` |
| Section surface | `#F5F8FC` |
| Border | `#DFE6EE` |
| Main text | `#17263A` |
| Muted text | `#64748B` |
| Heading font | Manrope (Cyrillic supported) |
| Body font | Inter (Cyrillic supported) |
| Max content width | around `1240px` |

Visual requirements:
- Editorial institutional aesthetic; precise grid, ample controlled whitespace, strong typographic hierarchy.
- Mostly flat surfaces, subtle borders, restrained corners (typically 6–10px), minimal shadows.
- **No** blue-purple gradients, glassmorphism, neon glows, giant blobs, generic SaaS hero, random icon-card grids, fabricated numbers, stock-image people, or decorative placeholder illustrations.
- Responsive layouts at approximately **390px, 768px, 1024px, and 1440px**; no horizontal overflow.
- The exact ministry line must **wrap and remain readable** on small screens; never truncate or hide it.
- At mobile widths: compact header and an operable hamburger menu with expandable `О нас` items; full keyboard access and 44px-or-larger practical touch targets.
- Use genuine approved images/assets exported from Stitch or provided by the user. If a portrait is unavailable, show a neutral labeled image placeholder; do not generate likenesses.

## 5. Stack and implementation constraints
For the **initial static prototype** prefer:
- React + TypeScript + Vite
- React Router (use `HashRouter` for GitHub Pages project-site preview so nested routes survive a refresh; revisit routing when moving to production hosting)
- Tailwind CSS **only if** the existing repository/Stitch output makes it useful; prefer a coherent tokenized style strategy over a second redundant styling system.
- Reusable components: `InstitutionalBar`, `SiteHeader`, `DesktopNav`, `MobileNav`, `Breadcrumbs`, `SiteFooter`, `SectionHeading`, `StaffCard`, `StaffProfile`.
- Semantic HTML, accessible form and nav controls, typed data, no inline string duplication for factual content.
- No backend, database, login, CMS, payments, analytics, or external APIs until explicitly requested.
- Respect the repository's existing package manager and dependencies. Do not reinitialize or replace an established project merely for convenience.

## 6. Stitch MCP operating procedure
Before implementing or changing a screen:
1. Inspect the configured Stitch MCP tools and list/read the relevant **existing Stitch project and approved screens**. Do not claim access if not connected.
2. Retrieve screen metadata, layout, component styling, export/code/assets, and design-system details that the MCP actually provides. Do not invent tool names, screen IDs, or asset URLs.
3. If multiple Stitch projects/screens exist, identify the intended one from context; if genuinely ambiguous, report which candidate was selected and why.
4. Extract/reuse design tokens; document mapping from Stitch screens to React routes/components.
5. Implement the screens as maintainable React components, not one giant HTML file. Asset paths must work on GitHub Pages.
6. Compare the result to Stitch visually at desktop and mobile viewports. Fix meaningful differences in typography, spacing, alignment, cropping, navigation, and line wrapping.
7. If the MCP output contains HTML/CSS, treat it as reference code, not as permission to bypass a maintainable React structure.
8. When the Stitch screen isn't available or the MCP connection fails, report the exact limitation and **do not pretend** the implementation is pixel-perfect. Implement from approved screenshots only if the user authorizes that fallback.

Optional: Google's official Stitch skills repository (`google-labs-code/stitch-skills`) can support design-to-code workflows. Do not install new plugins/packages unnecessarily if MCP already provides needed access.

## 7. Code organization (suggestion, adapt to an existing repo)
```
src/
  app/                 # router, layouts
  components/          # reusable UI components
  pages/               # Home, About, Mission, DeanOffice, StaffProfile, placeholders
  content/             # approved institutional content and route data
  styles/              # tokens, global styles
  assets/              # licensed/approved images
public/                 # static assets
.github/workflows/      # GitHub Pages deployment
```

Define navigation and people/department data in typed structured files. Keep content separate from components. Respect existing naming and formatting conventions.

## 8. Quality acceptance criteria
A task is complete only after checking:
- The ministry title is spelled **exactly** and displayed on every page, desktop and mobile.
- Navigation and `О нас` submenu work with mouse, touch, and keyboard; escape closes the mobile menu; focus is managed sensibly.
- The portal link uses the exact target URL and proper new-tab attributes.
- The interface text is Russian, with no leaked English UI labels or Lorem Ipsum.
- Only approved personnel/images/content are displayed.
- Visible pages match approved Stitch screens closely (layout, colors, type, content spacing, responsive breakpoints).
- No layout overflow at 390/768/1024/1440px.
- `npm run build` passes; run existing typecheck/lint/test commands if available.
- Basic browser smoke checks cover `/`, `/about`, `/about/mission`, `/about/deans-office`, and navigation links.
- Image alt text, heading hierarchy, focus indication, responsive images, and contrast are reasonable.
- No secrets, API keys, `node_modules`, or `.env` files are committed.

If an automated browser, screenshots, or visual comparison tools are unavailable, say so and list which checks were manual versus not run.

## 9. GitHub Pages deployment
Use GitHub Pages for a **static preview only**. This is not a secure backend hosting solution.
- Include `.github/workflows/deploy.yml` for building and publishing `dist` from the `main` branch.
- Set Vite `base` to `process.env.VITE_BASE_PATH || '/'` in `vite.config.ts` (use existing Vite config if present).
- In the GitHub Action, set `VITE_BASE_PATH` to `/<repo-name>/` from repository metadata. For username.github.io or custom-domain root hosting, adapt to `/` instead.
- Use `HashRouter` for SPA preview to avoid 404s on direct nested links under GitHub Pages. Example: `https://USERNAME.github.io/REPO/#/about/mission`.
- Workflow should use `npm ci` with a committed `package-lock.json`. Adjust only if the repository already uses a different package manager.
- After real deployment, report the **actual** URL surfaced by GitHub Pages, not a guessed success state or fake URL.
- Public GitHub Pages exposes the prototype on the internet. Keep unpublished or unapproved content out of it.

## 10. Change control and reporting
- Before editing, inspect `git status`, existing files, installed dependencies, and current branch. Avoid overwriting teammates' work.
- Make scoped, reviewable changes; do not delete unrelated files.
- Ask approval before deleting large amounts of code, changing architecture, adding backend/services, or deploying to an official university domain.
- If the user explicitly authorizes publishing the preview to GitHub, prepare and execute only actions permitted by available tools/credentials; never expose secrets.
- At the end of each coding task, report: files changed, pages implemented, checks actually run (pass/fail), known limitations, and local/GitHub Pages links **only when they exist**.
