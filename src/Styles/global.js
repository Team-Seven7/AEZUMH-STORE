import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    /* @font-face {
    font-family: 'TTTtangsbudaejjigaeB';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2212@1.0/TTTtangsbudaejjigaeB.woff2') format('woff2');
    font-weight: 300;
    font-style: normal;
}

    @font-face {
    font-family: 'TTTtangsbudaejjigaeB';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2212@1.0/TTTtangsbudaejjigaeB.woff2') format('woff2');
    font-weight: 500;
    font-style: normal;
} */

@font-face {
    font-family: 'TTTtangsbudaejjigaeB_bold';
    src: url('Assets/Font/TTTtangsbudaejjigaeB.woff2');
    font-weight: 500;
    font-style: normal;
}

    * {
        margin:0;
        padding:0;
        box-sizing: border-box;
        @font-face {
    font-family: 'TTTtangsbudaejjigaeB_bold';
    src: url('Assets/Font/TTTtangsbudaejjigaeB.woff2');
}
font-family: 'TTTtangsbudaejjigaeB_bold';
    }

    html {
        // Font : Line Seed (라인 시드)
        font-size: 62.5%;
        font-family: 'TTTtangsbudaejjigaeB_bold';

        @media screen and (max-width:820px) {
            font-size:50%;
        }
    }

    ul, li {
        list-style: none;
    }

    h1 {
        font-size:${({ theme }) => theme.FONT_SIZE.big};
    }

    h2 {
        font-size:${({ theme }) => theme.FONT_SIZE.huge};
        font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
    }

    h2 ~ p {
        font-size:${({ theme }) => theme.FONT_SIZE.large}
        
    }

    h3 {
        font-size:${({ theme }) => theme.FONT_SIZE.large};
        font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
    }

    h3 ~ p {
        font-size:${({ theme }) => theme.FONT_SIZE.medium}
    }

    h3 ~ span {
        font-size:${({ theme }) => theme.FONT_SIZE.small}
    }

    h4 {
        font-size:${({ theme }) => theme.FONT_SIZE.medium};
        font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
    }

    button {
        border: none;
    }

    input {
        outline: none;
    }

    textarea {
        font-size:${({ theme }) => theme.FONT_SIZE.small};
        font-family: 'TTTtangsbudaejjigaeB';
    }

    p {
        font-size:${({ theme }) => theme.FONT_SIZE.small};
        font-weight:${({ theme }) => theme.FONT_WEIGHT.regular}
    }

    span {
        font-size:${({ theme }) => theme.FONT_SIZE.tiny}
    }
`

export default GlobalStyles
