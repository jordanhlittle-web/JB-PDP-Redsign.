# JB Hi-Fi PDP redesign

**Figma (source of truth):** [BAU — Blake designs — 2026](https://www.figma.com/design/oQlMPmyEPlC2lxxmT5zmZ7/BAU---Blake-designs---2026?node-id=54-7230&t=OqVmI6zLwZoRQvnZ-1)  
**Figma (Dev Mode, node 54-7232):** [Open in Dev Mode](https://www.figma.com/design/oQlMPmyEPlC2lxxmT5zmZ7/BAU---Blake-designs---2026?node-id=54-7232&m=dev)

## HTML prototype

Implemented from [Figma design](https://www.figma.com/design/oQlMPmyEPlC2lxxmT5zmZ7/BAU---Blake-designs---2026?node-id=54-7232) via Figma MCP.

- **`index.html`** — Full mobile PDP (header, carousel, size selector, product info, delivery options, offers, use cases, full description, FAQs, delivery & returns, sticky footer).
- **`styles.css`** — JB Hi-Fi design tokens (primary yellow #FFEC0F, success green #028702, etc.) and layout.
- **`script.js`** — Size selector, delivery options, and tab toggles.

**Images:** Product and icon images use Figma MCP asset URLs (valid ~7 days). If they stop loading, replace `src` in `index.html` with local files in `assets/`.

**Run it:** Open `index.html` in a browser, or run `npx serve .` in this folder.
