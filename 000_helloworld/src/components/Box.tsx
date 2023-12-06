import {ReactNode, MouseEvent} from "react";

export type BoxProps = {
    title: string,
    children: ReactNode
}
export const Box = (props: BoxProps) => {
    console.log("rendering box")
    const { title, children}  = props

    const onClick = (event: MouseEvent<HTMLButtonElement>) => {
        console.log("button was clicked " + event.nativeEvent.offsetX)
    }

    return (
        <fieldset>
            <legend>{title}</legend>
            <button onClick={onClick}>Show/Hide</button>
            <div>
                {children}
            </div>
        </fieldset>
    )
}
