import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";



export const metadata: Metadata = {
    title: "Restaurant Nice-Place",
    description: "Our restaurant app",
};

type RootLayoutProps = {
    children: React.ReactNode;
};

export default function RootLayout(props: RootLayoutProps) {
    return (
        <html lang="de">
            <body >
                <div className="column-container grow height1">
                    <nav className="row-container gap padding white">
                        <Link href="/">Hauptseite</Link>
                        <Link href="/menu">Menü</Link>
                        <Link href="/imprint">Impressum</Link>
                    </nav>
                    <div>{props.children}</div>
                </div>
            </body>
        </html>
    );
}
