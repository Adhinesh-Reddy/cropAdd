# Crop Darpan Web Application

Crop Darpan - A Crop Diagnostic Application

## How to Run?

#### Step 1 - Clone the Repo
    git clone https://github.com/cropdarpan/cropdarpan-web-ui

#### Step 2 - Install Packages
    npm install

#### Step 3 - Run the development server
    npm run build:dev

## Available Scripts

In the project directory, you can run:

### `npm run build:dev`

Build the app in the development mode. Files are not minified in development mode.

### `npm run build:prod`

Build the app in the production mode. Javascript, CSS files are minified and make application ready production use.

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

### `npm run dev`

Run the app in the development mode.\
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run prod`

Run the app in the development mode.\
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

### `npm run lint`

Statically analyzes code to quickly find problems. It provides warnings and errors that needs immidiate attention. Lint is part of the build script as well to fail the build in case of errors.

### `npm run lint-fix`

Automatically fixes most of the problems.

### `npm run pretty-quick`

Pretty quick analyze the changed files and format the files using pretty configuration. It is also part of pre-commit hook to format the code before commiting it to Git repository.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### Internationalization and localization

Application support i18n. Each text application uses should have FormattedMessage with default text. It uses user locale and renders the content in user specific language. Check LocaleHelper & I18NHelper classes for more information.

Application shouldn't depend on server side i18n. Only Dynamic values like Crop name, decease values should be handled from service side.

Example:

```react
<h1 className='header'>
    <FormattedMessage id='Home.Title' defaultMessage='Welcome to Crop Darpan Application..' />
</h1>
```
