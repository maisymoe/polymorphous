import { JSX } from "solid-js";
import { theme } from "..";

interface ButtonProps {
    children?: JSX.Element[] | JSX.Element;
    class?: string;
    onClick: () => void;
}

export default ({ children, onClick, class: className }: ButtonProps) => {
    return (
        <button onClick={onClick} class={`transition-all w-auto font-medium leading-tight py-2 px-4 rounded-[3px] items-center content-center hover:(opacity-50) ${className}`} style={{
            "background-color": theme().rawColors.BRAND_500,
            color: theme().semanticColors.INTERACTIVE_ACTIVE[0],
        }}>
            {children}
        </button>
    );
};