# gulp-stripo-email
Export extender  for https://stripo.email/

## How to
1. Copy HTML code to `/src/email.html`

2. Copy CSS code to `/src/style.css`

3. Add `<link rel="stylesheet" href="./style.css" />` to HEAD section in `/src/email.html`

3. Add `<style type="text/css">...</style>` and cut and put there Important code section from `/src/style.css`

4. Cut responsive media query from css, minify it and put it at the begining of `<style>` tag from previous point 

5. save and move images to dev/prod server and update `src`

6. run `npm install`

7. run `gulp`

8. send test email using [https://putsmail.com/tests/new](https://putsmail.com/tests/new) and code from `/dist/email.html`
