import { ReactNode } from "react"

export function ShowContainer(props: { shown?: boolean, children: ReactNode }) {
    const { shown = true } = props
    return shown ? <>{props.children}</> : null
}