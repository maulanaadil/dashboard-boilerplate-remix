import { css } from '@emotion/css'
import { color } from '~/styles'

export const sContainer = css`
    width: 100%;
    height: 100%;

    min-height: 200px;

    display: flex;
    margin-top: 40px;

    hr {
        border: 1px dashed ${color.text.darkGrey};
        margin-right: -2px;
    }
`

export const sWrapperBar = css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const sWrapperContentBar = css`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-left: 8px;
`

export const sContainerBar = css`
    width: 100%;
    height: 30px;
    background-color: ${color.text.darkGrey};

    margin-top: 8px;
`

export const sBar = css`
    height: 30px;
`

export const sInfoBar = css`
    color: ${color.text.darkGrey};
`
