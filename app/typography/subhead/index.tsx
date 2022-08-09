import { cx } from '@emotion/css'
import {
    sSubhead,
    sSubhead1,
    sSubhead2,
    sSubhead3,
    sSubhead4,
    sSubhead5,
    sSubhead6,
    sSubhead7,
    sSubhead8,
} from './styles'

import type { SubheadProps } from './types'

export const SubHead = ({ type, children }: SubheadProps) => {
    switch (type) {
        case 'subhead1':
            return <p className={cx(sSubhead, sSubhead1)}>{children}</p>
        case 'subhead2':
            return <p className={cx(sSubhead, sSubhead2)}>{children}</p>
        case 'subhead3':
            return <p className={cx(sSubhead, sSubhead3)}>{children}</p>
        case 'subhead4':
            return <p className={cx(sSubhead, sSubhead4)}>{children}</p>
        case 'subhead5':
            return <p className={cx(sSubhead, sSubhead5)}>{children}</p>
        case 'subhead6':
            return <p className={cx(sSubhead, sSubhead6)}>{children}</p>
        case 'subhead7':
            return <p className={cx(sSubhead, sSubhead7)}>{children}</p>
        case 'subhead8':
            return <p className={cx(sSubhead, sSubhead8)}>{children}</p>

        default:
            throw Error('please add type on subhead')
    }
}

export default SubHead
