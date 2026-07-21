import styled from "styled-components";
import {Menu} from "../../components/menu/Menu.tsx";
import {ThemeToggleButton} from "../../components/themeToggleButton/ThemeToggleButton.tsx";
import {LanguageSwitcher} from "../../components/languageSwitcher/LanguageSwitcher.tsx";
import {ThemeMode} from "../../styles/Theme.ts";
import {Container} from "../../components/container.ts";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";

const items = ["Home", "Skills", "Projects", "About", "Contact"];

type HeaderPropsType = {
    mode: ThemeMode;
    onToggle: () => void;
}

export const Header = (props: HeaderPropsType) => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify="space-between" align="center">
                    <StyledLogo>VC</StyledLogo>
                    <Menu menuItems={items}/>

                    <StyledHeaderControls>
                        <ThemeToggleButton mode={props.mode} onToggle={props.onToggle}/>
                        <LanguageSwitcher/>
                    </StyledHeaderControls>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    padding: 20px 80px;
    position: fixed;
    left: 0;
    right:0;
    top: 0;
    z-index: 99999;

    background-color: ${({ theme }) => theme.colors.bg};
    border-bottom: 1px solid ${({ theme}) => theme.colors.accent};
    transition: background-color 0.2s ease, border-color 0.2s ease;
    
    &:focus-visible {
        border-color: ${({ theme }) => theme.colors.accent};
    }
`

const StyledLogo = styled.span`
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: ${({ theme }) => theme.fontSizes.h3};
    background-color: ${({ theme }) => theme.colors.logoBg};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 50%;
    padding: 10px;
    color: white;
    cursor: pointer;
    
    &:hover {
        color: ${({ theme }) => theme.colors.textPrimary};
        background-color: ${({ theme }) => theme.colors.textMuted};
        transition: 0.2s ease-out;
    }
`

const StyledHeaderControls = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
`