import clsx from "clsx";

interface Props {
    variant?: 
        "display" 
        | "h1" 
        | "h2" 
        | "h3" 
        | "h4" 
        | "h5" 
        | "lead" 
        | "body-lg" 
        | "body-base" 
        | "body-sm" 
        | "caption1" 
        | "caption2" 
        | "caption3" 
        | "caption4";
    component?: "h1" | "h2" | "h3" | "h4" | "h5" | "p" | "div" | "span";
    theme?: "black" | "gray" | "white" | "primary" | "secondary";
    weigth?: "regular" | "medium";
    className?: string;
    children: React.ReactNode;
}

export const Typography: React.FC<Props> = ({ 
    variant = "h3", 
    theme = "black",
    weigth = "regular",
    component = "div", 
    className,
    children }) => {
    const Component = component;
  
    let variantStyles: string = "", colorStyles: string =""; 

    switch (variant) {
        case "display":
            variantStyles = "text-8xl";
            break;
        case "h1":
            variantStyles = "text-7xl";
            break;
        case "h2":
            variantStyles = "text-6xl";
            break;
        case "h3": //default
            variantStyles = "text-5xl";
            break;
        case "h4":
            variantStyles = "text-4xl";
            break;
        case "h5":
            variantStyles = "text-3xl";
            break;
        case "lead":
            variantStyles = "text-2xl";
            break;
        case "body-lg":
            variantStyles = "text-lg";
            break;
        case "body-base": 
            variantStyles = "text-base";
            break;
        case "body-sm": 
            variantStyles = "text-sm";
            break;
        case "caption1": 
            variantStyles = "text-caption1";
            break;
        case "caption2": 
            variantStyles = "text-caption2";
            break;
        case "caption3": 
            variantStyles = "text-caption3";
            break;
        case "caption4": 
            variantStyles = "text-caption4";
            break;
    }

    switch (theme) {
        case "black":
            colorStyles = "text-gray";
            break;
        case "gray":
            colorStyles = "text-gray-700";
            break;
        case "white":
            colorStyles = "text-white";
            break;
        case "primary":
            colorStyles = "text-primary";
            break;
        case "secondary":
            colorStyles = "text-secondary";
            break;
        default:
            break;
    }

    return <Component 
    className={clsx(
        variantStyles, 
        colorStyles,
        weigth === "medium" && "font-medium", 
        className
        )}
    >
        {children}</Component>;
  };
