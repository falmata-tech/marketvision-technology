# MarketVision Technology

The company website for MarketVision Technology, an East African technology company building connections and visibility across markets. The page leads with its vision and mission, then presents AfricMade, Loadgistic and SharedTrucks in a dedicated portfolio section. AfricMade and Loadgistic are technology platforms; SharedTrucks is a logistics service business supported by the commerce and transport technology MarketVision builds. Consulting and software development remain part of its expertise in e-commerce, logistics and IoT telematics.

AfricMade is live at `https://africmade.com/`; Loadgistic is live at `https://loadgistic.com/`. SharedTrucks is live at `https://sharedtrucks.com/`. The existing design, colours, illustrations and logos are retained; its portfolio card uses the approved SharedTrucks logo and freight illustration. The contact form accepts general, platform, partnership and consulting enquiries.

## Copy direction

Keep the hero focused on MarketVision’s purpose: connection, market access and visibility. Business and platform names and descriptions belong only in the portfolio section. The heading, logos and concrete descriptions establish the relationship; do not add ownership explanations or internal positioning notes to the public copy. Keep the tone direct and assured, with consulting and development presented in the expertise section.

## Website files

- `index.html` contains the page content and contact form.
- `styles.css` contains the responsive layout and visual design.
- `script.js` handles navigation and form submission.
- `form-config.js` holds the public Web3Forms form access key.
- `assets/` contains the self-hosted font, logo and illustrations.
- `404.html` provides the missing-page view.

No package installation or build step is required. GitHub Pages publishes `main` from the repository root. The `.nojekyll` file keeps the site as plain static files.

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

Amharic uses self-hosted Noto Sans Ethiopic, with normal width and variable weight, alongside Inter for Latin brand lettering. The font comes from the [official Google Fonts source](https://github.com/google/fonts/tree/main/ofl/notosansethiopic); its license is included in `assets/OFL-NotoSansEthiopic.txt`. The font is loaded locally, including in inline illustration labels where present. Translation keeps the existing business claims and brand names, with phrase order and line breaks adapted to each language.
