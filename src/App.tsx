import './App.css'
import IconSprite from "./assets/images/icon-sprite.svg?react";
import {Header} from "./layout/header/Header.tsx";
import {Main} from "./layout/sections/main/Main.tsx";
import {Skills} from "./layout/sections/skills/Skills.tsx";
import {Projects} from "./layout/sections/projects/Projects.tsx";

function App() {
    return (
        <div className="App">
            <IconSprite style={{ display: "none" }}/>
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
        </div>
    )
}

export default App