import * as t from '../types';
import * as controllers from './controllers';

export const main = (
  fastify: t.fastify.Instance,
  _opts: t.fastify.Options,
  done: () => void,
): void => {
  fastify.route({
    method: 'GET',
    url: '/current',
    async handler(_request, reply: { send: (arg0: t.something.standardResponse) => void }) {
      reply.send({
        status: 'OK',
        message: 'Current shared time',
        data: await controllers.getCurrentTime(),
      });
    },
  });

  done();
};
