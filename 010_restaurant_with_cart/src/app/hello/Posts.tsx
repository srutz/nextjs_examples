"use client"

import {useEffect,useState} from "react";


type Post = {
    id: number;
    title: string;
}

type Posts = {
    posts: Post[]
}
export function Posts() {

    const [ posts, setPosts ] = useState<Post[]>([])

    useEffect(() => {
        const loader = async () => {
            const response = await fetch("https://dummyjson.com/posts")
            const json = await response.json() as Posts
            setPosts(json.posts)
        }
        loader()
    }, [])

    return (
        <>
        {
            posts?.map(post => (
                <div key={post.id}>- {post.title}</div>
            ))
        }
        </>
    )
}