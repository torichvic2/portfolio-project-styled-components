import styled from "styled-components";
import {LinkButton} from "../../../../components/linkButton/LinkButton.tsx";
import type {ProjectData} from "./projectData.ts"

type ProjectCardPropsType = ProjectData;

export const ProjectCard = (props: ProjectCardPropsType) => {
    return (
        <StyledProjectCard>
            <ImageWrapper>
                <Image src={props.src} alt={props.alt}/>
                <StyledOverlay>
                    <LinkButton variant="overlay" target="_blank" href={props.demoUrl}>demo</LinkButton>
                    <LinkButton variant="overlay" target="_blank" href={props.codeUrl}>code</LinkButton>
                </StyledOverlay>
            </ImageWrapper>
            <StyledTitle>{props.title}</StyledTitle>
            <StyledDescription>{props.description}</StyledDescription>

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
    font-family: ${({theme}) => theme.fonts.heading};
    font-size: ${({theme}) => theme.fontSizes.h3};
    color: ${({theme}) => theme.colors.textPrimary};
`

const StyledDescription = styled.p`
    font-family: ${({theme}) => theme.fonts.body};
    font-size: ${({theme}) => theme.fontSizes.h4};
    color: ${({theme}) => theme.colors.textSecondary};
    line-height: 160%; /* 22.4px */
    
    margin: 12px 0;
`

const Image = styled.img`
    width: 100%;
    max-height: 260px;
    object-fit: cover;
    border-radius: 20px;
    border: 2px solid ${({theme}) => theme.colors.border};
    
    margin-bottom: 18px;
`

const ImageWrapper = styled.div`
    position: relative;
    overflow: hidden;
`

const StyledOverlay = styled.div`
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(6px);
    opacity: 0;
    transition: 0.15s ease-in-out;
    color: white;
    position: absolute;
    
    &:hover {
        border-radius: 20px;
        opacity: 1;
    }
`

const StyledTagList = styled.div`
    display: flex;
    gap: 6px;
`

const StyledTag = styled.span`
    background: ${({theme}) => theme.colors.bgAlt};
    border-radius: 999px;
    border: 1px solid ${({theme}) => theme.colors.border};
    padding: 2px 8px;
    width: fit-content;
    height: 100%;
    
    font-size: ${({theme}) => theme.fontSizes.small};
    color: ${({theme}) => theme.colors.textSecondary};
`
