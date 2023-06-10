import { Kysely, SqliteDialect } from "kysely";
import Database from 'better-sqlite3'
import { DB } from './types'

const db = new Kysely<DB>({
  dialect: new SqliteDialect({
    database: new Database('./dev.db'),
  })
})

export function getUsers() {
  return db.selectFrom('users').selectAll().execute()
}

export function setUser() {
  return db.insertInto('users').values({ name: 'Mohamed' }).execute()
}
