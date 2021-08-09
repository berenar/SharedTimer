# SharedTimer

## See it online on AWS!

[Here](http://ec2-3-67-89-65.eu-central-1.compute.amazonaws.com:3000)

## Description

SharedTimer is a shared timer that uses TypeScript, React, Node, Fastify, Postgres and more awesome technologies to solve the Timer Code Challenge.

![](./sharedTimerDemo.gif)

## Front + Back + DataBase

This project has three parts, the React web app, the Node Server and the Postgres Database. Although the main README contains the important stuff, details will belong in the three _child_ READMEs:

- [App](/app/README.md)
- [Server](/server/README.md)
- [Database](/database/README.md)

## Run it all!

Run this one-liner on the root of the project

```bash
docker-compose up --build
```

And visit [http://localhost:3000](http://localhost:3000)

### Database

One table with one (and only one) row in a containerized Postgres.

### Server

A minimal node server that coordinates all users, so they can share a common counter.

### App

Minimal app to run and stop a timer, see the common counter and change the theme.

## Future improvements

- Using web sockets may be a better approach to this.
- Using an in-memory database to increase performance.

## Code Challenge Feedback

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
