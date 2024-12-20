import Link from "next/link";
import {IconType} from "react-icons";

interface SecondaryButtonProps {
    text: string,
    path: string,
    customClass?: string,
    bgColor?: string,
    textColor?: string,
    customStyle?: string
    Icon?: IconType,
    iconSize?: number,
    iconColor?: string
}

export const SecondaryButton = ({
    path,
    text,
    bgColor,
    textColor,
    customStyle,
    Icon, iconSize, iconColor,
}: SecondaryButtonProps) => {
    return (
        // link components
        <Link href={path}
              className={`
              ${bgColor ? bgColor : "bg-softBlue"}
               ${customStyle ? customStyle : ""}
               ${Icon ? "justify-between" : "justify-center"}   secondary-btn `}
        >
            {/*text*/} <span className={`${textColor ? textColor : "text-white"} font-semibold `}>
                {text}
            </span> {Icon && <Icon size={iconSize} color={iconColor}/>}
        </Link>
    );
};
export default SecondaryButton