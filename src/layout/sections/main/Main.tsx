import photo from '../../../assets/images/hero-photo.webp'
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {MainContent} from "./main/MainContent.tsx";
import {MainActions} from "./main/MainActions.tsx";
import {Container} from "../../../components/container.ts";


export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper justify="space-between" gap="64px" align="center">
                    <StyledTextBlock>
                        <MainContent/>
                        <MainActions/>
                    </StyledTextBlock>
                    <StyledBorder>
                        <StyledPhoto src={photo} alt="Hero photo"/>
                    </StyledBorder>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    min-height: 100vh;
    background: ${({ theme }) => theme.colors.bg};
    border: 1px solid red;
    display: flex;
    align-items: center;
`

const StyledTextBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`

const StyledPhoto = styled.img`
    width: 388px;
    height: 440px;
    object-fit: cover;
    border-radius: 16px;
`

const StyledBorder = styled.div`
    display: flex;
    width: 420px;
    padding: 16px;
    flex-direction: column;
    align-items: flex-start;

    border-radius: 32px;
    border: 1px solid ${({theme}) => theme.colors.border};
    background-color: ${({theme}) => theme.colors.bgAlt};
`



