import { ImageWrapper } from '@/components/ImageWrapper'
import Image from 'next/image'

export default function Home() {
    return (
        <>
            <h1>Homepage</h1>
            <ImageWrapper>
                <Image layout="fill" src="/soup.jpg" alt="soup" 
                    style={
                        { objectFit: "contain"}  // cover or contain make sense here
                    }/>
            </ImageWrapper>
        </>
    )
}
