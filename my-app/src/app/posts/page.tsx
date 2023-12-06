
"use client"

import classes from "./page.module.css"
import {useEffect,useState} from "react";


type Post = {
    id: number;
    title: string;
}

type Posts = {
    posts: Post[]
}

export default function Page() {

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
        <div className={classes.postpanel}>
        {
            posts?.map(post => (
                <div key={post.id} className={classes.post}>{post.title}</div>
            ))
        }
        </div>
    )
}
