import {useState} from "react";
import {LanguageSwitcherButton} from "../languageSwitcherButton/LanguageSwitcherButton.tsx";

type Language = "EN" | "RU" | "KO"
const languages: Language[] = ["EN", "RU", "KO"]

export const LanguageSwitcher = () => {
    const [activeLang, setActiveLang] = useState<Language>("EN");
    return (
        <div role="group" aria-label="Languages Switcher">
            {languages.map((lang) => (
                <LanguageSwitcherButton
                key={lang}
                lang={lang}
                isActive={lang === activeLang}
                onSelect={setActiveLang}
                />
            ))}
        </div>
    );
};

