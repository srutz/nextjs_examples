
import { FocusEvent, FormEvent, useState } from "react"
import classes from "./CountPanel.module.css"
import { useCart } from "./CartProvider"
import { MenuEntry } from "@/data/menuentry"

export type CountPanelProps = {
    entry: MenuEntry
    count: number
}

export function CountPanel(props: CountPanelProps) {

    const [ value, setValue ] = useState(props.count)

    const cart = useCart()

    function onDelta(delta: number) {
        setValue(Math.max(0, value + delta))
        cart.addToCart(props.entry, delta) // update cart
    }

    const onValueInput = (e: FormEvent<HTMLDivElement>) => {
        let nv = e.currentTarget.innerText.replace(/[^\d]/g, '')
        if (!nv) {
            nv = "0"
        }
        e.currentTarget.innerText = nv
        const range = document.createRange()
        range.selectNodeContents(e.currentTarget)
        range.collapse(false)
        const sel = window.getSelection()
        if (sel) {
            sel.removeAllRanges()
            sel.addRange(range)
        }

        const target = e.currentTarget
        setTimeout(() => {
            const v = Number.parseInt(target.innerText)
            setValue(v)
            cart.addToCart(props.entry, v, true) // update cart
        }, 1)
    }

    const onValueBlur = (e: FocusEvent<HTMLDivElement>) => {
        setValue(Number.parseInt(e.currentTarget.innerText))
    }

    return (
        <div className={classes.countpanel}>
            <div className={[classes.section, classes["section-button"]].join(" ")} onClick={() => onDelta(-1)}>-</div>
            <div className={[classes.section, classes["section-edit"]].join(" ")} contentEditable
                  onInput={onValueInput}
                  onBlur={onValueBlur} dangerouslySetInnerHTML={{ __html: value.toString()}}></div>
            <div className={[classes.section, classes["section-button"]].join(" ")} onClick={() => onDelta(1)}>+</div>
        </div>
    )
}