import {classNames} from "@/lib/helpers/classNames.js";
import styles from "./Header.module.css";

export function Header({ children, className, ...restProps }) {
    return (
        <header className={classNames(styles.header, className)} {...restProps}>
            {children}
        </header>
    )
}
