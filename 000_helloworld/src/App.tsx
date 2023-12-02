import {TableView} from "./components/TableView.tsx";

function App() {

  return (
    <div className="column-container aligncenter">
        <h1>Simple React App</h1>
        <div className="grow" >
            <TableView
                columns={[
                    { key: "movie", title: "Film"},
                    { key: "rating", title: "Note"}
                ]}
                data={[
                    { movie: "Star Wars 1, A new hope", rating: 3 },
                    { movie: "Star Wars 2, Empire Strikes Back", rating: 1 },
                    { movie: "Star Wars 3, Return of the Jedi", rating: 4 }
                ]}
            ></TableView>

        </div>
    </div>
  )
}

export default App
