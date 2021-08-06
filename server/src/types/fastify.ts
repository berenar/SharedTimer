import { FastifyInstance } from 'fastify';
import { Server, IncomingMessage, ServerResponse, ServerOptions } from 'http';

export type Instance = FastifyInstance<Server, IncomingMessage, ServerResponse>;

export type Options = ServerOptions;
