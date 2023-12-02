"use server"

import { PoolManager, SimpleQueryResult } from '@/components/PoolManager'


async function waiter(ms: number) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true)
        }, ms)
    })
}


export async function changeSalary(employeeId: number, increase: number) {        
    console.log("server log")

    const pool = PoolManager.getPool()

    const client = await pool.connect()
    try {
        console.log(employeeId, increase)
        const res = await pool.query("update employee set salary = salary + $1 where id = $2", [ increase, employeeId ])
        console.log("performed update: " + res.rowCount)
    } finally {
        client.release()
    }
}

export async function getEmployees() {
    const pool = PoolManager.getPool()
    const client = await pool.connect()
    //await waiter(5000)

    try {
        const res = await pool.query('select id, name, salary from employee order by id limit 5', [])
        //console.dir(res.rows)
        const result : SimpleQueryResult = {
            rows: res.rows,
            fields: res.fields.map(f => { return { name: f.name } } )
        }
        return result
    } finally {
        client.release()
    }
}