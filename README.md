# gulp-stripo-email
Export extender  for https://stripo.email/

## How to
1. Copy HTML code to `/src/email.html`

2. Copy CSS code to `/src/style.css`

3. Add `<link rel="stylesheet" href="./style.css" />` to HEAD section in `/src/email.html`

3. Add `<style type="text/css">...</style>` and put there Important code section from `/src/style.css`

4. run `npm install`

5. run `gulp`

6. send test email using [https://putsmail.com/tests/new](https://putsmail.com/tests/new) and code from `/dist/email.html`
