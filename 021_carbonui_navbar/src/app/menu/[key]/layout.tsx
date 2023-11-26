
import { ReactNode } from "react"

export type MenuLayoutProps = {
    children?: ReactNode
}

export default function MenuLayout(props: MenuLayoutProps) {
    return (
        <div className="column-container">
            {props.children}
        </div>
    )
}