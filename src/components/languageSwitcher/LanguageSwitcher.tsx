import {useState} from "react";
import styled from "styled-components";

type Language = "EN" | "RU" | "KO"
const languages: Language[] = ["EN", "RU", "KO"]

export const LanguageSwitcher = () => {
    const [activeLang, setActiveLang] = useState<Language>("EN");
    return (
        <StyledSwitcher role="group" aria-label="Languages Switcher">
            {languages.map((lang, index) => (
                <StyledLangButton
                key={lang}
                $isActive={lang === activeLang}
                onClick={ () => setActiveLang(lang)}
                >
                    {lang.toUpperCase()}
                    {index <languages.length - 1 && <Divider></Divider>}
                </StyledLangButton>
            ))}
        </StyledSwitcher>
    )
}

const StyledSwitcher = styled.div`
    display: flex;
    align-items: center;

    background-color: ${({ theme }) => theme.colors.bgAlt};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 100px;
    padding: 4px 8px;
    gap: 10px; //так border при tab-управлении не налезает друг на друга   
`

const StyledLangButton = styled.button<{ $isActive: boolean }>`
    background-color: ${({theme}) => theme.colors.bgAlt};
    border-radius: 50%;
    cursor: pointer;
    padding: 10px 10px;
    color: ${({theme}) => theme.colors.textPrimary};

    &:hover {
        background-color: ${({theme}) => theme.colors.borderHover};
        color: white;
        transition: 0.2s ease-out;
    }
`

const Divider = styled.span`
    
`