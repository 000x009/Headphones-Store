import {Header as HeaderComponent} from "@/components/ui/Header/Header.jsx";
import LogoIcon from '@/assets/logo.svg?react'
import CartIcon from '@/assets/cart.svg?react'
import {classNames} from "@/lib/helpers/classNames.js";
import {Title} from "@/components/ui/Title/Title.jsx";
import styles from "./Header.module.css";
import {Text} from "@/components/ui/Text/Text.jsx";

export function Header({ productCount }) {
    const firstCount = productCount && styles.first_count

    return (
        <HeaderComponent className={styles.header}>
            <div className={styles.fullLogo__wrapper}>
                <LogoIcon className={styles.logo}/>
                <Title className={styles.title}>Headphones Store</Title>
            </div>
            <div className={classNames(
                styles.cart__wrapper,
                firstCount,
            )}>
                <div className={classNames(
                    styles.cart,
                    firstCount,
                )}>
                    <div className={styles.cart_icon__wrapper}>
                        <CartIcon className={styles.cart__icon}/>
                    </div>
                    {productCount ? (
                        <div className={classNames(
                            styles.products_count__container,
                            styles.first_count,
                        )}>
                            <Text>•</Text>
                            <Text
                                className={classNames(
                                    styles.count__text,
                                    firstCount
                                )}
                            >
                                {productCount}
                            </Text>
                        </div>
                    ) : null}
                </div>
            </div>
        </HeaderComponent>
    )
}