import * as t from '../types';
import * as controllers from './controllers';

export const main = (fastify: t.Instance, _opts: t.Options, done: () => void): void => {
  fastify.route({
    method: 'GET',
    url: '/current',
    async handler(_request, reply: t.StandardResponse<t.timeMs>) {
      reply.send({
        status: 'OK',
        message: 'Current shared time.',
        data: await controllers.getCurrentTime(),
      });
    },
  });

  // TODO: DRY with typeBox
  fastify.route({
    method: 'PUT',
    url: '/current',
    schema: {
      body: {
        ms: {
          type: 'number',
          minimum: 1,
        },
      },
    },
    async handler(request: t.RequestBody<{ ms: t.timeMs }>, reply: t.StandardResponse<t.timeMs>) {
      reply.send({
        status: 'OK',
        message: `Added to shared current time.`,
        data: await controllers.incrementCurrentTime(request.body.ms),
      });
    },
  });

  done();
};
