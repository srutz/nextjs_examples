
import { PageContainer } from "@/components/PageContainer";
import Image from "next/image"
import Link from "next/link"

export default function Home() {
    return (
        <PageContainer>
            <div className="column-container">
                <h1>Willkommen im Restaurant Nice-Place</h1>
                <Link href="/menu">
                    <Image src="/restaurant.jpg" priority alt="Our restaurant" width={720} height={480}></Image>
                </Link>
            </div>
        </PageContainer>
    )
}
