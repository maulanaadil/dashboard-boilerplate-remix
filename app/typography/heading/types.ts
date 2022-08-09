import type { HTMLAttributes, ReactNode } from 'react'

type HeadingTypes = 'h1' | 'h2' | 'h3' | 'h4' | 'h5'

type HeadingProps = {
    type: HeadingTypes
    children: ReactNode
} & HTMLAttributes<HTMLHeadingElement>

export default HeadingProps
