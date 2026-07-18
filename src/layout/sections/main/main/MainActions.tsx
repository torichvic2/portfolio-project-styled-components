import styled from "styled-components";
import {LinkButton} from "../../../../components/linkButton/LinkButton.tsx";
import {Icon} from "../../../../components/icon/Icon.tsx";

export const MainActions = () => {
    return (
        <StyledActions>
            <LinkButton href="#projects" variant="primary">View my projects</LinkButton>
            <LinkButton href="/resume.pdf" variant="secondary" download>
                <Icon iconId="icon-download" width="16" height="16"/>
                Resume/CV
            </LinkButton>
        </StyledActions>
    );
};

const StyledActions = styled.div`

`
