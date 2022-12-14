import { css, Global } from '@emotion/react'
import { font } from '../theme'

const globalCSS = css`
    * {
        margin: 0;
        padding: 0;

        box-sizing: border-box;

        font-family: ${font.family};
    }
`

const GlobalCSS = () => {
    return <Global styles={globalCSS} />
}

export default GlobalCSS
