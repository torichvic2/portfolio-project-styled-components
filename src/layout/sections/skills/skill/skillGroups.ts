export type Skill = {
    id: string;
    iconId: string;
    label: string;
}

export type SkillGroup = {
    id: string;
    iconId: string;
    title: string;
    skills: Skill[];
}

export const skillGroups: SkillGroup[] = [
    {
        id: 'markup-styling',
        iconId: 'icon-skill-markup',
        title: 'Markup & Styling',
        skills: [
            { id: 'html', iconId: 'icon-html', label: 'HTML' },
            { id: 'css', iconId: 'icon-css', label: 'CSS' },
            { id: 'styled-components', iconId: 'icon-styled', label: 'Styled Components' },
        ],
    },
    {
        id: 'programming-languages',
        iconId: 'icon-skill-language',
        title: 'Programming Languages',
        skills: [
            { id: 'js', iconId: 'icon-javascript', label: 'JavaScript' },
            { id: 'ts', iconId: 'icon-typescript', label: 'TypeScript' },
        ],
    },
    {
        id: 'frameworks-tools',
        iconId: 'icon-skill-tools',
        title: 'Frameworks & Tools',
        skills: [
            { id: 'react', iconId: 'icon-react', label: 'React' },
            { id: 'redux', iconId: 'icon-redux', label: 'Redux Toolkit' },
            { id: 'rest', iconId: 'icon-rest', label: 'REST API' },
            { id: 'git', iconId: 'icon-git', label: 'Git & GitHub' },
            { id: 'vite', iconId: 'icon-vite', label: 'Vite' },
            { id: 'codex', iconId: 'icon-codex', label: 'Codex' },
        ],
    },
    {
        id: 'currently-learning',
        iconId: 'icon-skill-learning',
        title: 'Currently Learning',
        skills: [
            { id: 'nextjs', iconId: 'icon-nextjs', label: 'Next.js' },
            { id: 'nodejs', iconId: 'icon-nodejs', label: 'Node.js' },
            { id: 'jest', iconId: 'icon-jest', label: 'Testing (Jest)' },
        ],
    },
];