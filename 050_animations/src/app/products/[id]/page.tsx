import { PageContainer } from "@/components/PageContainer"
import { ProductDetails } from "@/components/ProductDetails"
import { Product } from "@/components/ProductType"


export default async function Page(props: { params: any }) {
    const id = props.params.id as string

    const response = await fetch("https://dummyjson.com/products/" + id)
    const product = (await response.json()) as Product

    return (
        <PageContainer>
            <div className="column-container centeritems">
                <ProductDetails product={product}></ProductDetails>
            </div>
        </PageContainer>
    )
}