import {
    sParagraphBold,
    sParagraphLight,
    sParagraphSemiBold,
    sParagraph1,
    sParagraph2,
    sParagraph3,
    sParagraph4,
    sParagraph5,
} from './styles'

import type { ParagraphVariant, ParagraphWeight } from './types'

export const getParagraphWeights = (
    weight: ParagraphWeight | undefined
): any => {
    switch (weight) {
        case 'Bold':
            return sParagraphBold

        case 'semiBold':
            return sParagraphSemiBold

        case 'light':
            return sParagraphLight

        default:
            return ''
    }
}

export const getParagraphVariant = (
    variant: ParagraphVariant | undefined
): any => {
    switch (variant) {
        case 'p1':
            return sParagraph1

        case 'p2':
            return sParagraph2

        case 'p3':
            return sParagraph3

        case 'p4':
            return sParagraph4

        case 'p5':
            return sParagraph5

        default:
            return ''
    }
}
