# MarketVision Technology

The company website for MarketVision Technology, an East African technology company that owns, develops and operates platforms for commerce and logistics. The page establishes the parent company, presents the three platforms with equal prominence, explains the perspective behind the portfolio, and provides a contact section for product enquiries and partnerships.

AfricMade is live at `https://africmade.com/`; Loadgistic is live at `https://loadgistic.com/`; CargoChatter is live at `https://cargochatter.com/`. CargoChatter's portfolio card uses its approved logo and a provider-profile and conversation illustration, credited “Powered by CargoChatter”. The contact form accepts general enquiries, questions about the platforms and partnership enquiries.

## Copy direction

Present MarketVision as the owner, developer and operator of its own platforms. The site follows a corporate structure: Company, Our platforms, Our perspective and Contact. Keep the hero focused on the company and purpose, with all three fields explicit: business discovery, access to logistics providers and transport visibility. Platform names are linked in the portfolio index below the hero; detailed descriptions belong in the portfolio. The company section explains ownership and direction; the perspective section explains the market participation the portfolio is intended to support. Keep custom-project offers and client-service sales language out of the page, navigation, metadata and form options. The broad contact invitation leaves room for conversations about other opportunities.

Keep the page compact: one main paragraph and three useful feature points per platform, with repeated eyebrow labels and explanatory artwork notes removed. Present the three platforms as independently useful choices with a shared purpose. Write with substance and a mature business voice. Explain each platform's users, how it works, what they control and the value of those choices. Use connected paragraphs and precise language; clarity should not come at the cost of meaning. Avoid repeated summaries, vague slogans, internal positioning notes and implementation details. Describe each platform on its own merits instead of using another portfolio business as a promotional example. Short labels and accessible descriptions identify the artwork without extended design commentary.

### How the portfolio fits the purpose

- **AfricMade** makes businesses and products discoverable through supplier showrooms and product enquiries. Buyers agree purchases with suppliers directly; do not imply a hosted checkout or guaranteed product availability.
- **CargoChatter** brings logistics-provider profiles and conversations into other websites and apps. The host chooses which providers appear, customers discuss shipments with providers, and provider teams manage profiles, assign enquiries and respond across participating sites. Providers retain responsibility for quotations and service.
- **Loadgistic** supports fleet management, makes vehicle capacity and routes visible, supports trusted transporter networks, and provides controlled updates for agreed shipments. Location information can come from different sources; do not present every vehicle as continuously GPS-tracked.

Present the products in the narrative order AfricMade, CargoChatter and Loadgistic. Use one consistent row architecture, equivalent logo prominence and numbering for all three. CargoChatter must remain part of the opening and company narrative, rather than a separate addition after commerce and transport. Preserve the MarketVision logo, existing blue-and-silver square artwork and core palette.

The shared purpose is to put useful information and commercial relationships within reach of the people who need to act on them. Ownership language describes MarketVision’s role; do not imply unverified legal subsidiaries, acquisitions, financial scale or an investment fund. These complementary roles do not establish an automatic integration between all three platforms, shared accounts, instant rates, or a single booking and payment flow. CargoChatter's public marketing-site chat is an interactive demonstration; it does not send enquiries to providers.

The October 2026 copy review used the existing MarketVision vision and site history, [AfricMade's about page](https://africmade.com/about) and supplier enquiry flow, [CargoChatter's website](https://cargochatter.com/) and demo implementation, and [Loadgistic's about page](https://loadgistic.com/about), [tracking page](https://loadgistic.com/track), and [public product source](https://github.com/falmata-tech/loadgistic). Preserve the distinction between observed product behavior, owner-provided positioning, and future capabilities.

## Website files

- `index.html` contains the page content and contact form.
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

The root page is English; `/am/`, `/om/` and `/so/` are complete static Amharic, Afaan Oromoo and Somali pages. Each has its own page language, title, description, canonical URL and reciprocal language links. `sitemap.xml` includes all four versions. The 404 page uses the requested language when the missing URL contains `/am/`, `/om/` or `/so/`.

The language chooser is visible outside the mobile navigation and uses native disclosure and links. It has named language choices, current-language indication, keyboard support and 44px or larger controls. Switching language keeps the section hash. An unfinished enquiry is transferred once through same-origin session storage and removed when the destination reads it; it expires after two minutes and is never placed in the URL. There is no automatic redirect based on browser language.

### Editing and rebuilding

- `site-template.html` contains the shared page structure and translation bindings. `error-template.html` contains the error-page structure.
- `locales/en.json`, `locales/am.json`, `locales/om.json` and `locales/so.json` contain the copy. Keep their keys identical. Headings may use `<br>` and `<span>` for intentional line breaks and colour accents.
- `index.html`, `am/index.html`, `om/index.html`, `so/index.html`, `404.html` and `sitemap.xml` are generated. Update the templates/catalogs and rebuild rather than editing those output files directly.
- Install the build-only Python dependency with `python -m pip install -r scripts/requirements.txt`, then run `python scripts/build-locales.py`. The public site itself remains plain static HTML, CSS and JavaScript; it has no Python or translation-service runtime.
- `languages.js` provides translated form validation and the language-control interactions. Existing form recipients and Web3Forms access keys are unchanged. Submission payloads include the selected language.
- CargoChatter links preserve the selected language with `?lang=am`, `?lang=om` or `?lang=so`. Its illustration credit remains “Powered by CargoChatter” in every language.

Amharic uses self-hosted Noto Sans Ethiopic, with normal width and variable weight, alongside Inter for Latin brand lettering. The font comes from the [official Google Fonts source](https://github.com/google/fonts/tree/main/ofl/notosansethiopic); its license is included in `assets/OFL-NotoSansEthiopic.txt`. The font is loaded locally, including in inline illustration labels where present. Translation keeps the business claims and brand names, with phrase order and line breaks adapted to each language. Use familiar, descriptive wording in Amharic, Afaan Oromoo and Somali rather than rare or invented technical terms. Review the whole page for a natural voice; do not carry English phrasing across word for word.

## Concise portfolio review

The revised page removes repeated eyebrow headings, artwork footnotes, the duplicate portfolio-navigation title and secondary product paragraphs. Each product now has one focused description and three feature points; the company section explains independent use, and the perspective section focuses on producers’ reach and choice. Spacing is tightened while retaining the original blue-and-silver artwork, logo, palette, three-product order and equal visual treatment.

The Web3Forms configuration, submission code, validation and language-transfer behavior remain unchanged. The page build checks four complete catalogs; browser review covers desktop and narrow layouts, navigation, localized content and contact-form availability without submitting an enquiry.
