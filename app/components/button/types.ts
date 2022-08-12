import type { HTMLMotionProps } from 'framer-motion'
import type { ReactNode } from 'react'

export type ButtonProps = {
    size?: ButtonSize
    disabled?: boolean
    fullwidth?: boolean
    children: ReactNode
    variant: ButtonVariant
    onClick?: () => void
} & HTMLMotionProps<'button'>

export type ButtonType = 'submit' | 'reset' | 'button' | undefined

export type ButtonSize = 'xs' | 's' | 'n' | 'l' | undefined

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary'
