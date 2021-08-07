import * as t from '../types';
import * as controllers from './controllers';

export const main = (fastify: t.Instance, _opts: t.Options, done: () => void): void => {
  fastify.route({
    method: 'GET',
    url: '/current',
    async handler(_request, reply: { send: (arg0: t.standardResponse) => void }) {
      reply.send({
        status: 'OK',
        message: 'Current shared time',
        data: await controllers.getCurrentTime(),
      });
    },
  });

  done();
};
