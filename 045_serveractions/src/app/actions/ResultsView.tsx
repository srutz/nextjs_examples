"use client"

import { SimpleQueryResult } from "@/components/PoolManager"
import { changeSalary, getEmployees } from "./dbactions"
import { useEffect, useState, useTransition } from "react"


export type ResultsViewProps = {
    initialResult?: SimpleQueryResult
}

export function ResultsView(props: ResultsViewProps) {

    const { initialResult = { rows:[], fields:[] } } = props
    console.log("rendering resultsview ...")

    const [result, setResult] = useState(initialResult)
    const [loading, setLoading] = useState(false)  // or use useTransition

    const refreshData = async () => {
        //setLoading(true)
        const t0 = new Date().getTime()
        const newResult = await getEmployees()
        const dt = new Date().getTime() - t0;
        console.log("client data fetch tool: " + dt + " ms")
        setResult(newResult)
        //setLoading(false)
    }

    const onClickRow = async (row: any) => {
        console.log("browser log onClickRow")
        // argumente serialisiert
        // netzwerk aufruf
        await changeSalary(row.id, 5)
        // rückgabewert de-serialisiert
        refreshData()
    }

    useEffect(() => {
        refreshData()
    }, [])

    return (
        <div className="column-container">
            {loading ? (<div>loading data...</div>)
            : (
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
            )}
    </div>

    )

}