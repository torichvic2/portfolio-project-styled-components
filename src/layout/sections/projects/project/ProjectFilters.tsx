import styled from "styled-components";
import {filters, ProjectCategory} from "./projectData.ts"

type ProjectFiltersPropsType = {
    activeFilter: 'all' | ProjectCategory;
    onFilterChange: (filter: 'all' | ProjectCategory) => void;
}

export const ProjectFilters = (props: ProjectFiltersPropsType) => {
    return (
        <StyledFilters role="group" aria-label="Projects Filters">
            {filters.map((filter) =>
                    <StyledFilterButton
                        key={filter.id}
                        type="button"
                        $isActive={filter.id === props.activeFilter}
                        aria-pressed={filter.id === props.activeFilter}
                        onClick={() => props.onFilterChange(filter.id)}
                    >
                        {filter.label}
                    </StyledFilterButton>
                    )}
        </StyledFilters>
    );
};


const StyledFilters = styled.div`
    display: flex;
    gap: 8px;
    margin-bottom: 36px;
`

const StyledFilterButton = styled.button<{ $isActive: boolean }>`
    font-size: ${({theme}) => theme.fontSizes.small};
    width: fit-content;
    padding: 10px 15px;
    background-color: ${({theme}) => theme.colors.bgAlt};
    border-radius: 24px;
    border: 1px solid ${({theme}) => theme.colors.border};
    color: ${({theme}) => theme.colors.textSecondary};


    &:hover {
        background-color: ${({theme}) => theme.colors.textMuted};
        color: white;
        cursor: pointer;
    }
`
