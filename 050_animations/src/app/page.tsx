

import { HelloHeading } from "@/components/HelloHeading"
import { PageContainer } from "@/components/PageContainer"



export default async function Home() {
    console.log("rendering home")
    return (
        <PageContainer>
            <div className="column-container">
                <HelloHeading name="World"></HelloHeading>
            </div>
        </PageContainer>
    )
}

