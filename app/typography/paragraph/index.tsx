import { cx } from '@emotion/css'
import { getParagraphVariant, getParagraphWeights } from './helper'
import { sParagraph } from './styles'
import type { ParagraphProps } from './types'

const Paragraph = ({
    variant,
    weight,
    className,
    children,
    ...otherProps
}: ParagraphProps) => {
    return (
        <p
            className={cx(
                sParagraph,
                getParagraphVariant(variant),
                getParagraphWeights(weight),
                className
            )}
            {...otherProps}
        >
            {children}
        </p>
    )
}

export default Paragraph
