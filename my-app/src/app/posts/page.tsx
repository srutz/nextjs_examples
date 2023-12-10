
"use client"

import { Post } from "@/components/Post"
import classes from "./page.module.css"
import Link from "next/link"
import {CSSProperties, useEffect, useState} from "react";

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
                <Link key={post.id} href={"/posts/" + post.id}>
                    <div className={classes.post}>{post.title}</div>
                </Link>
            ))
        }
        </div>
    )
}
