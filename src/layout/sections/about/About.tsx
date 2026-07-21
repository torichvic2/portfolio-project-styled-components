import {SectionHeading} from "../../../components/sectionHeading/SectionHeading.tsx";
import styled from "styled-components";
import aboutPhoto from "../../../assets/images/about-photo.webp"
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {AboutTabs} from "./aboutTabs/AboutTabs.tsx";
import {AboutTab} from "./aboutTabs/aboutData.ts"
import {education, experience, tabContent} from "./aboutTabs/aboutData.ts";
import {useState} from "react";
import {Container} from "../../../components/container.ts";

export const About = () => {
    const [activeTab, setActiveTab] = useState<AboutTab>('bio');

    return (
        <StyledAbout>
            <Container>

                <SectionHeading eyebrow="ABOUT ME" title="A bit more about my journey"/>
                <FlexWrapper align="flex-start" gap="60px">
                    <StyledPhoto src={aboutPhoto} alt="Chen Viktoria"/>

                    <StyledContent>
                        <AboutTabs activeTab={activeTab} onTabChange={setActiveTab}/>
                        <StyledBioBlock>
                            {activeTab === "bio" &&
                                tabContent.bio.map((p, index) => (
                                    <p key={index}>{p}</p>
                                ))
                            }
                        </StyledBioBlock>
                        <StyledTextBlock>
                            {activeTab === "education" &&
                                education.map((entry) => (
                                    <TimelineItem key={entry.period + entry.title}>
                                        <Period>{entry.period}</Period>
                                        <ContentBox>
                                            <EntryTitle>
                                                {entry.title} <Place>{entry.place}</Place>
                                            </EntryTitle>
                                            <p>{entry.description}</p>
                                        </ContentBox>
                                    </TimelineItem>
                                ))
                            }
                            {activeTab === "experience" &&
                                experience.map((entry) => (
                                    <TimelineItem key={entry.period + entry.title}>
                                        <Period>{entry.period}</Period>
                                        <ContentBox>
                                            <EntryTitle>
                                                {entry.title} <Place>{entry.place}</Place>
                                            </EntryTitle>
                                            <p>{entry.description}</p>
                                        </ContentBox>
                                    </TimelineItem>
                                ))
                            }
                        </StyledTextBlock>
                    </StyledContent>
                </FlexWrapper>
            </Container>
        </StyledAbout>
    );
};

const StyledAbout = styled.section`
    min-height: 100vh;
`

const StyledContent = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 20px;
`

const StyledPhoto = styled.img`
    max-width: 496px;
    width: 100%;
    border-radius: 16px;
    min-height: 600px;
    object-fit: cover;
`

const StyledBioBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;

    color: ${({theme}) => theme.colors.textSecondary};
    font-size: ${({theme}) => theme.fontSizes.h4};
    line-height: 170%;

`

const StyledTextBlock = styled.div`
    display: grid;
    grid-template-columns: 140px 1fr;
    row-gap: 16px;
    column-gap: 70px;
`
const TimelineItem = styled.div`
    display: contents;

`

const ContentBox = styled.div`
   display: flex;
    flex-direction: column;
    gap: 16px;
`

const Period = styled.span`
    display: inline-block;
    width: 140px;
    text-align: right;
`
const EntryTitle = styled.h4`
    text-align: left;
`
const Place = styled.span`
    color: ${({ theme }) => theme.colors.textMuted};
    font-size: ${({theme}) => theme.fontSizes.small};
    font-weight: 300;
    margin-left: 10px;
`