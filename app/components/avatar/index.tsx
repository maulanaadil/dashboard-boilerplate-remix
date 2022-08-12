import { cx } from '@emotion/css'
import { getAvatarSize, makeIntialAvatar } from './helpers'
import { sAvatar, sAvatarImage } from './styles'
import type { AvatarProps } from './types'

export default function Avatar({ alt, image, size }: AvatarProps) {
    return (
        <div className={cx(sAvatar, getAvatarSize(size))}>
            {image ? (
                <img alt={`img-${alt}`} className={sAvatarImage} src={image} />
            ) : (
                makeIntialAvatar(alt)
            )}
        </div>
    )
}
