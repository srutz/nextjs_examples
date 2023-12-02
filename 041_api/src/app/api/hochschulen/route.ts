
/*
 * Beispiel für eine API direkt mittels next.js
 *
 * curl -s http://localhost:3000/api/hochschulen?search=dortmund   | python3 -m json.tool
 * curl -v http://localhost:3000/api/hochschulen
 * 
 */


import rawdata from "./hs_liste"

type Hochschule = {
    name: string;
    type: string;
    kurzname: string;
    ort: string;
}

async function loadHochschulListe() {
    const rows = rawdata.split("\n")
    return rows.map(r => {
        const fields = r.split("\t")
        return { 
            kurzname: fields[1], 
            name: fields[2], 
            type: fields[3],
            ort: fields[12] } as Hochschule
    })
}

export async function GET(request: Request) {
    console.log("access to: " + request.url)
    const { searchParams } = new URL(request.url)
    const search = searchParams.get("search")?.toLowerCase() || ""

    if (!search) {
        return new Response(null, {
            status: 404,
            statusText: "Not found, no search string provided"            
        })
    }
    const hochschulen = await loadHochschulListe()
    const filtered = hochschulen
        .filter(h => 
            h.name.toLowerCase().indexOf(search) != -1
            || h.ort.toLowerCase().indexOf(search) != -1
            || h.kurzname.toLowerCase().indexOf(search) != -1
            )
        .slice(0, 20)
    return Response.json(filtered)
}