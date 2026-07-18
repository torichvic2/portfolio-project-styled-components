import styled from "styled-components";
import {LinkButton} from "../../components/linkButton/LinkButton.tsx";

export const Footer = () => {
    return (
        <StyledFooter>
            <StyledContent>
                <span>Chen Viktoria</span>
                <span>All rights reserved © 2026</span>
            </StyledContent>

            <LinkButton href="#">
                Back to top ↑
            </LinkButton>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    display: flex;
    justify-content: center;
`

const StyledContent = styled.span`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

