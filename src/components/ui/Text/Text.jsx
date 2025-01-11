import {forwardRef} from "react";
import {classNames} from "@/lib/helpers/classNames.js";
import styles from './Text.module.css'

export const Text = forwardRef(function Text({
    children,
    className,
    ...restProps
}, ref) {
    return (
        <span ref={ref} className={classNames(className, styles.text)}>
            {children}
        </span>
    )
})
