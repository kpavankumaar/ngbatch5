# Managerapp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

// error message 
Uncaught SyntaxError: Unexpected token <
polyfills.js:1 Uncaught SyntaxError: Unexpected token <
styles.js:1 Uncaught SyntaxError: Unexpected token <
vendor.js:1 Uncaught SyntaxError: Unexpected token <
main.js:1 Uncaught SyntaxError: Unexpected token <



So I was able to fix my issue by updating the `base href` attribute inside the head tags of `index.html`.
I didn't realize that when i did an `ng build` that it was creating a subdirectory with the project name inside of the dist directory. Because of this I had to update the `base href `attribute from `<base href="/">` to `<base href="/managerapp/">` in order to point to that folder instead of the root folder.

ng build --prod --output-path docs --base-href /managerapp/