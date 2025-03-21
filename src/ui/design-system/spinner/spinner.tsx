import { clsx } from "clsx";

interface Props {
    size?: "small" | "medium" | "large";
    variant?: "primary" | "white";
}

export const Spinner = ({size = "medium", variant = "primary"}: Props) => {
    let variantStyles: string = "";
    let sizeStyles: string = "";

    switch (size) {
        case "small":
            sizeStyles = "w-5 h-5";
            break;
        case "medium": // Default
            sizeStyles = "w-9 h-9";
            break;
        case "large":
            sizeStyles = "w-12 h-12";
            break;
    }

    switch (variant) {
        case "primary": // Default
            // On utilise la même classe text-primary que dans le composant Button
            variantStyles = "text-primary";
            break;
        case "white":
            // Correction de text-red (qui n'existe peut-être pas) à text-white
            variantStyles = "text-white";
            break;
    }

    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid"
            className={clsx(
                sizeStyles, 
                variantStyles,
                "animate-spin"
            )}
        >
            <g>
                <g transform="matrix(1,0,0,1,0,0)">
                    <path 
                        strokeWidth="12" 
                        stroke="currentColor" 
                        fill="none"
                        d="M50 15A35 35 0 1 0 74.74873734152916 25.251262658470843"
                    />
                    <path 
                        fill="currentColor" 
                        d="M49 3L49 27L61 15L49 3"
                    />
                </g>
            </g>
        </svg>
    );
};


