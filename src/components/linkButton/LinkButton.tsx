import {ReactNode} from 'react';
import styled from "styled-components";

type LinkButtonPropsType = {
    href: string,
    children: ReactNode,
    variant?: 'primary' | 'secondary';
    download?: boolean
}

export const LinkButton = (props: LinkButtonPropsType) => {
    return (
        <StyledLinkButton href={props.href} $variant={props.variant ?? 'primary'} download={props.download}>
            {props.children}
        </StyledLinkButton>
    );
};

const StyledLinkButton = styled.a<{ $variant: "primary" | "secondary" }>`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    margin-top: 24px;
    padding: 24px 14px;
`
