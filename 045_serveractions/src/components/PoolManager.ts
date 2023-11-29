import { FieldDef, Pool } from 'pg'


export type FieldSpec = {
    name: string
}


export type SimpleQueryResult = {
    rows: any[]
    fields: FieldSpec[]
}


export class PoolManager {

    static instance = new PoolManager()

    static getPool() {
        return this.instance.pool
    }

    /* the global pool */
    pool

    constructor() {
        console.log("make pool")
        this.pool = new Pool({
            user: 'sr',
            host: 'localhost',
            database: 'next',
            })
    }
}