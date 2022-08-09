import type { HTMLAttributes } from 'react'

export type ParagraphVariant = 'p1' | 'p2' | 'p3' | 'p4' | 'p5'

export type ParagraphWeight = 'light' | 'regular' | 'semiBold' | 'Bold'

export type ParagraphProps = {
    weight?: ParagraphWeight
    variant?: ParagraphVariant
} & HTMLAttributes<HTMLParagraphElement>
