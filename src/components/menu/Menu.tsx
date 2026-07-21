import styled from "styled-components";


export const Menu = (props: { menuItems: Array<string>}) => {
    return (
        <StyledMenu>
            <ul>
                {props.menuItems.map((item, index) => {
                    return <li key={index}>
                        <StyledLink href="">{item}</StyledLink>
                    </li>
                })}
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    ul {
        display: flex;
        gap: 32px;
    }
`

const StyledLink = styled.a`
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: ${({ theme}) => theme.fontSizes.h4};
    color: ${({ theme}) => theme.colors.textSecondary};
    transition: ${({ theme }) => theme.colors.accent} 0.2 ease;
        
    position: relative;
    
    &:hover {
        color: ${({ theme }) => theme.colors.textMuted};
    }
    
    &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -4px;
        width: 0;
        height: 2px;
        background-color: ${({ theme }) => theme.colors.textMuted};

    }
        
    &:hover::after {
        width: 100%;
        transition: width 0.2s ease-out;
    }
    `