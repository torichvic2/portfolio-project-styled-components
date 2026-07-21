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
            <StyledCardBox>
                <StyledCardHeader>
                    <StyledIconBox>
                        <Icon iconId={props.iconId} width="24" height="24"/>
                    </StyledIconBox>
                    <StyledCardTitle>{props.title}</StyledCardTitle>
                </StyledCardHeader>

                <StyledTagList>
                    { props.skills.map((skill) => (
                        <StyledTagBox>
                            <StyledTag key={skill.id}>
                                <Icon iconId={skill.iconId} width="32" height="32"/>
                                {skill.label}
                            </StyledTag>
                        </StyledTagBox>
                    ))
                    }
                </StyledTagList>
            </StyledCardBox>
        </StyledCard>
    );
};

const StyledCard = styled.div`
padding: 0 24px;
`

const StyledCardBox = styled.div`
    padding: 28px;
    width: 495px;
    height: 200px;
    background-color: ${({ theme }) => theme.colors.bgAlt};
    border-radius: 24px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.25);
`

const StyledCardHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 20px;
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: ${({ theme }) => theme.fontSizes.h3};
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`
const StyledIconBox = styled.div`
    
`

const StyledCardTitle = styled.h3`
    margin: 0;
`
const StyledTagList = styled.div`
    display: flex;
    padding: 6px 10px;
    flex-wrap: wrap;
    gap: 6px;
`

const StyledTag = styled.div`
    display: inline-flex;
    align-items: center;
    gap: 8px;
`

const StyledTagBox = styled.div`
    padding: 6px 10px;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 24px;
    border: ${({ theme }) => theme.colors.border};
`