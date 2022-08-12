import { css } from '@emotion/css'
import { color } from '~/styles'

export const sHeader = css`
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 20px 24px;
    z-index: 3;

    background-color: ${color.primary.white1};

    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
`

export const sHeaderTitle = css`
    margin-bottom: 12px;
`

export const sHeaderSubtitle = css`
    color: ${color.text.darkGrey};
`

export const sAccountWrapper = css`
    text-decoration: none;
`
