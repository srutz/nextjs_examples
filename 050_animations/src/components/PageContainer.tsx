import { ReactNode, PropsWithChildren } from "react"


export type PageContainerProps = {
    children: ReactNode
}


export function PageContainer(props: PageContainerProps) {

    return (
        <div className="column-container padding">
            {props.children}
        </div>
    )
}