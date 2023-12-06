
"use client"

export type PageContainerProps = {
    children: React.ReactNode
}

export function PageContainer(props: PageContainerProps) {

    const onClick = () => {
        console.log("clicked it")
    }

    return (
        <div className="column-container padding">
            {props.children}
        </div>
    )
}