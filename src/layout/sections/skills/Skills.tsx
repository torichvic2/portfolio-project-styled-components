import styled from "styled-components";
import {SkillCard} from "./skill/SkillCard.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {skillData} from "./skill/skillData.ts"
import {SectionHeading} from "../../../components/sectionHeading/SectionHeading.tsx";
import {Container} from "../../../components/container.ts";

export const Skills = () => {
    return (
        <StyledSkills id="skills">
            <Container>
                <SectionHeading eyebrow="WHAT I DO" title="Solid fundamentals, built through real projects"/>

                <FlexWrapper wrap="wrap" gap="24px">
                    {skillData.map((group) => (
                        <SkillCard key={group.id} {...group} />
                    ))}
                </FlexWrapper>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    
`
