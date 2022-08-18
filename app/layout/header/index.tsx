import { cx } from '@emotion/css'
import { Link } from '@remix-run/react'
import { motion } from 'framer-motion'

import { Paragraph, SubHead } from '~/typography'
import Account from './account'
import { aHeaderTitle } from './animation'
import {
    sAccountWrapper,
    sHeader,
    sHeaderTitle,
    sHeaderSubtitle,
} from './styles'
import type { HeaderProps } from './types'

export default function Header({
    title,
    subtitle,
    className,
    username,
    ...otherProps
}: HeaderProps) {
    return (
        <div className={cx(sHeader, className)} {...otherProps}>
            <motion.div
                initial='initial'
                animate='animate'
                exit='exit'
                variants={aHeaderTitle}
            >
                <SubHead type='subhead4' className={sHeaderTitle}>
                    {title}
                </SubHead>
                <Paragraph variant='p4' className={sHeaderSubtitle}>
                    {subtitle}
                </Paragraph>
            </motion.div>
            <Link to='/' className={sAccountWrapper}>
                <Account account username={username} />
            </Link>
        </div>
    )
}
