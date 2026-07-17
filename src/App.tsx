import './App.css'
import IconSprite from "./assets/images/icon-sprite.svg?react";
import {Header} from "./layout/header/Header.tsx";

function App() {
    return (
        <div className="App">
            <IconSprite style={{ display: "none" }}/>
            <Header/>
        </div>
    )
}

export default App