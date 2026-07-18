import styled from "styled-components";
import {Logo} from "../../components/Logo.tsx";
import {Menu} from "../../components/menu/Menu.tsx";
import {ThemeToggleButton} from "../../components/themeToggleButton/ThemeToggleButton.tsx";
import {LanguageSwitcher} from "../../components/languageSwitcher/LanguageSwitcher.tsx";

const items = ["Home", "Skills", "Projects", "About", "Contact"];

export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu menuItems={items}/>

            <StyledHeaderControls>
                <ThemeToggleButton/>
                <LanguageSwitcher/>
            </StyledHeaderControls>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: #F8F5FF;
    display: flex;
    justify-content: space-between;
`

const StyledHeaderControls = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
`