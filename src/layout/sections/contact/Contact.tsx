import {SectionHeading} from "../../../components/sectionHeading/SectionHeading.tsx";
import styled from "styled-components";
import {LinkButton} from "../../../components/linkButton/LinkButton.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {ContactLinks} from "./contactLinks/ContactLinks.tsx";
import {Icon} from "../../../components/icon/Icon.tsx";


export const Contact = () => {
    return (
        <StyledContact>
            <SectionHeading eyebrow="GET IN TOUCH" title="Let's talk about a frontend role."/>
            <StyledText>I'm actively looking for a frontend developer position — happy to discuss a role, complete a test task, and if needed relocate to your city for the probation period.</StyledText>

            <FlexWrapper>
                <StyledForm>
                    <StyledBlock>
                        <Field/>
                        <Field/>
                    </StyledBlock>
                    <Field as={"textarea"}/>
                </StyledForm>
            </FlexWrapper>

            <StyledLabel>OR MESSAGE ME ON</StyledLabel>
            <LinkButton type="submit" href="#" variant="primary">
                <Icon iconId="icon-mail"/>
                Send message
            </LinkButton>
            <ContactLinks/>
        </StyledContact>
    );
};

const StyledContact = styled.section`
    background-color: lightcoral;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const StyledText = styled.p`
    
`
const StyledForm = styled.form`
    max-width: 500px;
    width: 100%;
    
    display: flex;
    flex-direction: column;
    gap: 24px;
 
`

const StyledBlock = styled.div`
    display: flex;
    gap: 16px;
`

const Field = styled.input`
    width: 100%;
`

const StyledLabel = styled.span`
    display: inline-block;
    margin-top: 48px;
`
