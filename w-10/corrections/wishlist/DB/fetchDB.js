import pg from 'pg';
import dotenv from 'dotenv';
dotenv.config();
const { Pool } = pg;
let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;

const pool = new Pool({
  host: PGHOST,
  database: PGDATABASE,
  username: PGUSER,
  password: PGPASSWORD,
  port: 5432,
  ssl: {
    rejectUnauthorized: false,
  },
});

async function getPgVersion() {
  try {
    const client = await pool.connect();
    const result = await client.query(`select version()`);
    console.log(result.rows[0]);
  } finally {
    // client.release();
  }
}

export { getPgVersion, pool };
