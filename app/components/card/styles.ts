import { css } from '@emotion/css'
import { color } from '~/styles'

export const sCard = css`
    width: 100%;

    display: flex;
    flex-direction: column;
    border-radius: 20px;
    padding: 35px;
    background-color: ${color.primary.white1};
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
`

export const sCardHeader = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
`

export const sCardBody = css`
    width: 100%;
    height: 100%;
`
