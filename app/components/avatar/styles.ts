import { css } from '@emotion/css'
import { color } from '~/styles'

export const sAvatar = css`
    width: 50px;
    height: 50px;
    border-radius: 50%;

    overflow: hidden;

    background-color: ${color.secondary.subtleBlue};
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${color.text.darkGrey};
`

export const sAvatarImage = css`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export const sAvatarSmall = css`
    width: 25px;
    height: 25px;
`

export const sAvatarLarge = css`
    width: 75px;
    height: 75px;
`
