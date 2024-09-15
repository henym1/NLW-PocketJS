import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import * as schema from './schema'

export const client = postgres('postgresql://neondb_owner:5oXeTEIvrJ3K@ep-small-bar-a55nze16.us-east-2.aws.neon.tech/neondb?sslmode=require')
export const db = drizzle(client, { schema, logger: true })