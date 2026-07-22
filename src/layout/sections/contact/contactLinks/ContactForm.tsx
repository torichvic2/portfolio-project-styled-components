import {useState} from 'react'
import emailjs from '@emailjs/browser'
import styled from 'styled-components'
import {Icon} from "../../../../components/icon/Icon.tsx";

const SERVICE_ID = 'service_m3whj1o'
const TEMPLATE_ID = '{{from_email}}'
const PUBLIC_KEY = 'syUJam49flZ2JAsQa'


export const ContactForm = () => {
    const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setStatus('sending')

        try {
            await emailjs.send(
                SERVICE_ID,
                TEMPLATE_ID,
                {from_name: name, from_email: email, message},
                {publicKey: PUBLIC_KEY}
            )
            setStatus('sent')
            setName('')
            setEmail('')
            setMessage('')
        } catch (err) {
            console.error(err)
            setStatus('error')
        }
        return (
            <StyledForm onSubmit={handleSubmit}>
                <StyledBlock>
                    <Field type="text"
                           placeholder="Name"
                           value={name}
                           onChange={(e) => setName(e.target.value)}
                           required/>
                    <Field type="email"
                           placeholder="Email"
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                           required/>
                </StyledBlock>
                <MessageField placeholder="Message..."
                              value={message}
                              onChange={(e) => setMessage(e.target.value)}
                              required/>
                <SubmitButton type="submit" disabled={status === 'sending'}>
                    <Icon iconId="icon-mail"/>
                    {status === 'sending' ? 'Sending...' : 'Send'}
                </SubmitButton>
                {status === 'sent' && <StatusText $type="success">Message sent!</StatusText>}
                {status === 'error' && <StatusText $type="error">Error, please try again later</StatusText>}
            </StyledForm>
        );
    };
}
    const StyledForm = styled.form`
        max-width: 720px;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 24px;

        border-radius: 24px;
        border: 1px solid ${({theme}) => theme.colors.border};
        padding: 32px;
        background-color: ${({theme}) => theme.colors.bgAlt};
    `

    const StyledBlock = styled.div`
        display: flex;
        gap: 16px;
    `

    const Field = styled.input`
        padding: 16px;
        width: 100%;
        border-radius: 12px;
        border: 1px solid ${({theme}) => theme.colors.border};
    `

    const MessageField = styled(Field).attrs({as: "textarea"})`
        min-height: 160px;
        resize: vertical;
    `

    const SubmitButton = styled.button`
        display: inline-flex;
        align-items: center;
        gap: 6px;

        padding: 14px 250px;

        border-radius: 12px;
        border: 1px solid ${({theme}) => theme.colors.border};
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
    const StatusText = styled.p<{ $type: 'success' | 'error' }>`
        color: ${({$type, theme}) => ($type === 'success' ? theme.accent : 'crimson')};
        font-size: 14px;
    `