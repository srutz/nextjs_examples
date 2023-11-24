

export type PageContainerProps = {
    children: React.ReactNode
}

export function PageContainer(props: PageContainerProps) {

    return (
        <div className="padding">
            {props.children}
        </div>
    )
}