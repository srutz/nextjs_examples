import * as React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

import classes from "./ImageGallery.module.css"


const wrap = (length: number, i: number) => {
    console.log("wrap " + i + " to " + length)
    while (i < 0) {
        i += length
    }
    while (i >= length) {
        i -= length
    }
    console.log("  => " + i)
    return i
}

type ImageGalleryProps = {
    images: string[]
}


export function ImageGallery(props: ImageGalleryProps) {

    const { images } = props;

    const [[page, direction], setPage] = useState([0, 0])
    const imageIndex = wrap(images.length, page)

    const move = (newDirection: number) => {
        setPage([page + newDirection, newDirection])
    }
    
    const variants = {
        enter: (direction: number) => {
            return {
                x: direction > 0 ? 1000 : -1000,
                opacity: 0,
            }
        },
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => {
            return {
                zIndex: 0,
                x: direction < 0 ? 1000 : -1000,
                opacity: 0,
            }
        },
    }
    

    return (
        <>
            <AnimatePresence initial={false} custom={direction} mode="sync">
                <motion.img
                    className={classes.galleryimage}
                    key={page}
                    src={images[imageIndex]}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 20 },
                        opacity: { duration: 0.2 },
                    }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={(e, { offset, velocity }) => {
                        const swipeConfidenceThreshold = 10000
                        const swipePower = (offset: number, velocity: number) => {
                            return Math.abs(offset) * velocity
                        }                        
                        const swipe = swipePower(offset.x, velocity.x)
                        if (swipe < -swipeConfidenceThreshold) {
                            move(1)
                        } else if (swipe > swipeConfidenceThreshold) {
                            move(-1)
                        }
                    }}
                />
            </AnimatePresence>
            <div className={classes.next} onClick={() => move(1)}>‣</div>
            <div className={classes.prev} onClick={() => move(-1)}>‣</div>
        </>
    )
}
