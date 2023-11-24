import { MenuEntry } from "@/data/menuentry"
import Image from "next/image"

import classes from "./MenuEntry.module.css"
import { useEffect, useRef } from "react"
import { useCart } from "@/components/CartProvider"

export type MenuEntryProps = {
    entry: MenuEntry
    fadeInDelay: number
    large?: boolean
}

export default function MenuEntryCard(props: MenuEntryProps) {
    const { entry, large = false } = props

    function formatPrice(n: Number) {
        return n.toFixed(2)
    }

    const self = useRef<HTMLDivElement>(null)
    useEffect(() => {
        setTimeout(() => {
            const element = self.current
            if (element) {
                element.style.opacity = "1"
                element.style.transform = "none"
            }
        }, props.fadeInDelay)
    }, [ props.fadeInDelay ])

    const cart = useCart()
    console.dir(cart)
    const onClickAdd = (() => {
        console.log("click")
    })


    return (
        <div ref={self} className={classes.menuentry} style={{ width: large ? "480px" : "240px" }}>
            <div className={classes["menuentry-title"]}>{entry.label}</div>
            <div className={classes["menuentry-image"]}>
                <Image src={`/dishes/${entry.image}`}
                    width={400}
                    height={600}
                    style={{ alignSelf: "start", height: large ? "400px" : "200px", width: "auto" }}
                    alt={entry.label}></Image>
            </div>
            <div className={classes["menuentry-description"]}>{entry.description}</div>
            <div className={classes["menuentry-price"]}>Preis: {formatPrice(entry.price)} €
                <button onClick={onClickAdd}>Add to cart</button></div>
        </div>
    )
}