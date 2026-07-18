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
    
`

const StyledFilterButton = styled.button<{ $isActive: boolean }>`

`