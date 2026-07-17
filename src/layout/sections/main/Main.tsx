import photo from '../../../assets/images/hero-photo.webp'
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {MainContent} from "./MainContent.tsx";
import {MainActions} from "./MainActions.tsx";


export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper>
                <StyledTextBlock>
                    <MainContent/>
                    <MainActions/>
                </StyledTextBlock>
                <StyledPhoto src={photo} alt="Hero photo"/>
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    min-height: 100vh;
    background-color: #F8F5FF;
`

const StyledTextBlock = styled.div`
    
`

const StyledPhoto = styled.img`
    width: 388px;
    height: 440px;
    object-fit: cover;
`



