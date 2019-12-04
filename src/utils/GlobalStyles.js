import { createGlobalStyle, withTheme } from "styled-components"
import fontFiles from "./Fonts"
import bgGradient from "images/bg-gradient.jpg"

const GlobalStyles = createGlobalStyle`
    @font-face{
        font-family: "LCD";
        src: url(${fontFiles.LCDEOT});
        src:
            url(${fontFiles.LCDEOT}) format("eot"),
            url(${fontFiles.LCDWOFF2}) format("woff2"), 
            url(${fontFiles.LCDWOFF}) format("woff"),
            url(${fontFiles.LCDTTF}) format("truetype");
        font-display: swap;
    }
    @font-face{
        font-family: "Handel Gothic Bold";
        src: url(${fontFiles.HandelGothicBoldEOT});
        src:
            url(${fontFiles.HandelGothicBoldEOT}) format("eot"),
            url(${fontFiles.HandelGothicBoldWOFF2}) format("woff2"), 
            url(${fontFiles.HandelGothicBoldWOFF}) format("woff"),
            url(${fontFiles.HandelGothicBoldTTF}) format("truetype");
        font-display: swap;
    }
    @font-face{
        font-family: "Handel Gothic Light";
        src: url(${fontFiles.HandelGothicLightEOT});
        src:
            url(${fontFiles.HandelGothicLightEOT}) format("eot"),
            url(${fontFiles.HandelGothicLightWOFF2}) format("woff2"), 
            url(${fontFiles.HandelGothicLightWOFF}) format("woff"),
            url(${fontFiles.HandelGothicLightTTF}) format("truetype");
        font-display: swap;
    }
    @font-face{
        font-family: "Zooja";
        src: url(${fontFiles.ZoojaEOT});
        src:
            url(${fontFiles.ZoojaEOT}) format("eot"),
            url(${fontFiles.ZoojaWOFF2}) format("woff2"), 
            url(${fontFiles.ZoojaWOFF}) format("woff"),
            url(${fontFiles.ZoojaTTF}) format("truetype");
        font-display: swap;
    }
    body {
        overflow-x: hidden;
        background-image: url("${bgGradient}");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        background-attachment: fixed;
        min-height: 100vh;
        color: ${props => props.theme.colors.white};
        line-height: ${props => props.theme.font.lineHeight.base};
        font-family: ${props => props.theme.font.family.body};
        font-size: ${props => props.theme.font.size.md};
        font-weight: normal;
        font-display: swap;
        letter-spacing: .07rem;
        -webkit-font-smoothing: antialiased;

        &.nav-active {
            overflow: hidden;
        }
    }
    img {
        max-width: 100%;
    }

    a {
        color: white;
        text-decoration: underline;
        &:hover {
            color: ${props => props.theme.colors.red};
        }
    }
`;

export default withTheme(GlobalStyles)
