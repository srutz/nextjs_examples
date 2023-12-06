import {ReactNode, MouseEvent, useState} from "react";

export type BoxProps = {
    title: string,
    children: ReactNode
}
export const Box = (props: BoxProps) => {
    console.log("rendering box")
    const { title, children}  = props

    const onClick = (event: MouseEvent<HTMLButtonElement>) => {
        console.log("button was clicked " + event.nativeEvent.offsetX)
        setVisible(!visible)
    }

    const [ visible, setVisible ] = useState<boolean>()

    return (
        <fieldset>
            <legend>{title}</legend>
            <button onClick={onClick}>Show/Hide</button>
            { visible ? (
                <div>
                    {children}
                </div>
                ) : null
            }
        </fieldset>
    )
}
