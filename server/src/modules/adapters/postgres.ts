import { Pool, QueryResult } from 'pg';

// Database client implementation for postgres
export class Postgres {
  pool: Pool;

  constructor() {
    this.pool = new Pool({
      user: process.env.DATABASE_USER,
      host: process.env.DATABASE_HOST,
      database: process.env.DATABASE_NAME,
      password: process.env.DATABASE_PASSWORD,
      port: parseInt(process.env.DATABASE_PORT, 10),
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async query(text: string, values?: string[]): Promise<QueryResult<any>> {
    const client = await this.pool.connect();
    try {
      const result = await client.query(text, values);
      return result;
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(`Error querying: ${text} with values ${values.join(',')}`);
      throw err;
    } finally {
      client.release();
    }
  }
}
