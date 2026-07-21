import {SectionHeading} from "../../../components/sectionHeading/SectionHeading.tsx";
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {ContactLinks} from "./contactLinks/ContactLinks.tsx";
import {Icon} from "../../../components/icon/Icon.tsx";
import {Container} from "../../../components/container.ts";


export const Contact = () => {
    return (
        <StyledContact>
            <Container>
                <FlexWrapper align="center" direction="column">
                    <StyledHeadingWrapper>
                        <SectionHeading eyebrow="GET IN TOUCH" title="Let's talk about a frontend role."/>
                    </StyledHeadingWrapper>
                    <StyledText>I'm actively looking for a frontend developer position — happy to discuss a role, complete a test task, and if needed relocate to your city for the probation period.</StyledText>
                </FlexWrapper>
                <FlexWrapper justify="center">
                    <StyledForm>
                        <StyledBlock>
                            <Field placeholder="Name"/>
                            <Field placeholder="Email"/>
                        </StyledBlock>
                        <MessageField placeholder="Message..."/>
                        <StyledButton type="submit">
                            <Icon iconId="icon-mail"/>
                            Send message
                        </StyledButton>
                    </StyledForm>
                </FlexWrapper>

                <StyledLabel>OR MESSAGE ME ON</StyledLabel>
                <ContactLinks/>
            </Container>
        </StyledContact>
    );
};

const StyledContact = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const StyledHeadingWrapper = styled.div`
    margin: -36px; //занулили отступы здесь, чтобы не трогать компонент
`

const StyledText = styled.p`
    display: inline-block;
    max-width: 680px;
    margin-bottom: 48px;

    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: ${({ theme }) => theme.fontSizes.h4};
    line-height: 160%; /* 25.6px */
`
const StyledForm = styled.form`
    max-width: 720px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 24px;

    border-radius: 24px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    padding: 32px;
    background-color: ${({ theme }) => theme.colors.bgAlt};
`

const StyledBlock = styled.div`
    display: flex;
    gap: 16px;
`

const Field = styled.input`
    padding: 16px;
    width: 100%;
    border-radius: 12px;
    border: 1px solid ${({ theme }) => theme.colors.border};
`

const MessageField = styled(Field).attrs({ as: "textarea"})`
    min-height: 160px;
    resize: vertical;
`

const StyledButton = styled.button`
    display: inline-flex;
    align-items: center;
    gap: 6px;

    padding: 14px 260px;

    border-radius: 12px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    background: linear-gradient(90deg, #4E4B7F 0%, #735681 100%);
    color: white;
    transition: 0.1s ease-in-out;
    
    &:hover {
        background: linear-gradient(90deg, #4E4B7F 0%, #735681 100%);
        color: white;
        cursor: pointer;
        transform: scale(1.02);
    }
`

const StyledLabel = styled.span`
    display: block;
    text-align: center;
    margin: 48px 0 16px 0;
    
    color: ${({ theme }) => theme.colors.textMuted};
    font-size: ${({ theme }) => theme.fontSizes.small};
    font-weight: 700;
    text-transform: uppercase;
`
