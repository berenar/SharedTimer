/* eslint-disable no-console */
import fastify from 'fastify';

const serverOptions = { ignoreTrailingSlash: true };
const server = fastify(serverOptions);

const start = async () => {
  try {
    const port = process.env.PORT || 3000;
    console.log(`Listening on port ${port}`);
    await server.listen(port, '0.0.0.0');
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
