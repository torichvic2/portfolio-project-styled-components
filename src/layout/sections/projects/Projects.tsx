import {useState} from "react";
import styled from "styled-components";
import {SectionHeading} from "../../../components/sectionHeading/SectionHeading.tsx";
import type {ProjectCategory} from "./project/projectData.ts"
import {ProjectsGroups} from "./project/projectData.ts"
import {ProjectFilters} from "./project/ProjectFilters.tsx";
import {ProjectCard} from "./project/ProjectCard.tsx";
import {Container} from "../../../components/container.ts";

export const Projects = () => {
    const [activeFilter, setActiveFilter] = useState<'all' | ProjectCategory>(
        'all',
    );

    const filteredProjects =
        activeFilter === 'all'
            ? ProjectsGroups
            : ProjectsGroups.filter((project) =>
                project.categories.includes(activeFilter),
            );

    return (
        <StyledProjects>
            <Container>
                <SectionHeading eyebrow="SELECTED WORK" title="Course & pet projects"/>

                <ProjectFilters
                    activeFilter={activeFilter}
                    onFilterChange={setActiveFilter}
                />

                <StyledProjectsGrid>
                    {filteredProjects.map((project) => (
                        <ProjectCard key={project.id} {...project}/>
                    ))}
                </StyledProjectsGrid>
            </Container>
        </StyledProjects>
    );
};

const StyledProjects = styled.section`

`

const StyledProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
`;
