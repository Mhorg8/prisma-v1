import React, {MouseEventHandler} from "react";
import {IconType} from "react-icons";

interface PrimaryButtonProps {
    type: "submit" | "button";
    click?: MouseEventHandler<HTMLButtonElement>;
    text: string;
    textColor?: string;
    bgColor?: string;
    Icon?: IconType | null;
    IconSize?: number;
    IconColor?: string;
    customStyle?: string
}

const PrimaryButton: React.FC<PrimaryButtonProps> = (
    {
        type,
        customStyle,
        click,
        text,
        textColor = "text-black", // Default text color
        bgColor, // Default background color
        Icon,
        IconSize = 16, // Default icon size
        IconColor = "currentColor", // Default icon color
    }) => {
    return (
        <button
            className={`${customStyle} ${bgColor ? bgColor : "bg-green"} primary__button`}
            onClick={click}
            type={type}
        >
            <span className={`primary__button-text ${textColor}`}>{text}</span>
            {Icon && <Icon size={IconSize} color={IconColor} className='mb-1'/>}
        </button>
    );
};

export default PrimaryButton;
