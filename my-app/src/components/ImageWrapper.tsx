import { ReactNode } from "react"

export type ImageWrapperProps = {
    children: ReactNode
}

export function ImageWrapper(props: ImageWrapperProps) {
    return (
        <div style={{position: "relative", width: "450px", height: "300px" }}>{props.children}</div>
    )
}