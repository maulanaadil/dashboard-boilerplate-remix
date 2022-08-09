import { css } from '@emotion/css'
import { color, font } from '~/styles'

export const sButton = css`
    cursor: pointer;
    border-radius: 5px;

    transition: 0.2s all;
    color: ${color.text.white};
    font-weight: ${font.weight.semiBold};
`

export const sButtonFullWidth = css`
    width: 100%;
`

export const sButtonDisabled = css`
    color: ${color.text.darkGrey};

    border: 1px solid ${color.primary.white2};
    background-color: ${color.primary.white2};
`

export const sButtonXS = css`
    font-size: ${font.size[16]};
    padding: 4px 16px;
`

export const sButtonS = css`
    font-size: ${font.size[18]};

    padding: 8px 16px;
`

export const sButtonN = css`
    font-size: ${font.size[18]};

    padding: 12px 24px;
`

export const sButtonL = css`
    font-size: ${font.size[18]};

    padding: 18px 36px;
`

export const sButtonPrimary = css`
    color: ${color.text.white};

    border: 1px solid ${color.primary.lightBlue};
    background-color: ${color.primary.lightBlue};

    &:hover {
        background-color: ${color.primary.blue};
    }
`

export const sButtonSecondary = css`
    color: ${color.text.blue};

    border: 1px solid ${color.primary.blue};
    background-color: transparent;
`
export const sButtonTertiary = css`
    color: ${color.text.blue};

    border: 1px transparent;
    background-color: transparent;
`
