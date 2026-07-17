type Language = "EN" | "RU" | "KO"
type LanguageSwitcherButtonPropsType = {
    lang: Language,
    isActive: boolean,
    onSelect: (lang: Language) => void,
}

export const LanguageSwitcherButton = (props: LanguageSwitcherButtonPropsType) => {
    return (
        <button type="button" aria-pressed={props.isActive} onClick={() => props.onSelect(props.lang)}>
            {props.lang}
        </button>

    );
};

