import type { HTMLAttributes } from 'react'

export type SubheadTypes =
    | 'subhead1'
    | 'subhead2'
    | 'subhead3'
    | 'subhead4'
    | 'subhead5'
    | 'subhead6'
    | 'subhead7'
    | 'subhead8'
    | undefined

export type SubheadProps = {
    type?: SubheadTypes
} & HTMLAttributes<HTMLParagraphElement>
