import {Header} from "@/pages/IndexPage/sections/Header/Header.jsx";
import {Products} from "@/pages/IndexPage/sections/Products/Products.jsx";
import styles from './IndexPage.module.css'

export default function IndexPage() {
    return (
        <div className={styles.page}>
            <Header />
            <Products />
        </div>
    )
}