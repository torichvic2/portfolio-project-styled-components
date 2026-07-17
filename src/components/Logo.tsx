import {Icon} from "./icon/Icon.tsx";


export const Logo = () => {
    return (
        <div>
            <a href="#home" aria-label="Home">
                <Icon iconId={"icon-logo"} width="40" height="40"/>
            </a>
        </div>
    );
};