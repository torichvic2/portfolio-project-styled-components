import { ThemeMode } from "../../styles/Theme.ts";
import {Icon} from "../icon/Icon.tsx";
import styled from "styled-components";


type ThemeToggleButtonProps = {
    mode: ThemeMode;
    onToggle: () => void;
}

export const ThemeToggleButton = (props: ThemeToggleButtonProps) => {
    return (
        <StyledToggleButton type="button" onClick={props.onToggle} aria-label="Theme Toggle">
            <Icon iconId={props.mode === "light" ? "icon-moon" : "icon-sun"} width="18" height="18"/>
        </StyledToggleButton>
    );
};

const StyledToggleButton = styled.button`
    background-color: ${({theme}) => theme.colors.bgAlt};
    border: 1px solid ${({theme}) => theme.colors.border};
    border-radius: 50%;
    cursor: pointer;
    padding: 8px 10px;
    color: ${({theme}) => theme.colors.textPrimary};
    

    transition: background-color 0.2s ease, border-color 0.2s ease;

    &:hover {
        background-color: ${({theme}) => theme.colors.textMuted};
    }
`

