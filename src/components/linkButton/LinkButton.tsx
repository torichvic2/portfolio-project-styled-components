import {ReactNode} from 'react';
import styled from "styled-components";

type ButtonVariant = "primary" | "secondary" | "overlay";

type LinkButtonPropsType = {
    type?: string,
    href: string,
    children?: ReactNode,
    variant?: ButtonVariant,
    download?: boolean,
    target?: "_blank" | "_self",
}

export const LinkButton = (props: LinkButtonPropsType) => {
    return (
        <StyledLinkButton
            href={props.href}
            $variant={props.variant ?? "primary"}
            download={props.download ?? false}
            target={props.target}
            rel={props.target === "_blank" ? "noreferrer" : undefined}>
            {props.children}
        </StyledLinkButton>
    );
};

const StyledLinkButton = styled.a<{ $variant: ButtonVariant }>`
    display: inline-flex;
    align-items: center;
    gap: 6px;

    padding: 14px 24px;

    border-radius: 999px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    
    &:hover {
        border-radius: 999px;
        background: linear-gradient(90deg, #4E4B7F 0%, #735681 100%);
        color: white;
    }
`
