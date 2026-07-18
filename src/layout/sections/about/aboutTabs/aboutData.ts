export type AboutTab = "bio" | "education" | "experience";

export const tabs: { id: AboutTab; label: string }[] = [
    {id: 'bio', label: 'Bio'},
    {id: 'education', label: 'Education'},
    {id: 'experience', label: 'Experience'},
]

export type TimelineEntry = {
    period: string;
    title: string;
    place: string;
    description: string;
};

export const tabContent: { bio: string[] } = {
    bio: [
        "I graduated from Rostov State University of Economics with a degree in commodity expertise, then spent two years at Olofson&Schmidt in St. Petersburg examining food and non-food goods. In 2021, I moved to South Korea, where I spent two years studying Korean language and culture, passing TOPIK level 4, while also building my English up to B1.",
        "Since 2025, I've been learning to program: a year-long frontend development course at IT Incubator plus a 6-month internship on the school's recommendation. Looking for a frontend developer position where I can put my skills to work and keep growing.",
    ],
}

export const education: TimelineEntry[] = [
        {
            period: '2026 — Present',
            title: 'Programming',
            place: 'IT Incubator',
            description: 'Studying at IT Incubator and continuing to learn programming.',
        },
        {
            period: '2023 — 2025',
            title: 'Korean language',
            place: 'South Korea',
            description: 'Studied Korean, reached TOPIK level 4.',
        },
        {
            period: '2021 — 2022',
            title: 'English language',
            place: 'Self-directed study',
            description: 'Went from zero to B1 level.',
        },
        {
            period: '2021',
            title: 'Moved to South Korea',
            place: '',
            description: 'Relocated to South Korea.',
        },
        {
            period: '2014 — 2018',
            title: 'Commodity Expert',
            place: 'Rostov State University of Economics',
            description: 'Degree in commodity science and quality expertise.',
        },
        ];
export const experience: TimelineEntry[] = [
    {
        period: '2025 — Present',
        title: 'Translator',
        place: 'Freelance',
        description: 'Worked as a translator and began self-teaching programming.',
    },
    {
        period: '2019 — 2021',
        title: 'Goods Quality Specialist',
        place: 'Olofson & Schmidt, St. Petersburg',
        description: 'Expertise in food and non-food product quality.',
    },
];

