import { MenuEntry } from "@/data/menuentry"
import Image from "next/image"

import classes from "./MenuEntry.module.css"

export type MenuEntryProps = {
    entry: MenuEntry
    fadeInDelay: number
}

export default function MenuEntryCard(props: MenuEntryProps) {
    const { entry } = props

    function formatPrice(n: Number) {
        return n.toFixed(2)
    }

   
    return (
        <div className={classes.menuentry} style={{ width: "240px" }}>
            <div className={classes["menuentry-title"]}>{entry.label}</div>
            <div className={classes["menuentry-image"]}>
                <Image src={`/dishes/${entry.image}`}
                    width={400}
                    height={600}
                    style={{ alignSelf: "start", height: "200px", width: "auto" }}
                    alt={entry.label}></Image>
            </div>
            <div className={classes["menuentry-description"]}>{entry.description}</div>
            <div className={classes["menuentry-price"]}>Preis: {formatPrice(entry.price)} €</div>
        </div>
    )
}