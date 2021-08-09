# SharedTimer-app

React + TypeScript app for SharedTimer.

## Features

- Responsive
- Night theme

#### Create an environment file

Disclaimer: As this is for demo purposes, it's already created and not gitnignored, don't ever publish your passwords.

Create an `.env` file in the root of the app directory with the following:

```
SERVER_HOST=server
SERVER_PORT=3001
```

## Quickly run it containerised

```bash
docker build . -t shared-timer-app-image
docker run -d --name shared-timer-app-container -p 3000:3000 shared-timer-app-image
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
