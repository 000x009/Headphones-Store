import {Header as HeaderComponent} from "@/components/ui/Header/Header.jsx";
import LogoIcon from '@/assets/logo.svg?react'
import {Title} from "@/components/ui/Title/Title.jsx";
import styles from "./Header.module.css";

export function Header() {
    return (
        <HeaderComponent className={styles.header}>
            <LogoIcon className={styles.logo}/>
            <Title>Headphones Store</Title>
        </HeaderComponent>
    )
}