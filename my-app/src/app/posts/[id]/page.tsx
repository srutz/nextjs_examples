import { PostView } from "@/components/PostView"

export default async function Page(props: { params: any }) {
    const id = props.params.id
    console.log("post-id=" + id)

    const post = await (await fetch("https://dummyjson.com/posts/" + id)).json()

    return (
        <div>
            <h1>Postview</h1>
            <PostView post={post}></PostView>
        </div>
    )

}