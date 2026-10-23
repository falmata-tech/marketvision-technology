# MarketVision Technology

The company website for MarketVision Technology: technology consulting and custom software development for e-commerce, logistics and IoT telematics in East Africa. AfricMade and Loadgistic appear as independent platforms developed by MarketVision, demonstrating its work in these fields.

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

Email delivery is not activated yet. `form-config.js` deliberately contains an empty `accessKey`. The complete form stays visible with an availability notice, and sending remains disabled until the receiving email has a valid form key. The site does not open an email application.

To activate the form:

1. Create or select a Web3Forms form that sends to `marketvision.tech@gmail.com`, completing the service's email verification.
2. Paste that form's **public access key** into `accessKey` in `form-config.js`. Do not use a secret account API token or a key belonging to another recipient.
3. Commit the change to `main` and wait for GitHub Pages to deploy it.
4. Send a clearly labelled test enquiry from the live site and confirm its arrival in the receiving inbox.

Submissions stay on the page. The form clears only after a successful API response, keeps entries after an error, prevents duplicate clicks while sending, and times out stalled requests after 20 seconds. API acceptance alone does not confirm inbox delivery.

## Maintenance

The page uses relative asset paths for GitHub Pages project hosting. If the site moves to its own domain, update the canonical and Open Graph URLs in `index.html`, and the base URL in `404.html`.

The Inter font license is included in `assets/INTER-LICENSE.txt`.
