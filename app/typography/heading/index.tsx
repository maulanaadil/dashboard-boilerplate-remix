import type HeadingProps from './types'

import {
    sHeading,
    sHeading1,
    sHeading2,
    sHeading3,
    sHeading4,
    sHeading5,
} from './styles'
import { cx } from '@emotion/css'

const Heading = ({
    type,
    children,
    className,
    ...otherProps
}: HeadingProps) => {
    switch (type) {
        case 'h1':
            return (
                <h1
                    className={cx(sHeading, sHeading1, className)}
                    {...otherProps}
                >
                    {children}
                </h1>
            )

        case 'h2':
            return (
                <h2
                    className={cx(sHeading, sHeading2, className)}
                    {...otherProps}
                >
                    {children}
                </h2>
            )

        case 'h3':
            return (
                <h3
                    className={cx(sHeading, sHeading3, className)}
                    {...otherProps}
                >
                    {children}
                </h3>
            )

        case 'h4':
            return (
                <h4
                    className={cx(sHeading, sHeading4, className)}
                    {...otherProps}
                >
                    {children}
                </h4>
            )

        case 'h5':
            return (
                <h5
                    className={cx(sHeading, sHeading5, className)}
                    {...otherProps}
                >
                    {children}
                </h5>
            )
        default:
            throw Error('please add type on heading')
    }
}

export default Heading
