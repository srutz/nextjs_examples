import { PageContainer } from "@/components/PageContainer"
import { MDXProvider } from "@mdx-js/react"
import Markdown from "react-markdown"


const markdown = `
# Example for Next.js

## Credits

- This markdown is rendered using react-markdown
- Images are from [Pexels](https://www.pexels.com/)

Usage is very simple

${"```"}
<Markdown>your markdown here</Markdown>
${"```"}
`


export default function Page() {

    

    return (
        <PageContainer>
            <div>
                <h1>Impressum</h1>
                <Markdown>{markdown}</Markdown>
            </div>
        </PageContainer>
    )
}