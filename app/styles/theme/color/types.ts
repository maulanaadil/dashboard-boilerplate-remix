type ColorPrimary = {
    blue: string
    black: string
    white1: string
    white2: string
    purple: string
    aquamarine: string
    red: string
    lightBlue: string
}

type ColorSecondary = {
    grey1: string
    grey2: string
    green: string
    softBlue: string
    pink: string
    orange: string
    yellow: string
    subtleBlue: string
}

type ColorText = {
    black: string
    white: string
    blue: string
    subtleGrey: string
    darkGrey: string
}

type Color = {
    text: ColorText
    primary: ColorPrimary
    secondary: ColorSecondary
}

export default Color
