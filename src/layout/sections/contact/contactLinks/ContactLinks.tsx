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
            <FlexWrapper gap="16px">
                {socials.map((social) => (
                    <StyledSocialButton
                    href={social.href}
                    key={social.id}
                    target="_blank"
                    >
                        <Icon iconId={social.iconId} width="32" height="32"/>
                    </StyledSocialButton>
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
    margin-bottom: 48px;
`

const StyledSocialButton = styled.a`
    width: 50px;
    height: 50px;
    padding: 12px;
    border-radius: 100px;
    border: 1px solid ${({ theme }) => theme.colors.border};

    &:hover {
        border-radius: 999px;
        background: linear-gradient(90deg, #4E4B7F 0%, #735681 100%);
        color: white;
    }
`