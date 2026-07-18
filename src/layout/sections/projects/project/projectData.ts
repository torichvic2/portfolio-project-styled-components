import cozyStoreImg from "../../../../assets/images/project-cozy-store.webp";
import devspaceSocialNetwork from "../../../../assets/images/project-devspace.webp";
import ownerDashboard from "../../../../assets/images/project-owner-dashboard.webp";
import tutokMpv from "../../../../assets/images/project-tutok.webp";

export type ProjectCategory =
    | 'all'
    | 'course'
    | 'pet'
    | 'react'
    | 'redux'
    | 'js'
    | 'auth'
    | 'api'
    | 'nodejs'
    | 'MongoDB'
    | 'RTK Query'
    | 'fullstack'


export const filters: { id: 'all' | ProjectCategory; label: string }[] = [
    { id: 'all', label: 'All' },
    { id: 'course', label: 'Course projects' },
    { id: 'pet', label: 'Pet projects' },
    { id: 'fullstack', label: 'Fullstack projects' },
];

export type ProjectData = {
    id: string;
    src: string;
    alt: string;
    title: string;
    description: string;
    techTags: string[];
    demoUrl: string;
    codeUrl: string;
    categories: ProjectCategory[];
}

export const ProjectsGroups: ProjectData[] = [
    {
        id: "cozy-store",
        src: cozyStoreImg,
        alt: "Cozy Store — E-commerce Platform",
        title: "Cozy Store — E-commerce Platform",
        description: "Online shop for designer furniture with functional shopping cart, product details, dynamic pricing, filters, and localized UI translation support.",
        techTags: ["React", "Redux Toolkit"],
        categories: ["course", "react", "redux", "fullstack"],
        demoUrl: "https://it-incubator.io/education",
        codeUrl: "https://it-incubator.io/education",
    },
    {
        id: "devspace-social-network",
        src: devspaceSocialNetwork,
        alt: "DevSpace — Social Network",
        title: "DevSpace — Social Network",
        description: "A platform for developers with interactive profiles, posts feed, instant chat panels, tech tags filtering, and user authentication workflows",
        techTags: ["React", "TypeScript"],
        categories: ["pet", "js", "auth", "api"],
        demoUrl: "https://it-incubator.io/education",
        codeUrl: "https://it-incubator.io/education",
    },
    {
        id: "owner-dashboard",
        src: ownerDashboard,
        alt: "Owner dashboard — Pet Project",
        title: "Owner dashboard — Pet Project",
        description: "Owner dashboard for beauty and personal-care service providers, featuring profile visibility toggle, service listing management with pricing, and performance stats (views, responses, completed bookings) across responsive layouts",
        techTags: ["Redux Toolkit", "Styled Components"],
        categories: ["course", "react", "redux"],
        demoUrl: "https://it-incubator.io/education",
        codeUrl: "https://it-incubator.io/education",
    },
    {
        id: "tutok-mvp",
        src: tutokMpv,
        alt: "TutOK — Service Booking Platform",
        title: "TutOK — Service Booking Platform",
        description: "Booking platform MVP for beauty and personal-care services, featuring role-based views (client/master), a service listing manager, and responsive layouts for mobile, tablet, and desktop",
        techTags: ["React", "TypeScript", "Redux Toolkit", "Styled Components"],
        categories: ["pet", "js", "auth", "api"],
        demoUrl: "https://it-incubator.io/education",
        codeUrl: "https://it-incubator.io/education",
    },
]