"use client";

import { MenuEntry } from "@/data/menuentry"
import { PropsWithChildren, ReactNode } from "react"
import MenuEntryCard from "./MenuEntryCard"



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
                        <MenuEntryCard
                            key={entry.key}
                            fadeInDelay={50 + index * 100}
                            entry={entry}
                        ></MenuEntryCard>
                    ))}
        </div>
    )

}