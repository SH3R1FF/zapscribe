// import 'dotenv/config';
// import { defineConfig } from 'drizzle-kit';

// import { db } from "./utils/db";

// export default defineConfig({
//   out: './drizzle',
// //   schema: './src/db/schema.ts',
//   schema: './utils/schema.tsx',
//   dialect: 'postgresql',
//   dbCredentials: {
//     url: process.env.NEXT_PUBLIC_DRIZZLE_DB_URL!,
//   },
// });

/** @type {import('drizzle-kit').Config} */

export default {
    schema : "./utils/schema.tsx",
    dialect: "postgresql",
    dbCredentials: {
        url: process.env.NEXT_PUBLIC_DRIZZLE_DB_URL!,
    },
    // out: "./drizzle",

}