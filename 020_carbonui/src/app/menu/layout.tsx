import { ReactNode } from "react"
import MenuContainer from "./MenuContainer"
import { MenuManager } from "@/data/menumanager"

export type MenuLayoutProps = {
    children?: ReactNode
}

export default function MenuLayout(props: MenuLayoutProps) {
    const entries = MenuManager.getInstance().entries;

    return (
        <div className="column-container">
            {props.children}
        </div>
    )
}