import {SectionHeading} from "../../../components/sectionHeading/SectionHeading.tsx";
import styled from "styled-components";
import aboutPhoto from "../../../assets/images/about-photo.webp"

export const About = () => {
    return (
        <div>
            <StyledPhoto src={aboutPhoto} alt="About photo"/>
            <SectionHeading
                eyebrow="ABOUT ME"
                title="A bit more about my journey"
            />

            <Fi
        </div>
    );
};

const StyledPhoto = styled.img`
    max-width: 496px;
    width: 100%;
    object-fit: cover;
`