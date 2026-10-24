# MarketVision Technology

The company website for MarketVision Technology, an East African technology company building connections and visibility across markets. The page leads with its vision and mission, then introduces AfricMade and Loadgistic as standalone platforms it owns and develops. Consulting and software development remain part of its expertise in e-commerce, logistics and IoT telematics.

AfricMade is live at `https://africmade.com/`; Loadgistic is live at `https://loadgistic.com/`. The existing design, colours, illustrations and logos are retained. The contact form accepts general, platform, partnership and consulting enquiries.

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
