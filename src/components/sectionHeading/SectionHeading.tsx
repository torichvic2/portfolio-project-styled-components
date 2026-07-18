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
    margin: 0;
`
const StyledSectionTitle = styled.h2`
    margin: 0;
`