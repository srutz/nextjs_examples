
"use client";

import { PageContainer } from "@/components/PageContainer";
import { MenuManager } from "@/data/menumanager"
import { useParams } from "next/navigation"
import MenuEntryCard from "../MenuEntryCard"

export default function Page() {
    const { key } = useParams()

    const entry = MenuManager.getInstance().entries.find(e => e.key == key)

    return (
        entry && (
        <PageContainer>
            <MenuEntryCard large entry={entry} fadeInDelay={50}></MenuEntryCard>
        </PageContainer>
        )
    )
}
