import './App.css'
import IconSprite from "./assets/images/icon-sprite.svg?react";
import {Header} from "./layout/header/Header.tsx";
import {Main} from "./layout/sections/main/Main.tsx";
import {Skills} from "./layout/sections/skills/Skills.tsx";
import {Projects} from "./layout/sections/projects/Projects.tsx";
import {About} from "./layout/sections/about/About.tsx";
import {Contact} from "./layout/sections/contact/Contact.tsx";
import {Footer} from "./layout/footer/Footer.tsx";
import {theme} from "./styles/Theme.ts";
import {useThemeMode} from "./styles/hooks/useThemeMode.ts";
import {GlobalStyle} from "./styles/GlobalStyle.ts";
import {ThemeProvider } from "styled-components";
function App() {
    const { mode, toggleMode } = useThemeMode();

    const activeTheme = {
        colors: theme.colors[mode],
        fonts: theme.fonts,
        fontSizes: theme.fontSizes,
    }
    return (
        <div className="App">
            <ThemeProvider theme={activeTheme}>
                <GlobalStyle />
                <IconSprite style={{ display: "none" }}/>
                <Header mode={mode} onToggle={toggleMode} />
                <Main/>
                <Skills/>
                <Projects/>
                <About/>
                <Contact/>
                <Footer/>
            </ThemeProvider>
        </div>
    )
}



export default App