import { css } from '@emotion/css'
import { color } from '~/styles'

export const sHeader = css`
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    z-index: 3;

    background-color: ${color.primary.white1};
`

export const sHeaderTitle = css`
    margin-bottom: 5px;
`

export const sHeaderSubtitle = css`
    color: ${color.text.darkGrey};
`

export const sAccountWrapper = css`
    text-decoration: none;
`
