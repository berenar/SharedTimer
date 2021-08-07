# SharedTimer-server

Node + TypeScript server for SharedTimer.
Depends on a Postgres Database.

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
