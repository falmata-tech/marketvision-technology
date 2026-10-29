# MarketVision website editing

## Standing copy direction from the owner

- Write concise public copy that explains a useful capability, business outcome or next step.
- Do not add ownership/operator explanations, qualifications about platforms working independently, or repeated explanations of a shared purpose. These read like internal positioning notes, not useful website content.
- Do not add generic progress promises or reassuring closing lines about building toward access, taking one connection at a time, or similar aspirations without concrete information.
- Avoid redundant introductory asides, repeated summaries, excessive eyebrow headings and explanatory artwork notes. Keep accessible image descriptions and necessary functional guidance.
- Treat logistics companies and transporters as businesses with their own customers and operations, alongside suppliers, buyers and platform operators.
- Preserve approved wording and keep revisions within the requested scope. The separate Company-page redesign was rejected; the site remains a single page unless the owner requests a structural change.

## Source and verification

- Edit `site-template.html` and the four `locales/*.json` catalogs, then rebuild with `python3 scripts/build-locales.py`. Generated pages are committed for GitHub Pages.
- Remove discarded public paragraphs from the template and remove their corresponding locale keys; do not leave rejected copy as a fallback.
- Keep all language catalogs aligned and translate meaning naturally. Verify the changed section on desktop and mobile.
- Follow the product facts in `README.md`. Do not invent integrations, customer results, live tracking guarantees or product capabilities.
