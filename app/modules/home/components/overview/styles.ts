import { css } from '@emotion/css'
import { color, font } from '~/styles'

export const sOverview = css`
    width: 100%;

    display: flex;
    flex-direction: column;

    padding: 20px;
    border-radius: 10px;
    background-color: ${color.text.subtleGrey};
`

export const sOverviewHeader = css`
    display: flex;
    justify-content: space-between;
`

export const sOverviewTitle = css`
    color: ${color.text.darkGrey};
    font-weight: ${font.weight.regular};
`

export const sOverviewSummary = css`
    margin-top: 10px;
`

export const sTabWrapper = css`
    display: flex;
    max-height: 40px;
    background: ${color.primary.white1};
    cursor: pointer;

    align-items: center;
    hr {
        height: 15px;
        border: 1px solid ${color.text.subtleGrey};
        border-radius: 1px;
    }
    border-radius: 8px;

    li[aria-selected='true'] {
        color: ${color.primary.blue};
        border: transparent;
    }

    li:focus {
        outline: none;
    }
`

export const sTabButton = css`
    padding: 8px;
    font-size: ${font.size[14]};
    color: ${color.text.black};
    list-style: none;
    font-weight: ${font.weight.semiBold};
`
