# MarketVision Technology

The company website for MarketVision Technology, an East African technology company that owns, develops and operates platforms for commerce and logistics. The homepage presents a clear group proposition, three equally prominent platforms and a contact section. A separate Company page provides the company's background and purpose.

AfricMade is live at `https://africmade.com/`; Loadgistic is live at `https://loadgistic.com/`; CargoChatter is live at `https://cargochatter.com/`. CargoChatter's portfolio card uses its approved logo and a provider-profile and conversation illustration, credited “Powered by CargoChatter”. The contact form accepts general enquiries, questions about the platforms and partnership enquiries.

## Copy direction

Use a compact parent-company structure: Platforms, Company and Contact. The homepage moves directly from the group proposition and portfolio navigation into the three product sections, then contact. Its purpose covers commerce and logistics businesses, including logistics providers and transporters as businesses with their own customers and operations. Company background and ownership belong on the separate Company page. Do not reintroduce homepage explanations of independent use, a second mission section, or a producer-only conclusion after the portfolio. Keep custom-project offers and client-service sales language out of the page, navigation, metadata and form options.

Keep one focused paragraph and three useful feature points per platform. Let concrete product capabilities establish the portfolio's value. Write with substance and a mature business voice, using connected paragraphs and precise language. Avoid repeated eyebrow labels, summaries, vague assurances, internal positioning notes and explanatory artwork captions. Describe each platform on its own merits. Keep accessible artwork descriptions; they are useful to visitors using assistive technology.

### How the portfolio fits the purpose

- **AfricMade** makes businesses and products discoverable through supplier showrooms and product enquiries. Buyers agree purchases with suppliers directly; do not imply a hosted checkout or guaranteed product availability.
- **CargoChatter** brings logistics-provider profiles and conversations into other websites and apps. The host chooses which providers appear, customers discuss shipments with providers, and provider teams manage profiles, assign enquiries and respond across participating sites. Providers retain responsibility for quotations and service.
- **Loadgistic** supports fleet management, makes vehicle capacity and routes visible, supports trusted transporter networks, and provides controlled updates for agreed shipments. Location information can come from different sources; do not present every vehicle as continuously GPS-tracked.

Present the products in the narrative order AfricMade, CargoChatter and Loadgistic. Use one consistent row architecture, equivalent logo prominence and numbering for all three. Preserve the MarketVision logo, existing blue-and-silver square artwork and core palette.

The Company page connects commercial opportunity with practical work: product discovery, logistics enquiries, fleet management and capacity visibility. Ownership language describes MarketVision’s role; do not imply unverified legal subsidiaries, acquisitions, financial scale or an investment fund. These complementary roles do not establish automatic integration between all three platforms, shared accounts, instant rates, or a single booking and payment flow. CargoChatter's public marketing-site chat is an interactive demonstration; it does not send enquiries to providers. SharedTrucks is a logistics service provider, not a fourth software platform in this portfolio.

The October 2026 copy review used the existing MarketVision vision and site history, [AfricMade's about page](https://africmade.com/about) and supplier enquiry flow, [CargoChatter's website](https://cargochatter.com/) and demo implementation, and [Loadgistic's about page](https://loadgistic.com/about), [tracking page](https://loadgistic.com/track), and [public product source](https://github.com/falmata-tech/loadgistic). Preserve the distinction between observed product behavior, owner-provided positioning, and future capabilities.

## Website files

- `index.html` contains the generated homepage and contact form; `company/index.html` contains the generated Company page.
- `styles.css` contains the responsive layout and visual design.
- `script.js` handles navigation and form submission.
- `form-config.js` holds the public Web3Forms form access key.
- `assets/` contains the self-hosted font, logo and illustrations.
- `assets/africmade-visual.svg` and `assets/loadgistic-visual.svg` are the editable portfolio artwork. The language build inserts them at the template's `data-platform-illustration` slots and translates their labels and descriptions. Edit these source SVGs rather than generated inline copies.
- `404.html` provides the missing-page view.

The portfolio illustrations follow each product's own design: AfricMade uses orange (`#FF4B00`, action `#C93600`), charcoal and warm white for supplier showrooms, product collections and enquiries. Loadgistic uses cobalt (`#155EEF`), navy (`#0B1D3A`) and pale blue for capacity maps, vehicle space and controlled shipment updates. Illustrations are conceptual; they do not show customer data, actual routes or a live shipment. Visible labels and accessible descriptions are localized across all four pages.

GitHub Pages publishes the generated static files from `main` at the repository root. The `.nojekyll` file keeps the site as plain static files. Serving the committed output requires no package installation; copy and structure changes use the local rebuild described below.

## Contact form setup

The form uses [Web3Forms](https://web3forms.com/) and must use a form access key verified for **marketvision.tech@gmail.com**. Its key determines the recipient; the visitor's email is used as the reply address.

`form-config.js` contains the public form access key supplied for MarketVision. Visitors submit enquiries directly on the page; the site does not open an email application. If the key is removed or malformed, sending is disabled and an availability notice is shown.

To change the receiving form or replace its key:

1. Create or select a Web3Forms form that sends to `marketvision.tech@gmail.com`, completing the service's email verification.
2. Paste that form's **public access key** into `accessKey` in `form-config.js`. Do not use a secret account API token or a key belonging to another recipient.
3. Commit the change to `main` and wait for GitHub Pages to deploy it.
4. Send a clearly labelled test enquiry from the live site and confirm its arrival in the receiving inbox.

Submissions stay on the page. The form clears only after a successful API response, keeps entries after an error, prevents duplicate clicks while sending, and times out stalled requests after 20 seconds. API acceptance alone does not confirm inbox delivery.

## Maintenance

The custom domain is `marketvisiontech.com`, declared in the root `CNAME` file. The canonical and Open Graph URLs in `index.html` and the base URL in `404.html` use `https://marketvisiontech.com/`. Homepage assets remain relative.

GoDaddy DNS must point the apex (`@`) to the four GitHub Pages addresses: `185.199.108.153`, `185.199.109.153`, `185.199.110.153` and `185.199.111.153`. The `www` CNAME must point directly to `falmata-tech.github.io`. GitHub Pages serves the apex as the primary address and redirects `www` to it when both records are configured. Enable Enforce HTTPS once the custom-domain certificate is ready.

The Inter font license is included in `assets/INTER-LICENSE.txt`.


## English, Amharic, Afaan Oromoo and Somali

The root page is English; `/am/`, `/om/` and `/so/` are complete static Amharic, Afaan Oromoo and Somali homepages. The Company page is available at `/company/`, `/am/company/`, `/om/company/` and `/so/company/`. Each of the eight pages has its own language, title, description, canonical URL and reciprocal links to the same page in the other languages. `sitemap.xml` includes all eight pages. The 404 page uses the requested language when the missing URL contains `/am/`, `/om/` or `/so/`.

The language chooser is visible outside the mobile navigation and uses native disclosure and links. It has named language choices, current-language indication, keyboard support and 44px or larger controls. Switching language keeps the page type and section hash. An unfinished enquiry is transferred once through same-origin session storage and removed when the destination reads it; it expires after two minutes and is never placed in the URL. There is no automatic redirect based on browser language. Links to the former homepage `#company`, `#vision` and `#perspective` sections redirect to the Company page in the same language.

### Editing and rebuilding

- `site-template.html` contains the shared header/footer and homepage structure with translation bindings. `company-template.html` supplies the Company's main content within that shared shell. `error-template.html` contains the error-page structure.
- `locales/en.json`, `locales/am.json`, `locales/om.json` and `locales/so.json` contain the copy. Keep their keys identical. Headings may use `<br>` and `<span>` for intentional line breaks and colour accents.
- The homepage and Company HTML in all four languages, `404.html` and `sitemap.xml` are generated. Update the templates/catalogs and rebuild rather than editing those output files directly. The builder resolves internal page links relative to each document and keeps language switching on the same page.
- Install the build-only Python dependency with `python -m pip install -r scripts/requirements.txt`, then run `python scripts/build-locales.py`. The public site itself remains plain static HTML, CSS and JavaScript; it has no Python or translation-service runtime.
- `languages.js` provides translated form validation and the language-control interactions. Existing form recipients and Web3Forms access keys are unchanged. Submission payloads include the selected language.
- CargoChatter links preserve the selected language with `?lang=am`, `?lang=om` or `?lang=so`. Its illustration credit remains “Powered by CargoChatter” in every language.

Amharic uses self-hosted Noto Sans Ethiopic, with normal width and variable weight, alongside Inter for Latin brand lettering. The font comes from the [official Google Fonts source](https://github.com/google/fonts/tree/main/ofl/notosansethiopic); its license is included in `assets/OFL-NotoSansEthiopic.txt`. The font is loaded locally, including in inline illustration labels where present. Translation keeps the business claims and brand names, with phrase order and line breaks adapted to each language. Use familiar, descriptive wording in Amharic, Afaan Oromoo and Somali rather than rare or invented technical terms. Review the whole page for a natural voice; do not carry English phrasing across word for word.

## Parent-company structure review

The homepage contains one group proposition, the three product sections and contact. The former Company interlude, portfolio aside, producer-only Perspective section and office eyebrow label are removed. The separate Company page introduces MarketVision and expresses a purpose that includes commerce businesses, logistics providers and transporters. Obsolete locale keys and stale English template fallback prose are removed so later rebuilds retain this direction.

The Web3Forms configuration, submission behavior, validation and form-draft transfer remain unchanged. The page build checks four complete catalogs; verification covers all eight document routes and their internal links, canonical/alternate URLs, desktop and narrow layouts, language switching and contact-form availability without submitting an enquiry.
