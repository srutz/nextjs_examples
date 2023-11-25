"use client"

import { useCart } from "@/components/CartProvider"
import { PageContainer } from "@/components/PageContainer"
import classes from "./page.module.css"
import { CountPanel } from "@/components/CountPanel"
import { Spacer } from "@/components/Spacer"

export default function Page() {

    const cart = useCart()

    const formatMoney = (n: number) => {
        return `${n.toFixed(2)} €`.replace(",", "_").replace(".", ",").replace("_", ".")
    }

    return (
    <PageContainer>
        <div className="column-container">
            <h1>Ihre aktuelle Auswahl</h1>
            <div className="column-container alignstart">
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
                                <div key={index}>
                                    <CountPanel entry={item.menuEntry} count={item.count}></CountPanel>
                                </div>
                            </td>
                            <td className="textright">
                                <div key={index}>{formatMoney(item.count * item.menuEntry.price)}</div>
                            </td>
                        </tr>
                    ))}
                        <tr className={classes.sumrow}>
                            <td>
                            </td>
                            <td className="textright">
                                Summe:
                            </td>
                            <td className="textright">{formatMoney(cart.getTotal())}
                            </td>
                        </tr>
                    </tbody>
                </table>
                <Spacer height={16}></Spacer>
                <div className="row-container startcontent end"><button>Bestellung aufgeben</button></div>
            </div>
        </div>
    </PageContainer>
    )
}