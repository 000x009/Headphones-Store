import {ProductCard} from "@/components/cards/ProductCard/ProductCard.jsx";
import styles from './Products.module.css'
import {products} from "@/const/products.js";

export function Products() {
    return (
        <main className={styles.main}>
            <div className={styles.wrapper}>
                {products.map((item) => (
                    <ProductCard
                        key={item.id}
                        product={item}
                    />
                ))}
            </div>
        </main>
    )
}