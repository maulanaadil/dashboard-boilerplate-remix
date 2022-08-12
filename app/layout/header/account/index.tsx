import { Avatar } from '~/components'
import { SubHead } from '~/typography'
import { sAccount } from './styles'
import type { AccountProps } from './types'

export default function Account({ account }: AccountProps) {
    return (
        <div className={sAccount}>
            {account && (
                <>
                    <Avatar alt='Jennie Bbay' />
                    <SubHead type='subhead8'>Jennie Bbay</SubHead>
                </>
            )}
        </div>
    )
}
