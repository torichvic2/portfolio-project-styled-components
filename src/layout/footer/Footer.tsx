import styled from "styled-components";
import {Container} from "../../components/container.ts";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper>
                    <StyledContent>
                        <span>Chen Viktoria</span>
                        <span>All rights reserved © 2026</span>
                    </StyledContent>

                    <StyledButton href="#">
                        <StyledText>Back to top ↑</StyledText>
                    </StyledButton>
                </FlexWrapper>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    display: flex;
    justify-content: center;
    padding: 24px;
`

const StyledContent = styled.span`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: ${({ theme }) => theme.fontSizes.small};
    text-align: center;
    line-height: normal;
    padding: 24px 0;
    
    position: relative;
    border-top: 1px solid ${({ theme }) => theme.colors.border};

`

const StyledButton = styled.a`
    position: absolute;
    right: 350px;
    padding: 24px 0;
`

const StyledText = styled.p`
    line-height: normal;
    font-weight: 500;
    font-size: ${({ theme }) => theme.fontSizes.small};
    
    &:hover {
        color: ${({ theme }) => theme.colors.textSecondary};
    }
`

