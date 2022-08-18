import { Avatar } from '~/components'
import { SubHead } from '~/typography'
import { sAccount } from './styles'
import type { AccountProps } from './types'

export default function Account({ username, account }: AccountProps) {
    return (
        <div className={sAccount}>
            {account && (
                <>
                    <Avatar alt={username} />
                    <SubHead type='subhead8'>{username}</SubHead>
                </>
            )}
        </div>
    )
}
