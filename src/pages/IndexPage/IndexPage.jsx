import {Header} from "@/pages/IndexPage/sections/Header/Header.jsx";
import {Products} from "@/pages/IndexPage/sections/Products/Products.jsx";
import styles from './IndexPage.module.css'
import {useState} from "react";

export default function IndexPage() {
    const [productCount, setProductCount] = useState(null);

    return (
        <div className={styles.page}>
            <Header productCount={productCount} />
            <Products setProductCount={setProductCount} />
        </div>
    )
}