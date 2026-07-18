import {FlexWrapper} from "../../../../components/FlexWrapper.tsx";
import styled from "styled-components";
import {LinkButton} from "../../../../components/linkButton/LinkButton.tsx";
import {messangers, socials} from "./contactData.ts";
import { Icon } from "../../../../components/icon/Icon.tsx";

export const ContactLinks = () => {
    return (
        <StyledList>
            <StyledMessangerBox>
                {messangers.map((messanger) => (
                    <LinkButton
                        href={messanger.href}
                        key={messanger.id}
                        variant="secondary"
                        target="_blank"
                    >
                        <Icon iconId={messanger.iconId} width="24" height="24"/>
                        {messanger.label}
                    </LinkButton>
                ))}
            </StyledMessangerBox>
            <FlexWrapper>
                {socials.map((social) => (
                    <LinkButton
                    href={social.href}
                    key={social.id}
                    variant="secondary"
                    target="_blank"
                    >
                        <Icon iconId={social.iconId} width="32" height="32"/>
                    </LinkButton>
                ))}
            </FlexWrapper>
        </StyledList>
    );
};



const StyledList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const StyledMessangerBox = styled.div`
    display: inline-flex;
    gap: 12px;
`