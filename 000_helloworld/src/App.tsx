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
                <Box extraNice title="Schöne Grüße" >
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
                </Box>
            </div>
            <Spacer height="10"></Spacer>
        </div>
    )
}

export default App
