import {classNames} from "@/lib/helpers/classNames.js";
import styles from './Button.module.css'

export function Button({
    className,
    title,
    type = 'button',
    ...restProps
}) {
    return (
        <button
            type={type}
            className={classNames(className, styles.button)}
            {...restProps}
        >
            {title}
        </button>
    )
}