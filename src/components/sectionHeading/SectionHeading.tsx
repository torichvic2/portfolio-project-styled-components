import styled from "styled-components";

type SectionHeadingPropsType = {
    eyebrow: string;
    title: string;
}

export const SectionHeading = (props: SectionHeadingPropsType) => {
    return (
        <div>
            <StyledEyebrow>{props.eyebrow}</StyledEyebrow>
            <StyledSectionTitle>{props.title}</StyledSectionTitle>
        </div>
    );
};

const StyledEyebrow = styled.p`
    color: ${({ theme }) => theme.colors.textMuted};
    font-size: ${({ theme }) => theme.fontSizes.small};
    font-weight: 600;
    line-height: normal;
    text-transform: uppercase;
`
const StyledSectionTitle = styled.h2`
    color: ${({ theme }) => theme.colors.textPrimary};
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: ${({ theme }) => theme.fontSizes.h2};
    font-weight: 700;
    line-height: normal;
    
    margin: 12px 0 48px 0;
`