import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        margin: 0;
        font-family: ${({ theme }) => theme.fonts.body};
        font-weight: 400;
        background-color: ${({ theme }) => theme.colors.bg};
        color: ${({ theme }) => theme.colors.textPrimary};
        transition: background-color 0.3s ease, color 0.3s ease;
    }
    
    h1, h2, h3, h4 {
        font-family: ${({ theme }) => theme.fonts.heading};
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    ul {
        list-style: none;
    }

    button {
        background-color: unset;
        border: none;
    }
`