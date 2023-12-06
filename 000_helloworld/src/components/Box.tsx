import {ReactNode} from "react";

export type BoxProps = {
    title: string,
    extraNice?: boolean
    children: ReactNode
}
export function Box(props: BoxProps) {
    const { title, extraNice, children}  = props
    return (
        <fieldset>
            <legend>{title}</legend>
            { extraNice ? (<div>Du siehst heute morgen gut aus</div>) : null}
            <div>
                {children}
            </div>
        </fieldset>
    )
}
