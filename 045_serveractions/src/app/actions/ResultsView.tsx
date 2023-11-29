"use client"

import { SimpleQueryResult } from "@/components/PoolManager"
import { FieldDef } from "pg"
import { changeSalary, getEmployees } from "./dbactions"
import { useEffect, useState } from "react"


export type ResultsViewProps = {
    initialResult?: SimpleQueryResult
}

export function ResultsView(props: ResultsViewProps) {

    const { initialResult = { rows:[], fields:[] } } = props

    const [ result, setResult ] = useState(initialResult)

    const onClickRow = async (row: any) => {
        await changeSalary(row.id, 5)
        const t0 = new Date().getTime()
        const newResult = await getEmployees()
        const dt = new Date().getTime() - t0;
        console.log("client data fetch tool: " + dt + " ms")
    
        setResult(newResult)
    }

    useEffect(() => {
        const w = async() => {
            const newResult = await getEmployees()
            setResult(newResult)
        }
        w()
    }, [])

    return (
        <div className="column-container">
        <table width="400">
            <tbody>
            {result.rows.map((row, y) => (
                <tr key={y}>
                    {result.fields.map((field, x) => (
                        <td key={x}>{row[field.name]}</td>
                    ))}
                    <td>
                        <button onClick={() => onClickRow(row)}>Action</button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>

    )

}