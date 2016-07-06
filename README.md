# my-angular-app

## Getting Started

To get you started you can simply clone the `my-angular-app` repository and install the dependencies:

## Prerequisites

- Git
- Node.js and tools (`npm`, `bower`,...)

### Clone app-template

Clone the `my-angular-app` repository using `git`:

```bash
git clone https://github.com/at-quangth/my-angular-app.git
cd my-angular-app
```

### Installing dependencies

The application relies upon various Node.js tools, such as Bower, Karma and Protractor.  You can install these by running:

```bash
npm install
```

This will also run `bower install`, which will download the Angular files needed for the current step of the tutorial.

Most of the scripts described below will run this automatically but it doesn't do any harm to run it whenever you like.

### Running the app during development

- Run `npm start`
- Navigate your browser to `http://localhost:8000/index.html` to see the app running in your browser.

### Running unit tests

We recommend using [Jasmine](http://jasmine.github.io/) and [Karma](https://karma-runner.github.io/) for your unit tests/specs, but you are free to use whatever works for you.

- Start Karma with `npm test`
  - A browser will start and connect to the Karma server. Chrome is the default browser, others can be captured by loading the same url as the one in Chrome or by changing the `test/karma.conf.js` file.
- Karma will sit and watch your application and test JavaScript files. To run or re-run tests just change any of your these files.

### End-to-end testing

We recommend using Jasmine and [Protractor](https://Angular.github.io/protractor/) for end-to-end testing.

Requires a webserver that serves the application. See Running the app during development, above.

- Serve the application: run `npm start`.
- In a separate console run the E2E tests: `npm run protractor`. Protractor will execute the E2E test scripts against the web application itself.
  - The configuration is set up to run the tests on Chrome directly. If you want to run against other browsers then you must install the WebDriver, `npm run update-webdriver`, and modify the configuration at `test/protractor.conf.js`.

## Application Directory Layout

```text
app/                   --> all of the files to be used in production
  index.html           --> app layout file (the main html template file of the app)
  css/                 --> css files
    app.css            --> default stylesheet
  img/                 --> image files
  js/                  --> JavaScript files
    app.js             --> the main application module
    controllers.js     --> application controllers
    directives.js      --> application directives
    services.js        --> custom Angular services
  view/                --> Angular view partials (partial html templates) used by ngRoute
    people.html
    person.html
  bower_components/    --> 3rd party js libraries, including Angular and jQuery
test/                  --> test source files and libraries
  karma.conf.js        --> config file for running unit tests with Karma
  protractor.conf.js   --> config file for running e2e tests with Protractor
  e2e/
    scenarios.js       --> end-to-end specs
  unit/                --> unit level specs/tests
    controllersSpec.js --> specs for controllers
    directivesSpec.js  --> specs for directives
    servicesSpec.js    --> specs for services
```

## Contact

For more information on AngularJS please check out http://angularjs.org/

- `at-hungbcp/angular-app-template`: https://github.com/at-hungbcp/angular-app-template
- `DI`: http://docs.Angularjs.org/guide/di
- `directive`: http://docs.Angularjs.org/guide/directive
- `filterFilter`: http://docs.Angularjs.org/api/ng/filter/filter
- `git-home`: http://git-scm.com
- `git-github`: http://help.github.com/set-up-git-redirect
- `ngRepeat`: http://docs.Angularjs.org/api/ng/directive/ngRepeat
- `ngView`: http://docs.Angularjs.org/api/ngRoute/directive/ngView
- `node-download`: http://nodejs.org/download/
- `$resource`: http://docs.Angularjs.org/api/ngResource/service/$resource
- `$route`: http://docs.Angularjs.org/api/ngRoute/service/$route
- `protractor`: https://github.com/Angular/protractor
- `jasmine`: http://pivotal.github.com/jasmine/
- `karma`: http://karma-runner.github.io

