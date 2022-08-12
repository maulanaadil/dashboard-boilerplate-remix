import { css } from '@emotion/css'
import { color } from '~/styles'

export const sPageWrapper = css`
    width: 100%;
    height: 100vh;

    overflow: hidden;

    display: flex;

    background-color: ${color.primary.white1};
`

export const sPageWrapperContent = css`
    width: 100%;
    padding: 32px;

    display: grid;
    grid-template-rows: auto 1fr auto;
`
