"use client"

import {Post} from "@/components/post";
import {useEffect, useState, useTransition} from "react";

import { FaAirbnb } from "react-icons/fa"

type PageProps = {
    params: {
        id: string
    }
}

export default function Page(props: PageProps) {
    const id = props.params.id

    const [ post, setPost] = useState<Post>()

    const delay = async (delay:number ) => {
        return new Promise(resolve => setTimeout(resolve, delay))
    }


    const loadData = async () => {
        const r = await fetch("https://dummyjson.com/posts/" + id)
        const newPost = await r.json() as Post
        setPost(newPost)
    }

    useEffect(() => {
        loadData()
    }, [ id ])
    return (
        <div className="hans">
            <h1>Showing Post {id}</h1>
                <FaAirbnb style={{ width: "2rem", height: "2rem"}}></FaAirbnb>
            <div>{post && post.title}</div>
            <div>{post && post.body}</div>
        </div>
    )
}