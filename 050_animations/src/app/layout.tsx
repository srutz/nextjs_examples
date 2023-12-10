import type { Metadata } from "next";
import { Inter, Fira_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar"
import {ApplicationContextProvider} from "@/components/ApplicationInfoProvider";

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
})

const fira = Fira_Sans({
    subsets: ['latin'],
    weight: "200",
    display: 'swap',
})

export const metadata: Metadata = {
    title: "Meine Applikation",
    description: "Meine Applikation im Detail",
}

type RootLayoutProps = {
    children: React.ReactNode
}

export default function RootLayout(props: RootLayoutProps) {
    return (
        <html lang="de" className={inter.className}>
            <body >
                <ApplicationContextProvider>
                    <div className="column-container grow height1">
                        <Navbar></Navbar>
                        <div className="main-content">{props.children}</div>
                    </div>
                </ApplicationContextProvider>
            </body>
        </html>
    )
}
