"use server"

import { PageContainer } from "@/components/PageContainer"
import { PoolManager, SimpleQueryResult } from '@/components/PoolManager'
import { getEmployees } from "./actions/dbactions"


/*
export async function GetDatabaseResults() {
    const pool = PoolManager.getPool()
    const client = await pool.connect()
    try {
        const res = await pool.query('select * from employee order by id limit 5', [])
        console.dir(res.rows)
        const result : SimpleQueryResult = {
            rows: res.rows,
            fields: res.fields.map(f => { return { name: f.name } } )
        }
        return result
    } finally {
        client.release()
    }
}
*/


export default async function Home() {
    const t0 = new Date().getTime()
    //const result = await GetDatabaseResults()
    const result = await getEmployees()
    const dt = new Date().getTime() - t0;
    return (
        <PageContainer>
            <div className="column-container">
                <h1>Server provided data</h1>
                <div className="column-container">
                    <table width="400">
                        <tbody>
                            {result.rows.map((row, y) => (
                                <tr key={y}>
                                    {result.fields.map((field, x) => (
                                        <td key={x}>{row[field.name]}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </PageContainer>
    )
}

