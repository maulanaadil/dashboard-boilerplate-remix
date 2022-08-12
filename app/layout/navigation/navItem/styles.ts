import { css } from '@emotion/css'
import { color } from '~/styles'

export const sNavItem = css`
    cursor: pointer;
    width: 100%;

    padding: 8px 12px;

    display: flex;
    column-gap: 12px;
    align-items: center;

    border-radius: 5px;
    transition: 0.2s background-color;
    text-decoration: none;

    color: ${color.text.black};

    opacity: 0.6;

    &:hover {
        background-color: ${color.text.darkGrey};
    }
`

export const sNavItemActive = css`
    color: ${color.text.black};
    opacity: 1;
`

export const sNavItemName = css`
    color: ${color.text.black};
`

export const sNavItemLogo = css`
    width: 16px;

    display: flex;
    align-items: center;

    transition: 0.2s opacity;
`
