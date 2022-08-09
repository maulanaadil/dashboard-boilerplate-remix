type FontSize = {
    64: string
    52: string
    48: string
    36: string
    30: string
    24: string
    18: string
    16: string
    14: string
    12: string
}

type FontHeight = {
    64: string
    52: string
    48: string
    36: string
    30: string
    24: string
    18: string
    16: string
    14: string
    12: string
    paragraph: string
}

type FontWeight = {
    light: string
    regular: string
    semiBold: string
    bold: string
}

type FontSpacing = {
    '5%': string
}

type Fonts = {
    family: string
    size: FontSize
    weight: FontWeight
    height: FontHeight
    spacing: FontSpacing
}

export default Fonts
