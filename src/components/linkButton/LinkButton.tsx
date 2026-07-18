import {ReactNode} from 'react';
import styled from "styled-components";

type ButtonVariant = "primary" | "secondary" | "overlay";

type LinkButtonPropsType = {
    href: string,
    children: ReactNode,
    variant?: ButtonVariant;
    download?: boolean;
    target?: "_blank" | "_self";
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
    margin-top: 24px;
    padding: 24px 14px;
`
