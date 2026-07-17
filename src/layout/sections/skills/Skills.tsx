import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Eyebrow} from "../../../components/Eyebrow.tsx";
import {SkillCard} from "./skill/SkillCard.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {skillGroups} from "./skill/skillGroups.ts"

export const Skills = () => {
    return (
        <StyledSkills id="skills">
                <Eyebrow>WHAT I DO</Eyebrow>
                <SectionTitle>Solid fundamentals, built through real projects.</SectionTitle>

            <FlexWrapper wrap="wrap" gap="24px">
                {skillGroups.map((group) => (
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
