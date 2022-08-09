import type { ReactNode } from 'react'

export type ButtonProps = {
    size?: ButtonSize
    disabled?: boolean
    fullwidth?: boolean
    children: ReactNode
    variant: ButtonVariant
    onClick?: () => void
}

export type ButtonSize = 'xs' | 's' | 'n' | 'l' | 'xl'

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary'
