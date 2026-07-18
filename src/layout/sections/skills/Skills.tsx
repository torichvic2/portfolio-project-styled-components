import styled from "styled-components";
import {SkillCard} from "./skill/SkillCard.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {skillData} from "./skill/skillData.ts"
import {SectionHeading} from "../../../components/sectionHeading/SectionHeading.tsx";

export const Skills = () => {
    return (
        <StyledSkills id="skills">
            <SectionHeading eyebrow="WHAT I DO" title="Solid fundamentals, built through real projects"/>

            <FlexWrapper wrap="wrap" gap="24px">
                {skillData.map((group) => (
                    <SkillCard key={group.id} {...group} />
                ))}
            </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    background-color: #DDD7EC;
    min-height: 100vh;
`
