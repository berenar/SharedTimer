# SharedTimer-server

Node + TypeScript server for SharedTimer.
Depends on a Postgres Database.

#### Create an environment file

Disclaimer: As this is for demo purposes, it's already created and not gitnignored, don't ever publish your passwords.

Create an `.env` file in the root of the server directory with the following:

```
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_NAME=sharedtimer
DATABASE_USER=bernat
DATABASE_PASSWORD=bernatpassword
SERVER_PORT=3001
```

## Scripts

### Install dependencies

```bash
npm install
```

### Start for development (hot reload)

```bash
npm run dev
```

### Run test suite

```bash
npm run test
```

### Build for production

```bash
npm run build
```

### Start

```bash
npm run start
```

### Lint code

```bash
npm run lint
```

### Format code

```bash
npm run format
```

### Quickly run it containerised

```bash
docker build . -t shared-timer-server-image && docker run -d --name shared-timer-server-container -p 3001:3000 shared-timer-server-image
```

## Structure

```
server                  Root directory
 ┣ src                  Where all code belongs
 ┃ ┣ modules            Modular parts
 ┃ ┃ ┣ adapters         Data source adapter, queries and postgres client
 ┃ ┃ ┣ controllers.ts   Logic behind Routes
 ┃ ┃ ┗ routes.ts        API URLs that map to controllers
 ┃ ┣ types              TypeScript types, interfaces, etc.
 ┃ ┗ server.ts          Entry point.
 ┣ tests                Where tests belong
 ┃ ┗ mocks              Fake/simulation objects for testing
 ┣ .env                 Environment variables for development
 ┣ .eslintrc.json       ESLint configuration
 ┣ .prettierrc.json     Prettier configuration
 ┣ server.md            Where you are right now
 ┗ tsconfig.json        TypeScript configuration
```
