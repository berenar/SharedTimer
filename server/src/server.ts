/* eslint-disable no-console */
import * as dotenv from 'dotenv';
dotenv.config();
import fastify from 'fastify';
import fastifyBlipp from 'fastify-blipp';
import fastifyCors from 'fastify-cors';
import * as routes from './modules/routes';
import * as t from './types';

const serverOptions = { ignoreTrailingSlash: true };
const server: t.Instance = fastify(serverOptions);
const service = '/timer';
const version = '/api/v1/main';
const baseRoute = `${service}${version}`;

// Plugins
server.register(fastifyCors, {}); //TODO configure origins
server.register(fastifyBlipp);

// Load routes
server.register(routes.main, { prefix: `${baseRoute}/` });

const start = async () => {
  try {
    const port = process.env.SERVER_PORT || 3000;
    console.log(`Listening on port ${port}`);
    await server.listen(port, '0.0.0.0');
    server.blipp(); //Print routes
  } catch (err) {
    console.log(err);
    server.log.error(err);
    process.exit(1);
  }
};

process.on('uncaughtException', (error) => {
  console.error(error);
});
process.on('unhandledRejection', (error) => {
  console.error(error);
});

start();
