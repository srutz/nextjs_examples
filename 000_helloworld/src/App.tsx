import {TableView} from "./components/TableView.tsx";
import {useEffect, useState} from "react";
import {AggregationOp, AggregationProcessor} from "./aggregation.ts";
import {Spacer} from "./components/Spacer.tsx";
import {Box} from "./components/Box.tsx";

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
    return (
        <div className="column-container aligncenter grow">
            <h1>Simple React App</h1>
            <div className="grow height1 scroll">
                <Box title="Schöne Grüße" ></Box>
            </div>
            <Spacer height="10"></Spacer>
        </div>
    )
}

export default App
