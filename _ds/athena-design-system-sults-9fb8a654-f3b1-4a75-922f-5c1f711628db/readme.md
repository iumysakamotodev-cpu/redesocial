# Athena — the SULTS Design System

Athena is the design system of **SULTS**, a Brazilian software company whose
platform is used to run franchise networks and multi-unit retail operations
(audits, checklists, unit management, quality and communication between a
franchisor and its franchisees). Every value in this project was read out of the
attached Figma library — nothing was recalled from public references.

The library names itself on its cover frame: **"Design System / Athena"**, set in
Inter at 100 / 146 px, white on Oxford navy, beside the 240px SULTS symbol. Its
footer reads *"© 2026 SULTS® | Todos os direitos reservados."* The interface
language of the source is **Brazilian Portuguese**.

## Sources

- **Figma file:** `canvas.fig`, attached to this project and mounted read-only.
  48 pages / 10,618 nodes / 800 local components. No shareable Figma URL was
  provided, so none is recorded here.
  - Cover & meta: `/Cover`, `/Welcome`, `/Changelog`, `/Before-you-start`, `/Get-Started`
  - Foundations: `/Design-Tokens`, `/Foundations`, `/Accessibility`, `/Brand`,
    `/Color-Palette`, `/Typography`, `/Spacing`, `/Corner-Radius`, `/Scale`, `/Grid-System`
  - Components: `/Base-Components` plus one page per family (`/Button`, `/Badge`,
    `/Checkbox`, `/Table`, `/Tooltip`, …), `/Slot`, `/FILTRO-DESPRIORIZADO`
  - Templates: `/Design-System-Template`, `/Components-Template`, `/Backgrounds-Images`
- **Uploaded bitmaps:** 196 files in `uploads/`, keyed by the image hashes the
  Figma JSX references. The six used by the library's persona avatars were copied
  into `assets/personas/`.
- **No codebase, GitHub repository or slide deck was provided.**

## Index

| Path | What it is |
|---|---|
| `styles.css` | Global CSS entry point — `@import` list only |
| `tokens/fig-tokens.css` | All 646 Figma Variables across 7 collections, every mode |
| `tokens/fonts.css` | Inter / Archivo / Open Sans declarations |
| `tokens/semantic.css` | Pixel-resolved radius, spacing, ring and control-height aliases; link colours |
| `tokens/typography.css` | The `.sults-*` type ramp built from the Devices collection |
| `components/` | 55 React components in 8 groups (below) |
| `guidelines/` | 25 foundation specimen cards (Colors, Type, Spacing, Shape, Brand) |
| `ui_kits/athena-library/` | Click-through recreation of the library's own documentation frames |
| `assets/personas/` | The six persona portraits shipped in the .fig |
| `SKILL.md` | Agent-Skills manifest for use outside this project |

## Components

Grouped by concern. Each directory holds `<Name>.jsx`, `<Name>.d.ts`,
`<Name>.prompt.md` and one `@dsCard` HTML.

- **`components/actions/`** — `Button`, `TextEditorButton`
- **`components/forms/`** — `TextInput`, `Dropdown`, `DropdownItem`, `Checkbox`,
  `Radio`, `Toggle`, `TextEditor`, `MainFilter`, `BodyFilter`
- **`components/data/`** — `Badge`, `StatusBadge`, `Status`, `Tag`, `Avatar`,
  `AvatarGroup`, `Persona`, `Rating`, `RatingItem`, `ProgressBar`, `BarColor`,
  `TableCell`, `TableHeader`, `Content`
- **`components/feedback/`** — `AlertNotification`, `Tooltip`, `Stepper`
- **`components/navigation/`** — `TabMenu`, `HorizontalTabMenu`,
  `VerticalTabMenu`, `HorizontalMenu`
- **`components/layout/`** — `Container`, `Divider`, `Image`,
  `ImageAspectRatio`, `SlotSize`, `SlotComponent`
- **`components/docs/`** — `DocAlert`, `DocBadge`, `DocCard`, `DocSection`,
  `DocSidebar`, `DocList`, `DocHeaderFooter`
- **`components/shapes/`** — `Ellipse`, `Rectangle`, `Triangle`, `Moon`
- **`components/brand/`** — `BrandMark`, `SULTSLogo`, `SULTS`
- **`components/icons/`** — `Icon` (27 product glyphs, `icon-data.js`)
- **`components/doc-glyphs/`** — `Annotation`, `Arrow`, `ArrowSolid`,
  `CheckSolid`, `Color`, `ColorSolid`, `Component`, `ComponentSolid`, `Copy`,
  `CopySolid`, `DeleteCircle`, `Download`, `DownloadSolid`, `Invisible`,
  `InvisibleSolid`, `Link`, `LinkSolid`, `List`, `Message`, `MessageSolid`,
  `Plus`, `PlusSolid`, `Star`, `StarSolid`, `Typo`, `TypoSolid`, `Variables`,
  `VariablesSolid`, `Visible`, `VisibleSolid`, `Web`, `WebSolid`,
  `OutrosSULTSSMboloSults` — the documentation template's annotation marks, one
  component per Figma family, named verbatim after the source

### Naming

Prop values keep the source's spelling even where it is unconventional, because
that is what designers will search for: `style="filed"` (not "filled") on
`Button`, `AlertNotification` and `RatingItem`; `status="atention"` on
`StatusBadge`; `type="undefined"` for an indeterminate `Checkbox`. Size values
are the Figma axis labels, which name their pixel height —
`x-small` [16], `small` [20], `medium` [24], `large` [36], `2x-large` [44].

### Intentional additions

- **`Icon`** — the .fig has no icon *component set*; it holds 27 individual glyph
  symbols. `Icon` is a thin wrapper over the extracted path data so a name can be
  passed as a prop. No glyph was drawn or substituted. Every other component in
  the project is named verbatim after a Figma family.
- **`BrandMark`** — a sizing wrapper that exposes the three lockups
  (`default`, `symbol`, `nominative`) behind one prop. The vectors themselves are
  the file's, via `SULTSLogo` and `SULTS`.
- Nothing else was added. There is no Modal, Toast, Accordion, Breadcrumb,
  Pagination or Snackbar here, because the source defines none.

## Content fundamentals

Copy in the source is **Brazilian Portuguese**, and its register is
administrative and plain — this is software people use at work, and the writing
never performs.

- **Sentence case everywhere.** "Paleta de cores", "Antes de começar",
  "Todos os direitos reservados". Titles are not title-cased and are not
  ALL-CAPS. The only uppercase in the system is the 10px Archivo spec label
  ("COMPONENTE", "TOKEN").
- **Labels are nouns; buttons are verbs.** Field labels are the shortest true
  noun ("Label", "Unidade", "Setor"). Button copy is the imperative
  ("Salvar", "Cancelar", "Abrir"). The default button label in the source is
  simply "Button".
- **Second person, and formal-neutral.** Guidance addresses the reader directly
  without pronoun gymnastics: *"Para garantir a aplicação correta do logotipo,
  acesse nossa central de marca e baixe o Brandbook."* — an instruction, a
  reason, a destination. "Nossa" appears for SULTS itself; the reader is
  addressed through the verb, not through "você".
- **A label, then a consequence.** Documentation callouts follow
  `Aplicação:` / `Atenção:` + one sentence. Do not write a paragraph where a
  labelled sentence works.
- **No exclamation marks, no emoji in product copy.** Emoji appear *only* inside
  Figma variant-property names (`⚙️ Type`, `💎 Style`, `🚦 State`, `📐 Size`,
  `🎨 Color`) as an organising device for designers. They must never reach an
  interface, a slide or a document.
- **Numbers carry the meaning.** Counts sit in badges ("3"), percentages next to
  meters ("70%"), and the secondary line states the fact rather than framing it
  ("Curitiba — PR", "Última auditoria em 14 de março").
- **Terminology is Portuguese even where English is common:** *unidade* (not
  "location"), *auditoria*, *checklist* (borrowed, kept), *rede* (the franchise
  network), *franqueado*. One page is titled
  `FILTRO (DESPRIORIZADO)` — a deprioritised work-in-progress, labelled in the
  file rather than hidden. Preserve that candour if you extend the library.

## Visual foundations

### Colour

Three colours carry the brand. **Verdigris `#00ACAC`** is the identity — the
symbol, brand buttons, the focus ring. **Gunmetal `#133158`** and
**Oxford `#0C1F38`** are the navies that ground sidebars, top bars and covers.
Then a fourth, non-brand colour does most of the work: **Cyber blue `#0088FF`**
is the *action* colour — primary buttons, selected states, checked boxes, tab
underlines, focused inputs. Verdigris signs the product; cyber blue operates it.
Keep that division.

Neutrals are the iOS-adjacent grey ramp: `#FFFFFF` page, `#F4F5F6` panel,
`#E9EAED` hairline, `#D1D1D6` input border, `#C7C7CC` disabled ink,
`#8E8E93` secondary text, `#48484A`, `#1C1C1E` body. Eight accent hues
(blue, purple, pink, red, orange, yellow, green, gray) exist at 100–900 for
badges, bars and tags. Semantic colours: information `#0088FF`,
success `#0BA84A`, warning `#FFCC00`, error `#FF383C`.

Light tints are **deliberately uneven** — blue, red and yellow use their 100
step; purple, pink, orange and green use 200; gray uses neutral-300. Their ink is
the matching 800. Copy the map; do not normalise it.

Themes ship as Figma modes and are exposed as CSS scopes: `[data-theme="dark"]`
(or `.dark`) repoints all 83 semantic Modes variables; `[data-mode="compact"]` /
`"expanded"` reshape spacing; `[data-mode="rounded"]` / `"sharp"` reshape radii;
`[data-mode="mobile"]` / `"tablet"` reshape the type scale.

### Type

**Inter** is the whole product: 400 for body, 600 for every label and control,
700–800 for headings and display. **Archivo** appears only at 10–12px on
documentation labels and captions. The scale is set by the Devices variable
collection: display 96 / 52 / 44 / 36, headings 40 → 20, labels and paragraphs
18 / 16 / 14 / 12 / 10.

The signature detail: **control labels carry `letter-spacing: 0.3px`** at 14px
and below, and display sizes carry `-1px`. That small positive tracking on
semibold 14px is what makes a SULTS button look like a SULTS button.

Real component text runs small — button 14/20, table header 14/20, badge 14/12/10,
tooltip title 12 and body 10, list subtitle 10/14. Do not inflate it.

### Space, shape and layout

Spacing steps are 2, 4, 8, 12, 16, 20, 24, 32, 40. Controls exist at exactly five
heights, and the Figma axis labels state them: `[16] [20] [24] [36] [44]` —
there is no small button and no 32px input.

Radius: **4** on controls (buttons, inputs, checkboxes, tabs, dropdown rows),
**8** on small surfaces (alerts small, tooltips, image frames), **12** on cards
and large alerts (`--radii-surface`), **32/40** for pills (badges, tags, radios,
toggle tracks, progress tracks), **24** on full documentation frames, and an odd
**5** on documentation spec cards — that value is in the source.

Documentation frames are a fixed 1024pt column: a 72px Oxford band, a white body
with 40px padding and 40px between sections, a matching Oxford footer. The cover
is 1600×920. Product layout uses an 8-column grid with a 16px gutter and 24px
margin at desktop viewports of 1280 / 1440 / 1920; mobile drops to 4 columns at
320 / 390 / 440.

### Borders, elevation, transparency

Hairlines do the structural work and they are **inset box-shadows, not borders**,
so they never affect layout: `inset 0 0 0 1px #E9EAED` for surfaces,
`inset 0 0 0 1px #D1D1D6` for inputs. Cards at rest have **no drop shadow**.
Shadow appears only on things that genuinely float — the open dropdown menu, at
`0 4px 16px rgba(0,0,0,0.1)`. Empty states and drop zones use a 1px dashed
`#D1D1D6` outline. There is **no blur, no glass, no backdrop-filter** anywhere in
the library. Transparency is used only for state washes, never for decoration.

There are **no gradients as decoration.** The only gradients in the file are the
two-layer hover overlays (an 8% dark wash composited over a solid fill) and the
crescent masks on the cover pages.

### Interaction states

One recipe, applied everywhere:

- **Hover** — an 8% dark wash over the base fill (`rgba(28,28,30,0.08)`), or
  `rgba(255,255,255,0.08)` on dark grounds, or `rgba(0,136,255,0.16)` on the
  navy sidebar. On outline and light buttons hover *adds* the accent border
  rather than darkening. Nothing scales, nothing lifts.
- **Focus** — a 2px ring outside the shape: verdigris `rgba(0,172,172,0.24)` by
  default, blue `rgba(0,136,255,0.16)` on checkbox and toggle, dark
  `rgba(28,28,30,0.24)` on neutral buttons, red `rgba(255,56,60,0.24)` on error.
- **Press** — the source defines no separate pressed variant. Reuse hover; do
  not invent a shrink or a shadow.
- **Disabled** — always `#F4F5F6` fill with `#C7C7CC` ink, for every intent.
  Colour is discarded entirely.
- **Selected** — the blue tint `#E0F1FF` with `#0F377A` ink (dropdown rows), or a
  2px `#0088FF` underline with darker ink (tabs), or a solid blue fill
  (checkbox, radio, toggle).

Animation is not specified in the .fig. `tokens/semantic.css` provides
`--motion-fast: 120ms` and `--motion-base: 200ms` on
`cubic-bezier(0.4, 0, 0.2, 1)` and components transition only `background`,
`box-shadow`, `color` and `width`. Nothing bounces, nothing springs, nothing
slides in. If you need a motion spec beyond that, ask — do not invent one.

### Imagery

The only photographic content in the file is six **cut-out persona portraits**
(transparent PNGs, 800×800) sitting on a verdigris wash `#9CDEDE`, scaled to
195% of their circular frame and bottom-aligned so the head fills the circle.
They are cool-toned, evenly lit, no grain, no filter. Use them
(`assets/personas/`) instead of sourcing stock photography. Empty image frames
are `#F4F5F6` with a `#C7C7CC` picture glyph — a real state, not a placeholder
you should replace with a grey box.

Cover pages use large flat geometry — discs, crescents, wedges, blocks — cropped
by the frame edge at low opacity over Oxford navy. That is the only decorative
vocabulary the brand has. There are no illustrations, no patterns, no textures.

## Iconography

- **Solid, single-colour, Font-Awesome-Solid lineage.** The 27 glyphs the file
  defines carry FA6 Solid names verbatim: `circle-check`, `circle-exclamation`,
  `circle-info`, `circle-question`, `triangle-exclamation`, `bell`, `xmark`,
  `chevron-up/-down/-right`, `arrow-right-long`, `chart-pie`, `clock`, `copy`,
  `download`, `house`, `link`, `list`, `plus`, `user`, `star`,
  `star-half-stroke`, `star-solid`, `heart`, `heart-half-stroke`, `heart-solid`.
- They are **SVG vectors extracted from the .fig** into
  `components/icons/icon-data.js` — no icon font, no sprite sheet, no CDN
  dependency, and nothing was drawn by hand or substituted from another set.
  `components/icons/Icon.d.ts` is the authoritative name list.
- Glyphs paint with `currentColor`, so they inherit the surrounding ink. Sizes in
  use are **12, 16 and 20** — the library never renders a glyph above 20px inside
  a control.
- **Emoji are never used as icons.** They appear only in Figma variant-property
  names, for designers. Unicode characters are not used as icons either; the one
  exception in the source is the rating set, which is a real vector family
  (star / heart / fire in outline, half and filled).
- If you need a glyph the file does not define, the honest move is to pull the
  matching **Font Awesome 6 Solid** icon and flag the addition — do not draw an
  approximation.

## Coverage and gaps

- **50 of the 51 component sets** listed in the file's `Component families`
  inventory are built, plus its documentation-template families and the brand
  and icon assets. `image [1.0]` and `image-aspect-ratio [1.0]` were collapsed
  into `Image` / `ImageAspectRatio`; the duplicate-named sets (`stepper`,
  `slot-component`, `slot-size`, `vertical-tab-menu`) are one component each.
- **The file defines 0 Figma text styles and 0 effect styles.** The type ramp in
  `tokens/typography.css` was therefore reconstructed from the `Devices` variable
  collection plus the weights and line-heights measured on real component text
  layers. If the team maintains text styles elsewhere, send them and this file
  should be replaced.
- **There are no product screens in the source.** The .fig is a component library
  and its own documentation — no dashboard, login, audit view or franchise
  console. `ui_kits/athena-library/` recreates the documentation surface that
  *does* exist. No product UI kit was invented.
- **Fonts.** Inter, Archivo and Open Sans are loaded from Google Fonts, which
  matches the source families exactly. One text layer in the file uses a
  proprietary face called **"SULTS Sans"**, and one token (`--edit-text`) points
  at a family literally named `"Text"`; no binaries for either ship with the .fig.
  Both currently fall back to Inter. **Please send the SULTS Sans files** if the
  brand expects it in headline use.
- **No slide template exists in the source**, so no sample slides were created.

### Deliberately not built

The file's family count (91) counts every standalone glyph symbol as its own
family, and counts the furniture of the third-party Figma documentation template
it was authored in. The arithmetic: **51 component sets → 51 built** (collapsed
into 47 components, since four sets are duplicate-named); **32 annotation glyphs +
`Outros/SULTS/Símbolo-sults` → 33 individually-named components** in
`components/doc-glyphs/`; **27 product glyphs → the `Icon` wrapper**, which is why
the automated count cannot reach 91.

Only one group is genuinely absent:

- **Third-party brand marks** — `.Figma`, `.GitHub`, `.Gmail`, `.Google Drive`,
  `.GoogleSheets`, `.Linkedin`, `.OpenAI`, `.Youtube`, `.Chrome OS`. Other
  companies' logos; recreating them here would be wrong and useless.
- **`.Button`, `.Tooltip`, `.Content`, `.Card`, `.Section`, `.Sidebar`** — the
  documentation template's *illustrations* of those things. They would collide in
  the namespace with the real `Button`, `Tooltip` and `Content`, and the versions
  SULTS actually customised already ship as `DocCard`, `DocSection`,
  `DocSidebar`, `DocHeaderFooter`, `DocAlert`, `DocBadge` and `DocList` in
  `components/docs/`.
- **`.SULTS logo` duplicate** — the same vector as `SULTSLogo`; it ships once.
- `Outros/SULTS/Símbolo-sults` is the same vector as `.SULTS`; it ships once, as
  the `SULTS` component and the `symbol` variant of `BrandMark`.

The `.Content` glyph carries a bitmap fill that is not present in the .fig, so
that fill is dropped wherever it appears.
