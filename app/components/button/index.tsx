import { cx } from '@emotion/css'
import type { ButtonProps } from './types'

export default function Button({
    size,
    fullwidth,
    disabled,
    children,
    variant,
    onClick,
    ...otherProps
}: ButtonProps) {
    return (
        <button className={``} onClick={onClick} {...otherProps}>
            {children}
        </button>
    )
}
