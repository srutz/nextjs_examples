
export async function HelloHeading(props: { name: string }) {
    console.log("rendering helloheading")
    return (
        <h1>Hello {props.name}</h1>
    )
}
