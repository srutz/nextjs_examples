
/*
 * Beispiel für eine API direkt mittels next.js
 *
 * Zugriff auf PostgreSQL mittels Connection Pool
 * 
 *  
 */

import { PoolManager, SimpleQueryResult } from "@/components/PoolManager"

/* test data:

create table employee (id bigserial, name text, salary numeric(31,10), constraint employee_pk primary key (id));
with salary_list AS (select '{1000, 2000, 5000}'::INT[] salary)
 insert into public.employee(id, name, salary) select n, 'Employee ' || n as name, salary[1 + mod(n, array_length(salary, 1))] 
   from salary_list, generate_series(1, 1000000) as n;


   benchmark:

   ab -c 10 -n 10000 http://localhost:3000/api/employee?id=100
*/



type Maybe<T> = T | null | undefined

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get("id")

    if (!id) {
        return new Response(null, {
            status: 404,
        })
    }

    const pool = PoolManager.getPool()
    const client = await pool.connect()
    let resultrow: Maybe<any> = undefined
    try {
        const res = await pool.query('select id, name, salary from employee where id = $1', [ id ])
        if (res.rowCount == 1) {
            resultrow = res.rows[0]
        }
    } finally {
        client.release()
    }
    if (!resultrow) {
        return new Response(null, {
            status: 404,
        })
    }
    return Response.json(resultrow)
}