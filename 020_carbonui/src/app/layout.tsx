import type { Metadata } from "next";
import { Inter, Fira_Sans } from "next/font/google";
import "./globals.scss";
import Link from "next/link";
import { CartProvider } from "@/components/CartProvider";
import CartIcon from "@/components/CartIcon"

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
    title: "Restaurant Nice-Place",
    description: "Our restaurant app",
}

type RootLayoutProps = {
    children: React.ReactNode
}

export default function RootLayout(props: RootLayoutProps) {
    return (
        <html lang="de" className={fira.className}>
            <body >          
                <CartProvider>
                    <div className="column-container grow height1">
                        <nav className="row-container gap padding centeritems white">
                            <Link href="/">Hauptseite</Link>
                            <Link href="/menu">Menü</Link>
                            <Link href="/imprint">Impressum</Link>
                            <div className="grow"></div>
                            <CartIcon></CartIcon>
                        </nav>
                        <div>{props.children}</div>
                    </div>
                </CartProvider>      
            </body>
        </html>
    )
}
