
import { Product } from "./Product"
import classes from "./ProductView.module.css"
import Image from "next/image"

export type ProductViewProps = {
    product: Product
}

export function ProductView(props: ProductViewProps) {
    const { product } = props
    return (
        <div className={classes.product}>
            <div className={classes["product-title"]}>{product.title}</div>
            <div className={classes["product-image"]}>
                <Image src={product.thumbnail}
                    priority
                    width={400}
                    height={600}
                    style={{ alignSelf: "start", height: "200px", width: "auto" }}
                    alt={product.title}></Image>
            </div>
            <div className={classes["product-description"]}>{product.description}</div>
            <div className={classes["product-price"]}>Preis: {product.price} €</div>
        </div>
    )
}
