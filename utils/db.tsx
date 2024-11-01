// import { neon } from '@neondatabase/serverless';
// import { drizzle } from 'drizzle-orm/neon-serverless';
// import * as schema from './schema';

// console.log( process.env.NEXT_PUBLIC_DRIZZLE_DB_URL!);
// const sql = neon(process.env.NEXT_PUBLIC_DRIZZLE_DB_URL!);
// // const sql = neon('postgresql://zapscribe_owner:GJDPeMj2sqH4@ep-rough-meadow-a1cwc3z7.ap-southeast-1.aws.neon.tech/zapscribe?sslmode=require');
// export const db = drizzle(sql, { schema });

import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema';
const sql = neon(process.env.NEXT_PUBLIC_DRIZZLE_DB_URL!);
// export const db = drizzle({ client: sql });
export const db = drizzle(sql,{schema});
// const result = await db.execute('select 1');