// Fastify
import { FastifyInstance, FastifyRequest } from 'fastify';
import { Server, IncomingMessage, ServerResponse, ServerOptions } from 'http';
export type Instance = FastifyInstance<Server, IncomingMessage, ServerResponse>;
export type Options = ServerOptions;

// Routes
export type StandardResponse<Generic> = {
  send: (arg0: { status: string; message: string; data?: Generic }) => void;
};
export type RequestBody<Generic> = FastifyRequest<{ Body: Generic }>;

// Time
export type timeMs = number;
