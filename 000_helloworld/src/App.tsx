import {TableView} from "./components/TableView.tsx";
import {useEffect, useState} from "react";
import {AggregationOp, AggregationProcessor} from "./aggregation.ts";
import {Spacer} from "./components/Spacer.tsx";

type RowType = {
    "Statistik_Code": string
    "Statistik_Label": string
    "Zeit_Code": string
    "Zeit_Label": string
    "Zeit": string
    "BIL002__Studierende__Anzahl": number
    "BIL002__Studierende__q": string
    "Bundesländer": string
    "Nationalität": string
    "Geschlecht": string
    "Studienfach": string
}

function App() {

    const [ rows, setRows ] = useState<RowType[]>([])
    const [ sum, setSum] = useState(0)

    useEffect(() => {
        (async () => {
            const response = await fetch("/21311-0006_de_flat.json")
            let data = await response.json() as RowType[]
            data = data.filter(d => d.Geschlecht === "Insgesamt" && d.Nationalität === "Insgesamt")
            const ap = new AggregationProcessor(
                [
                    { field: "Studienfach" },
                    { field: "Bundesländer" },
                ],
                [
                    { field: "BIL002__Studierende__Anzahl", op: AggregationOp.SUM },
                ],
            )
            let result = ap.run(data)
            result = result.filter(r => r["BIL002__Studierende__Anzahl"] > 0)
            result.sort((a, b) => {
                return (a["Studienfach"] as string).localeCompare(b["Studienfach"])
            })
            setRows(result)
            const newSum = result.reduce((v, r) => v + r["BIL002__Studierende__Anzahl"], 0)
            setSum(newSum)
        })()
    }, [])

    return (
        <div className="column-container aligncenter grow">
            <h1>Simple React App</h1>
            <div className="grow height1 scroll">
                <TableView
                    width="800px"
                    columns={[
                        {key: "Studienfach", title: "Studienfach"},
                        {key: "Bundesländer", title: "Bundesländer"},
                        {key: "BIL002__Studierende__Anzahl", title: "Anzahl", numeric: true},
                    ]}
                    data={rows}
                    ></TableView>

                {/*
                <TableView
                    columns={[
                        {key: "movie", title: "Film"},
                        {key: "rating", title: "Note"},
                    ]}
                    data={[
                        {movie: "Star Wars 1, A new hope", rating: 3},
                        {movie: "Star Wars 2, Empire Strikes Back", rating: 1},
                        {movie: "Star Wars 3, Return of the Jedi", rating: 4},
                    ]}
                ></TableView>
                */}

            </div>
            <Spacer height="18px"></Spacer>
            <div className="row-container">
                <Spacer grow></Spacer>{sum}
            </div>
            <Spacer height="32px"></Spacer>
        </div>
    )
}

export default App
