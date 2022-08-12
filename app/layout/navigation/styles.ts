import { css } from '@emotion/css'
import { color, font } from '~/styles'

export const sNavigation = css`
    width: 100%;
    height: 100%;

    max-width: 180px;

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px;
    border: 1px solid ${color.text.subtleGrey};

    overflow: auto;
    background-color: ${color.primary.white2};

    ::-webkit-scrollbar-track {
        background: transparent !important;
    }

    ::-webkit-scrollbar-thumb {
        background: ${color.primary.lightBlue};

        border-radius: 3px;
    }
`

export const sNavigationHeader = css`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 16px 0 30px 0;
`

export const sNavigationContent = css`
    height: 100%;
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const sNavigationRoutes = css`
    display: flex;
    gap: 8px;
    flex-direction: column;
`

export const sNavigationFooter = css`
    text-align: center;
`
export const sNavigationFooterText = css`
    font-size: ${font.size[12]};
    font-weight: ${font.weight.regular};

    color: ${color.text.darkGrey};
`
