import styles from './ProductCard.module.css'
import {classNames} from "@/lib/helpers/classNames.js";
import {Text} from "@/components/ui/Text/Text.jsx";
import {Button} from "@/components/ui/Button/Button.jsx";
import StarIcon from '@/assets/rating.svg?react'

export function ProductCard({product, className, ...restProps}) {
    return (
        <div className={classNames(styles.card, className)} {...restProps}>
            <div className={styles.image__wrapper}>
                <img
                    src={product.image}
                    alt={product.title}
                    className={styles.image}
                />
            </div>
            <div className={styles.text__wrapper}>
                <div className={styles.text__middle_wrapper}>
                    <Text className={styles.price}>{product.price}$</Text>
                    <Text className={styles.title}>{product.title}</Text>
                </div>
                <div className={styles.rating__wrapper}>
                    <StarIcon/>
                    <Text className={styles.ratesAmount}>• {product.ratesAmount} rates</Text>
                </div>
            </div>
            <div className={styles.button__wrapper}>
                <Button
                    title="Add to Cart"
                />
            </div>
        </div>
    )
}