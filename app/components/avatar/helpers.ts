import type { AvatarSize } from './types'
import { sAvatar, sAvatarLarge, sAvatarSmall } from './styles'

export const getAvatarSize = (size: AvatarSize | undefined): string => {
    switch (size) {
        case 'small':
            return sAvatarSmall
        case 'large':
            return sAvatarLarge
        default:
            return sAvatar
    }
}

export const makeIntialAvatar = (username: string): string => {
    const firstNameInitial = username[0]
    const secondNameInitial = username.split(' ')[1].split('')[0]
    return `${firstNameInitial}${secondNameInitial}`
}
