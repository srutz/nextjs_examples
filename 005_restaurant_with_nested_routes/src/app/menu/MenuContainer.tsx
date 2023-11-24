"use client";

import { MenuEntry } from "@/data/menuentry"
import { PropsWithChildren, ReactNode } from "react"
import MenuEntryCard from "./MenuEntryCard"
import Link from "next/link"



export type MenuContainerProps = PropsWithChildren<{
    entries: MenuEntry[]
}>

export type MenuContainerProps2 = {
    children?: ReactNode
    entries: MenuEntry[]
}


export default function MenuContainer(props: MenuContainerProps2) {

    return (
        <div className="row-container wrap gap center">
            {props.entries.map((entry, index) => (
                <Link key={entry.key} href={`/menu/${entry.key}`}>
                    <MenuEntryCard
                        fadeInDelay={50 + index * 100}
                        entry={entry}
                    ></MenuEntryCard>
                </Link>
                    ))}
        </div>
    )

}