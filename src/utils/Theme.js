// match bootstrap sizes, also add xxl
const sizes = {
    xs: "0px",
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
    xxl: "1400px"
};

const fontSizeBase = 1;

const font = {
    family: {
        // thin: "RN House Sans W01 Thin",
        // thinItalic: "RN House Sans W01 Thin Italic",
        // light: "RN House Sans W01 Light",
        // lightItalic: "RN House Sans W01 Light Italic",
        // base: "RN House Sans W01 Regular",
        // italic: "RN House Sans W01 Italic",
        // boldItalic: "RN House Sans W01 Bold Italic",
        bold: "Handel Gothic Bold",
        zooja: "Zooja",
        special: "LCD",
        body: `"Handel Gothic Light", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`
    },
    size: {
        base: `${fontSizeBase * .875}rem`, // 14px
        sm: `${fontSizeBase * .75}rem`, // 12px
        md: `${fontSizeBase}rem`, // 16px
        lg: `${fontSizeBase * 1.15}rem`, // 20px
        xl: `${fontSizeBase * 1.5}rem` // 24px
    },
    lineHeight: {
        sm: 1.5,
        base: 1.3,
        headings: 1.4
    },
    h1: {
        size: `${fontSizeBase * 2.5}rem`
    },
    h2: {
        size: `${fontSizeBase * 2}rem`
    },
    h3: {
        size: `${fontSizeBase * 1.75}rem`
    },
    h4: {
        size: `${fontSizeBase * 1.5}rem`
    },
    h5: {
        size: `${fontSizeBase * 1.25}rem`
    },
    h6: {
        size: `${fontSizeBase}rem`
    }
}

export default {
    sizes,
    font,
    transitionBase: "all .4s ease-in-out",
    colors: {
        white: "#ffffff",
        black: "#000000",
        blackOff: "#222222",
        blue: "#516CBE",
        deepBlue: "#01115A",
        navy: "#010B48",
        green: "#59F012",
        grey: "#E5E5E5",
        greyMedium: "#C9C6C6",
        pink: "#E84261",
        red: "#F0121C",
        purple: "#702283",
        purpleDark: "#42145F",
        yellow: "#FEEE06",
        yellowDark: "#FBB709",
        turquoise: "#00ADB9"
    }
};