import { YouTubeEmbed } from '@next/third-parties/google'
 
export default function Page() {
    return (
        <>
            <h1>Contact</h1>
            <YouTubeEmbed 
                videoid="27fL-rUXrJM" height={400} params="controls=1" />
        </>
  )
}
