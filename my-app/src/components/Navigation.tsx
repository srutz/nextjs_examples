"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export function Navigation() {
    const path = usePathname()
    return (
        <nav>
            <Link href="/" className={path == "/" ? "active" : ""}>Home</Link>
            <Link href="/imprint" className={path == "/imprint" ? "active" : ""}>Imprint</Link>
            <Link href="/contact" className={path == "/contact" ? "active" : ""}>Kontakt</Link>
            <Link href="/about" className={path == "/about" ? "active" : ""}>About</Link>
        </nav>
    )
}