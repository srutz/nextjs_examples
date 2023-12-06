import {ReactNode, MouseEvent, useState, CSSProperties} from "react";
import classes from "./Box.module.css"


export type MyState = {
    visible: boolean,
    currentTime: string,
}
export type BoxProps = {
    title: string,
    children: ReactNode
}
export const Box = (props: BoxProps) => {
    console.log("rendering box")
    const { title, children}  = props
    const onClick = () => {
    }
    const [ myState, setMyState ] = useState<MyState>({
        visible: true,
        currentTime: new Date().toTimeString(),
    })

    const styles: CSSProperties = {
        width: "600px",
        height: "200px",
    }
    return (
        <fieldset style={ styles }>
            <legend>{title} {myState.currentTime}</legend>
            <button className={classes.button} onClick={onClick}>Show/Hide</button>
            { myState.visible ? (
                <div>
                    {children}
                </div>
                ) : null
            }
        </fieldset>
    )
}
