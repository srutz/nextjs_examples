
"use client"

import classes from "./ProductView.module.css"
import Image from "next/image"
import { motion } from "framer-motion"
import {Spacer} from "@/components/Spacer";
import { Product } from "./ProductType";


export type ProductViewProps = {
    product: Product
}

export function ProductView(props: ProductViewProps) {
    const { product } = props

    function formatPrice(n: Number) {
        return n.toFixed(2)
    }

    return (
        <motion.div
                initial={{ opacity: 0, scale: 0, y: 150 }}
                whileInView={{ opacity: 1, scale: 1, y: 0,
                    transition: {}
                }}
                viewport={{ once: !true }}>
            <div className={classes.productpanel}>
                <div className={classes.productimage}>
                    <Image src={product.thumbnail} alt={product.title} width="280" height="1"
                           style={{ width: "280px", height: "auto", minHeight: "140px" }}/>
                </div>
                <div className={classes.productbody}>
                    <div className={classes.producttitle} title={product.title}>{product.title}</div>
                    <div className={classes.productdescription}>
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