import type { HTMLAttributes } from 'react'

export type OverviewBarProps = {
    widthBarFees: number
    sumFees: number
    amountFees: number

    widthBarFood: number
    sumFood: number
    amountFood: number

    widthBarEntertainment: number
    sumEntertainment: number
    amountEntertainment: number

    widthBarOther: number
    sumOther: number
    amountOther: number
} & HTMLAttributes<HTMLDivElement>
