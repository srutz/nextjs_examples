"use server"

import { PageContainer } from "@/components/PageContainer"
import { Product } from "@/components/Product"
import { ProductView } from "@/components/ProductView"
import { WebVitals } from "@/components/WebVitals"
import Link from "next/link"


/*

check timing:

time curl -H 'Cache-Control: no-cache, no-store' -D - -o /dev/null -s http://localhost:3000/ ; echo




 */


export async function generateStaticParams() {
    const staticParams = [ { } ]
    console.log("generateStaticParams")
    console.table(staticParams)
    return staticParams
}



export type ProductsResponse = {
    products: Product[]
}


export default async function Home() {
    const t0 = new Date().getTime()
    let result: ProductsResponse | undefined = undefined

    const N_ITERATIONS = 1
    for (let i = 0; i < N_ITERATIONS; i++) {
        const response = await fetch("https://dummyjson.com/products?limit=0",{
            next: {
                revalidate: 10
            }
        })
        result = await response.json() as ProductsResponse
    }
    const dt = new Date().getTime() - t0;
    if (!result) {
        return null
    }
    console.log("loaded data: #" + result.products.length + " items, took " + dt + " ms")

    return (
        <PageContainer>
            <div className="column-container">
                <h1>Unsere Produktliste</h1>
                <div className="row-container wrap gap">
                    {result.products.map((p, index) => (
                        <Link key={p.id} href={"/product/" + p.id}>
                            <ProductView product={p}></ProductView>
                        </Link>
                    ))}

                </div>
            </div>
        </PageContainer>
    )
}

