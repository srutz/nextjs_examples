import { ReactNode } from "react";


export function ShowContainer({shown = true, children }: { shown: boolean, children: ReactNode }) {
    return shown ? children : null
}