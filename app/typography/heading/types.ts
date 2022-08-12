import type { HTMLAttributes } from 'react'

type HeadingTypes = 'h1' | 'h2' | 'h3' | 'h4' | 'h5'

type HeadingProps = {
    type: HeadingTypes
} & HTMLAttributes<HTMLHeadingElement>

export default HeadingProps
