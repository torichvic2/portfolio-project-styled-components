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
    
`

const StyledTabButton = styled.button<{ $isActive: boolean }>`
    
`