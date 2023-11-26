
export type SpacerProps = {
    width?: number
    height?: number
    grow?: boolean
}

export function Spacer(props: SpacerProps) {
    return (
        <div style={{
            width: props.width ?? "auto",
            height: props.height ?? "auto",
            flexGrow: props.grow ? "1" : "0", 
        }}></div>
    )
}