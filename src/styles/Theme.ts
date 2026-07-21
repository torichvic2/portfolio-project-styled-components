export const theme = {
    colors: {
        light: {
            bg: "#F8F5FF",
            bgAlt: "#F0E9FF", //фон карточек",
            textPrimary: "#1C1923", //цвет заголовков
            textSecondary: "#57535F",
            textMuted: "#645482",
            accent: "#F0E9FF",
            accentHover: "#645482",
            border: "#DDD7EC",
            borderHover: "#645482",
            logoBg: "#645482",
        },
        dark: {
            bg: "#1A1620",
            bgAlt: "#282431", // фон карточек",
            textPrimary: "#EFEDF3", //цвет заголовков
            textSecondary: "#A6A2B0",
            textMuted: "#645482",
            accent: "#282431",
            accentHover: "#AB9CC8",
            border: "#3A3545",
            borderHover: "#645482",
            logoBg: "#282431",
        },
    },
    fonts: {
        heading: "'Domine', sans-serif",
        body: "'Manrope', sans-serif",
        textMuted: "'Manrope', sans-serif",
    },
    fontSizes: {
        h1: "50px",
        h2: "32px",
        h3: "22px",
        h4: "15px",
        small: "13px",
    },
}

export type ThemeMode = 'light' | 'dark';