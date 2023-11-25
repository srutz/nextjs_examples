
"use client";

import { PageContainer } from "@/components/PageContainer";
import { MenuManager } from "@/data/menumanager"
import { useParams } from "next/navigation"
import MenuEntryCard from "../MenuEntryCard"
import Link from "next/link"

export default function Page() {
    const { key } = useParams()

    const entry = MenuManager.getInstance().entries.find(e => e.key == key)

    return (
        entry && (
        <PageContainer>
            <div className="column-container gap aligncenter">                
                <MenuEntryCard large entry={entry} fadeInDelay={50}></MenuEntryCard>
                <Link href="/menu">Zurück</Link>
            </div>
        </PageContainer>
        )
    )
}
