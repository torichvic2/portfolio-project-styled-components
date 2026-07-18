import {SectionHeading} from "../../../components/sectionHeading/SectionHeading.tsx";
import styled from "styled-components";
import aboutPhoto from "../../../assets/images/about-photo.webp"
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {AboutTabs} from "./AboutTabs.tsx";
import {AboutTab} from  "./aboutData.ts"
import {education, experience, tabContent} from "./aboutData.ts";
import {useState} from "react";

export const About = () => {
    const [activeTab, setActiveTab] = useState<AboutTab>('bio');

    return (
        <StyledAbout>

            <SectionHeading eyebrow="ABOUT ME" title="A bit more about my journey"/>

            <FlexWrapper align="flex-start" gap="60px">
                <StyledPhoto src={aboutPhoto} alt="Chen Viktoria"/>

                <StyledContent>

                    <AboutTabs activeTab={activeTab} onTabChange={setActiveTab}/>

                    <StyledTextBlock>
                        {activeTab === "bio" &&
                        tabContent.bio.map((p, index) => (
                            <p key={index}>{p}</p>
                        ))
                        }
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
        </StyledAbout>
    );
};

const StyledAbout = styled.div`
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
    min-height: 600px;
    object-fit: cover;
`
const StyledTextBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`
const TimelineItem = styled.div`
    display: flex;
    gap: 80px;
    align-items: center;
`

const ContentBox = styled.div`

`

const Period = styled.span`
    display: block;
    width: 120px;
`
const EntryTitle = styled.h4`
    
`
const Place = styled.span`

    
`