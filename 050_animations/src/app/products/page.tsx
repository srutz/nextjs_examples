import { PageContainer } from "@/components/PageContainer"
import Link from "next/link"
import {ProductView} from "@/components/ProductView";
import {Spacer} from "@/components/Spacer";
import { Product } from "@/components/ProductType";




export default async function Page() {
    console.log("rendering products")

    //await delay(5000)
    const response = await fetch("https://dummyjson.com/products")
    const json = (await response.json()) as { products: Product[] }

    return (
        <PageContainer>
            <div className="column-container centeritems">
                <h1 >Unsere Produkte</h1>
                <div className="row-container wrap gap center">
                    {json.products.map((product) => (
                        <Link key={product.id} href={`./products/${product.id}`}>
                            <ProductView product={product}></ProductView>
                        </Link>
                    ))}
                </div>
                <Spacer height={48}></Spacer>
            </div>
        </PageContainer>
    )
}
