import styled from "styled-components";

export const MainContent = () => {
    return (
        <StyledContent>
                <StyledMainTitle>I'm Chen Viktoria</StyledMainTitle>
                <StyledName>Frontend Developer</StyledName>
                <StyledText>Completed a year-long frontend program at IT Incubator, plus a six-month internship at another company on the school's recommendation. Looking for a frontend developer position where I can keep growing.</StyledText>
        </StyledContent>
    );
};

const StyledContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    text-align: left;
`

const StyledMainTitle = styled.h1`
    font-size: ${({theme}) => theme.fontSizes.h1};
    color: ${({theme}) => theme.colors.textPrimary};
    font-style: normal;
    font-weight: 700;
    line-height: 58px; /* 116% */
`

const StyledName = styled.h2`
    font-size: ${({theme}) => theme.fontSizes.h2};;
    color: ${({theme}) => theme.colors.textSecondary};
    font-style: normal;
    line-height: normal;
`

const StyledText = styled.p`
    color: ${({theme}) => theme.colors.textSecondary};
    font-size: 17px;
    font-style: normal;
    line-height: 170%; /* 28.9px */
`