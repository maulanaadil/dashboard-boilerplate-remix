import Navigation from '../navigation'

import { sPageWrapper, sPageWrapperContent } from './styles'
import type { PageWrapperProps } from './types'

export default function PageWrapper({ children }: PageWrapperProps) {
    return (
        <div className={sPageWrapper}>
            <Navigation />
            <div className={sPageWrapperContent}>{children}</div>
        </div>
    )
}
