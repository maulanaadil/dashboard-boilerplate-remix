import { css } from '@emotion/css'
import { color } from '~/styles'
import { SubHead } from '~/typography'
import { sCard, sCardHeader, sCardBody } from './styles'
import type { CardProps } from './types'

export default function Card({
    cardTitle,
    children,
    ...otherProps
}: CardProps) {
    return (
        <div className={sCard} {...otherProps}>
            <div className={sCardHeader}>
                <SubHead type='subhead4'>Purchases</SubHead>
                {/* IconHere */}
                <div
                    className={css`
                        background-color: ${color.secondary.subtleBlue};
                        width: 40px;
                        height: 40px;
                        border-radius: 5px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    `}
                >
                    &reg;
                </div>
            </div>
            <div className={sCardBody}>{children}</div>
        </div>
    )
}
