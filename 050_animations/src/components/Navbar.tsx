"use client"

import Link from "next/link";
import { Spacer } from "./Spacer"
import { BsRecycle } from "react-icons/bs"
import {useContext} from "react";
import {useApplicationContext} from "@/components/ApplicationInfoProvider";


export function Navbar() {
    const applicationContext = useApplicationContext()
    console.log("rendering navbar")
    return (
        <nav className="row-container gap centeritems padding">
            <div className="app-title">Meine App</div>
            <BsRecycle></BsRecycle>
            <Spacer width={16}></Spacer>
            <Link href="/">Main Page</Link>
            <Link href="/products">Produkte</Link>
            <Spacer grow></Spacer>
            <div>
                {applicationContext.state.exchangeRate}
                /
                {applicationContext.state.currency}
            </div>

        </nav>
    )
}
