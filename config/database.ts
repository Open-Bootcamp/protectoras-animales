/**
 * Config source: https://git.io/JesV9
 *
 * Feel free to let us know via PR, if you find something broken in this config
 * file.
 */

import Env from '@ioc:Adonis/Core/Env'
import { DatabaseConfig } from '@ioc:Adonis/Lucid/Database'
const Url = require('url-parse')
const DATABASE_URL = new Url(Env.get('DATABASE_URL'))

const databaseConfig: DatabaseConfig = {
  /*
    |--------------------------------------------------------------------------
    | Connection
    |--------------------------------------------------------------------------
    |
    | The primary connection for making database queries across the application
    | You can use any key from the `connections` object defined in this same
    | file.
    |
    */
  connection: Env.get('DB_CONNECTION'),

  connections: {
    /*
      |--------------------------------------------------------------------------
      | PostgreSQL config
      |--------------------------------------------------------------------------
      |
      | Configuration for PostgreSQL database. Make sure to install the driver
      | from npm when using this connection
      |
      | npm i pg
      |
      */
    pg: {
      client: 'pg',
      connection: {
        host: Env.get('PG_HOST'),
        port: Env.get('PG_PORT'),
        user: Env.get('PG_USER'),
        password: Env.get('PG_PASSWORD', ''),
        database: Env.get('PG_DB_NAME'),
      },
      migrations: {
        naturalSort: true,
      },
      healthCheck: false,
      debug: false,
    },
    pg_url: {
      client: 'pg',
      connection: {
        host: Env.get('PG_HOST', DATABASE_URL.hostname),
        port: Env.get('PG_PORT', DATABASE_URL.port),
        user: Env.get('PG_USER', DATABASE_URL.username),
        password: Env.get('PG_PASSWORD', DATABASE_URL.password),
        database: Env.get('PG_DB_NAME', DATABASE_URL.pathname.substr(1)),
        ssl: {
          rejectUnauthorized: false,
        },
      },
      migrations: {
        naturalSort: true,
        disableRollbacksInProduction: true,
      },
      healthCheck: false,
      debug: false,
    },
  },
}

export default databaseConfig
