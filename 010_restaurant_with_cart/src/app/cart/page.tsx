"use client"

import { useCart } from "@/components/CartProvider"
import { PageContainer } from "@/components/PageContainer"
import classes from "./page.module.css"

export default function Page() {

    const cart = useCart()

    const formatMoney = (n: number) => {
        return `${n.toFixed(2)} €`
    }

    return (
        <PageContainer>
            <div className="column-container">
                <h1>Ihre aktuelle Auswahl</h1>
                <div className="column-container">
                    <table className={classes.carttable}>

                        <thead>
                            <tr>
                                <th>Bestellung</th>
                                <th>Anzahl</th>
                                <th>Preis</th>
                            </tr>
                        </thead>
                        <tbody>
                    {cart.content.items.map((item, index) => (
                        <tr key={index}>
                            <td>
                                <div key={index}>{item.menuEntry.label}</div>
                            </td>
                            <td className="textright">
                                <div key={index}>{item.count}</div>
                            </td>
                            <td className="textright">
                                <div key={index}>{formatMoney(item.count * item.menuEntry.price)}</div>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                    </table>
                </div>

            </div>
        </PageContainer>
    )
}