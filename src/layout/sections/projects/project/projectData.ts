

export type ProjectGroups = {
    id: string;
    src: string;
    alt: string;
    title: string;
    description: string;
    techTags: string[];
    demoUrl: string;
    codeUrl: string;
}

export const ProjectGroups: ProjectGroups[] = [
    {
        id: "cozy-store",
        src: "https://it-incubator.io/education",
        alt: "Cozy Store — E-commerce Platform",
        title: "Cozy Store — E-commerce Platform",
        description: "Online shop for designer furniture with functional shopping cart, product details, dynamic pricing, filters, and localized UI translation support.",
        techTags: ["React", "Redux Toolkit", "REST API", "Tailwind CSS"],
        demoUrl: "#",
        codeUrl: "#",
    },
    {
        id: "devspace-social-network",
        src: "https://it-incubator.io/education",
        alt: "DevSpace — Social Network",
        title: "DevSpace — Social Network",
        description: "A platform for developers with interactive profiles, posts feed, instant chat panels, tech tags filtering, and user authentication workflows.",
        techTags: ["React", "TypeScript", "Redux Toolkit", "Styled Components"],
        demoUrl: "#",
        codeUrl: "#",
    },
    {
        id: "food-delivery",
        src: "https://it-incubator.io/education",
        alt: "FoodDelivery — Pet Project",
        title: "FoodDelivery — Pet Project",
        description: "Responsive mobile-first meal ordering dashboard featuring map coordination, order tracking, real-time total updates, and local storage state persistence.",
        techTags: ["React", "TypeScript", "Redux Toolkit", "Styled Components"],
        demoUrl: "#",
        codeUrl: "#",
    },
    {
        id: "task-pulse",
        src: "https://it-incubator.io/education",
        alt: "TaskPulse — Agile Board",
        title: "TaskPulse — Agile Board",
        description: "Kanban boards management with task status flow columns, story points calculator, team assignees toggling, and history log.",
        techTags: ["React", "TypeScript", "Redux Toolkit", "Styled Components"],
        demoUrl: "#",
        codeUrl: "#",
    },
]