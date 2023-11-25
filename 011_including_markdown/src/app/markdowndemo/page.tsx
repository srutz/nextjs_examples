"use client"

import { PageContainer } from "@/components/PageContainer"

import MarkdownDemo from "./markdowndemo.mdx"




export default function Page() {
    return (
        <PageContainer>
            <div>
                <h1>Markdowndemo ...</h1>
                <MarkdownDemo></MarkdownDemo>
            </div>
        </PageContainer>
    )
}