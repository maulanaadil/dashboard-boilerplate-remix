import { cx } from '@emotion/css'
import { motion } from 'framer-motion'
import { sButton, sButtonDisabled, sButtonFullWidth } from './styles'
import { getSizeStyle, getVariantStyle } from './helpers'
import type { ButtonProps } from './types'
import { aButtonWhileTap } from './animation'

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
        <motion.button
            whileTap={aButtonWhileTap}
            className={cx(
                sButton,
                getSizeStyle(size),
                getVariantStyle(variant),
                {
                    [sButtonDisabled]: disabled,
                    [sButtonFullWidth]: fullwidth,
                }
            )}
            onClick={onClick}
            {...otherProps}
        >
            {children}
        </motion.button>
    )
}
