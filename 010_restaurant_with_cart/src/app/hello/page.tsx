import {PageContainer} from "@/components/PageContainer";
import { Posts } from "./Posts"

type Post = {
    id: number;
    title: string;
}

type Posts = {
    posts: Post[]
}
export default async function Page() {

    const response = await fetch("https://dummyjson.com/posts", {
        next: {
            revalidate: 0
        }
    })
    const json = await response.json() as Posts

    return (
        <PageContainer>
            <h1>Hello there</h1>
            <Posts></Posts>
            {/*
            <div>loaded {json.posts.length}</div>
            {
                json.posts.map(post => (
                    <div key={post.id}>- {post.title}</div>
                ))}
            */}
        </PageContainer>
    )
}