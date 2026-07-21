
type IconPropsType = {
    iconId: string
    width?: string
    height?: string
}

export const Icon = (props: IconPropsType) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={props.width || 24} height={props.height || 24}>
            <use href={`#${props.iconId}`} />
        </svg>
        );
};

