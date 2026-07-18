import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon.tsx";
import {Skill} from "./skillData.ts";

type SkillCardPropsType = {
    id: string;
    iconId: string;
    title: string;
    skills: Skill[];
}

export const SkillCard = (props: SkillCardPropsType) => {
    return (
        <StyledCard>
            <StyledCardHeader>
                <StyledIconBox>
                    <Icon iconId={props.iconId} width="24" height="24"/>
                </StyledIconBox>
                <StyledCardTitle>{props.title}</StyledCardTitle>
            </StyledCardHeader>

            <StyledTagList>
                { props.skills.map((skill) => (
                        <StyledTag key={skill.id}>
                            <Icon iconId={skill.iconId} width="32" height="32"/>
                            {skill.label}
                        </StyledTag>
                    ))
                }
            </StyledTagList>
        </StyledCard>
    );
};

const StyledCard = styled.div`
    display: inline-flex;
    padding: 28px;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    flex: 1 1 calc(50% - 12px)
`
const StyledCardHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`
const StyledIconBox = styled.div`
    
`

const StyledCardTitle = styled.h3`
    margin: 0;
`
const StyledTagList = styled.div`
    display: flex;
    padding: 6px 10px;
    align-items: center;
    flex-wrap: wrap;
    gap: 6px;
`

const StyledTag = styled.div`
    display: inline-flex;
    align-items: center;
    gap: 8px;
`