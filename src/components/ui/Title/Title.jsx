import {forwardRef} from "react";
import {classNames} from "@/lib/helpers/classNames.js";
import styles from './Title.module.css'

export const Title = forwardRef(function Title({
    children,
    className,
    ...restProps
}, ref) {
    return (
        <span ref={ref} className={classNames(styles.title, className)}>
            {children}
        </span>
    )
})
