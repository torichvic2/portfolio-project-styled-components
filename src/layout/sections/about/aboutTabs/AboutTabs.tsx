import {AboutTab} from "./aboutData.ts";
import styled from "styled-components";
import {tabs} from "./aboutData.ts";

export type AboutTabsPropsType = {
    activeTab: AboutTab;
    onTabChange: (tab: AboutTab) => void;
}

export const AboutTabs = (props: AboutTabsPropsType) => {
    return (
        <StyledTabs role="tablist" aria-label="About sections">
            {tabs.map((tab) => (
                <StyledTabButton
                key={tab.id}
                type="button"
                role="tab"
                $isActive={tab.id === props.activeTab}
                aria-selected={tab.id === props.activeTab}
                onClick={() => props.onTabChange(tab.id)}
                >
                    {tab.label}
                </StyledTabButton>
            ))}
        </StyledTabs>
    );
};

const StyledTabs = styled.div`
    display: flex;
    gap: 32px;

    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    transition: border-bottom-width 0.7s;
    
`

const StyledTabButton = styled.button<{ $isActive: boolean }>`
    position: relative;
    cursor: pointer;
    color: ${({ theme, $isActive }) =>
    $isActive ? theme.colors.text : theme.colors.textMuted};
    text-align: left;
    padding: 12px 0;
    border: none;
    background: none;

    &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: -1px; /* перекрывает border-bottom контейнера */
        width: 100%;
        height: 2px;
        background: ${({ theme }) => theme.colors.borderHover};
        transform: scaleX(${({ $isActive }) => ($isActive ? 1 : 0)});
        transform-origin: left;
        transition: transform 0.3s ease;
    }

    &:hover::after {
        transform: scaleX(1);
    }
`;