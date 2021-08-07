# SharedTimer

SharedTimer is a shared timer that uses TypeScript, React, Node, Fastify, Postgres and more awesome technologies to solve the Timer Code Challenge.

Disclaimer: This project has three parts, the FrontEnd (aka App), the BackEnd (aka Server) and the Database (aka Persistence). Although the main README contains the important stuff, details will belong in the three _child_ READMEs:

- [Database ](/database/README.md)
- [Server](/server/README.md)
- [App](/app/README.md)

## Quick local setup

### Database

One table with one (and only one) row in a containerized Postgres.

#### Create and start the database in a docker container

```bash
cd database
chmod +x init.sh
bash init.sh
```

### Server

A minimal node server that coordinates all users, so they can share a common counter.

#### Build and start

```bash
npm run install
npm run build
npm run start
```

### App

Minimal app to run and stop a timer, see the common counter and change the theme.

```bash
npm run install
npm run start
```

## Future improvements

- Using web sockets may be a better approach to this.
- Using an in-memory database to increase performance.

## Code Challenge Feedback

### Limited requirements (may be on purpose)

As stated in [Future improvements](#future-improvements), the requirements and instructions were headed towards a solution with HTTP requests, although it's clearly not the best approach. If the given time to solve this challenge wouldn't have been on a weekend, I would have asked.

### Reduce user confusion

What if a user 1 has the app opened with the timer paused, and another user 2 updates the shared time? When the user 1 starts the local timer and updates the shared one, it may get confused, because he/she has started the timer with an outdated value.

A quick and easy solution would be to update the shared timer also when starting the local timer. I haven't done it because as the requirements says:

> The big timer should be updated when the app loads on the screen, and when the user stops his timer.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
