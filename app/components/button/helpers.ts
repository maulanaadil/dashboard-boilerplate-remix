import {
    sButtonPrimary,
    sButtonSecondary,
    sButtonTertiary,
    sButtonXS,
    sButtonS,
    sButtonN,
    sButtonL,
} from './styles'

import type { ButtonVariant, ButtonSize } from './types'

export const getVariantStyle = (variant: ButtonVariant | undefined): string => {
    switch (variant) {
        case 'primary':
            return sButtonPrimary

        case 'secondary':
            return sButtonSecondary

        case 'tertiary':
            return sButtonTertiary

        default:
            return sButtonPrimary
    }
}

export const getSizeStyle = (size: ButtonSize | undefined): string => {
    switch (size) {
        case 'xs':
            return sButtonXS

        case 's':
            return sButtonS

        case 'n':
            return sButtonN

        case 'l':
            return sButtonL

        default:
            return sButtonN
    }
}
