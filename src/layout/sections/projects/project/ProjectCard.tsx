import styled from "styled-components";
import {LinkButton} from "../../../../components/linkButton/LinkButton.tsx";
import type {ProjectData} from "./projectData.ts"

type ProjectCardPropsType = ProjectData;

export const ProjectCard = (props: ProjectCardPropsType) => {
    return (
        <StyledProjectCard>
            <Image src={props.src} alt={props.alt}/>
            <StyledTitle>{props.title}</StyledTitle>
            <StyledDescription>{props.description}</StyledDescription>

            <StyledOverlay>
                <LinkButton variant="overlay" target="_blank" href={props.demoUrl}>demo</LinkButton>
                <LinkButton variant="overlay" target="_blank" href={props.codeUrl}>code</LinkButton>
            </StyledOverlay>

            <StyledTagList>
                {props.techTags.map((tag) => {
                    return <StyledTag key={tag}>{tag}</StyledTag>
                })}
            </StyledTagList>
        </StyledProjectCard>
    );
};

const StyledProjectCard = styled.div`
    max-width: 544px;
    width: 100%;
    
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    flex: 0 1 calc(50% - 16px);
`
const StyledTitle = styled.h3`
    margin: 16px 24px 8px;
`

const StyledDescription = styled.p`
    margin: 0 24px 16px;
`

const Image = styled.img`
    width: 100%;
    height: 500px;
    object-fit: cover;
`
const StyledOverlay = styled.div`
    margin: 0 24px 16px;
`

const StyledTagList = styled.div`
    display: flex;
    gap: 6px;
`

const StyledTag = styled.span`
    
`
