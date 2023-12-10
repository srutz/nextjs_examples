
"use client"

import classes from "./ProductView.module.css"
import Image from "next/image"
import { motion } from "framer-motion"
import {Spacer} from "@/components/Spacer";
import { Product } from "./ProductType";
import {MouseEvent} from "react";
import {ApplicationContext, useApplicationContext} from "@/components/ApplicationInfoProvider";


export type ProductViewProps = {
    product: Product
}

export function ProductView(props: ProductViewProps) {
    const { product } = props

    function formatPrice(n: Number) {
        return n.toFixed(2)
    }

    const applicationContext = useApplicationContext()

    const onImageClick = (e: MouseEvent<HTMLDivElement>) => {
        console.log("image click")
        e.preventDefault()
        applicationContext.setState({ email: "bill@gmx.de" });

        applicationContext.setState({ exchangeRate: 5 })
    }

    return (
        <motion.div
                initial={{ opacity: 0, scale: 0, y: 150 }}
                whileInView={{ opacity: 1, scale: 1, y: 0,
                    transition: {}
                }}
                viewport={{ once: !true }}>
            <div className={classes.productpanel}>
                <div onClick={onImageClick} className={classes.productimage}>
                    <Image src={product.thumbnail} alt={product.title} layout="fill" objectFit="contain" />
                </div>
                <div className={classes.productbody}>
                    <div className={classes.producttitle} title={product.title}>{product.title}</div>
                    <div className={classes.productdescription}>
                        <div>
                            Hallo {applicationContext.state.firstname} kauf doch was.
                        </div>
                        {product.description}
                        <Spacer grow />
                        <div className="row-container">
                            <div className={classes.productstock}>Only {product.stock} left in stock.</div>
                            <Spacer grow />
                            <div className={classes.productprice}>{formatPrice(product.price)} €</div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}