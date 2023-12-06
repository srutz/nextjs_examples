"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export function Navigation() {
    const pathname = usePathname()
    return (
        <nav>
            <Link href="/">Home</Link>
            <Link href="/imprint">Imprint</Link>
            <Link href="/contact">Kontakt</Link>
            <Link href="/about">About</Link>
        </nav>

    )
}