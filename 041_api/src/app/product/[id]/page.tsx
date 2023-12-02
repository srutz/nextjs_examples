"use server"

import { PageContainer } from "@/components/PageContainer"
import { Product } from "@/components/Product"
import Image from "next/image"
import { notFound } from "next/navigation"


/*
export async function generateStaticParams() {
    const staticParams : { id: number }[] = []
    const response = await fetch("https://dummyjson.com/products?limit=0")
    const products: { products: Product[] } = await response.json()
    products.products.forEach(p => staticParams.push({ id: p.id }))
    console.log("generateStaticParams")
    console.table(staticParams)
    return staticParams
}
*/



export default async function Home(props : { params: { id: number} }) {
    const url = "https://dummyjson.com/product/" + props.params.id
    console.log("fetch product from: " + url)
    const response = await fetch(url, {
        next: {
            revalidate: 60 // seconds to cache
        }
    })
    if (!response.ok) {
        notFound()
    }
    const product = await response.json() as Product
    return (
        <PageContainer>
            <div className="column-container gap">
                <h1>{product.title}</h1>
                <h3>{product.description}</h3>
                <Image src={product.thumbnail}
                    priority
                    width={720}
                    height={600}
                    style={{ alignSelf: "start", height: "400px", width: "auto" }}
                    alt={product.title}></Image>
            </div>
        </PageContainer>
    )
}

