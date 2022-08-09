import { css } from '@emotion/css'
import { color, font } from '~/styles/theme'

export const sParagraph = css`
    color: ${color.text.black};

    font-size: ${font.size[16]};
    font-weight: ${font.weight.regular};

    line-height: ${font.height.paragraph};
`

export const sParagraphLight = css`
    font-weight: ${font.weight.light};
`

export const sParagraphSemiBold = css`
    font-weight: ${font.weight.semiBold};
`

export const sParagraphBold = css`
    font-weight: ${font.weight.bold};
`

export const sParagraph1 = css`
    font-size: ${font.size[24]};
`

export const sParagraph2 = css`
    font-size: ${font.size[18]};
`

export const sParagraph3 = css`
    font-size: ${font.size[16]};
`

export const sParagraph4 = css`
    font-size: ${font.size[14]};
`

export const sParagraph5 = css`
    font-size: ${font.size[12]};
`
