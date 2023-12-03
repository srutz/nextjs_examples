
export function Spacer(props: { grow?: boolean, width?: string, height?: string }) {
    return (
        <div style={{
            width: props.width ? props.width : "auto",
            height: props.height ? props.height : "auto",
            flexGrow: props.grow ? "1" : "0",
        }}></div>

    )
}