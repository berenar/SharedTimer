// Fastify
import { FastifyInstance } from 'fastify';
import { Server, IncomingMessage, ServerResponse, ServerOptions } from 'http';
export type Instance = FastifyInstance<Server, IncomingMessage, ServerResponse>;
export type Options = ServerOptions;

// Postgres
export type Time = `${number}${number}:${number}${number}:${number}${number}`;

// Routes
export type standardResponse = {
  status: string;
  message: string;
  data: Time;
};
