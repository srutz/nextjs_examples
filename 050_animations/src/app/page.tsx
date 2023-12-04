

import { HelloHeading } from "@/components/HelloHeading"
import { PageContainer } from "@/components/PageContainer"



export default async function Home() {
    console.log("rendering home")
    return (
        <PageContainer>
            <div className="column-container">
                <HelloHeading name="Animations Example"></HelloHeading>
                <p>This example shows the products from dummyjson.org 
                    animated with framermotion
                </p>
            </div>
        </PageContainer>
    )
}

