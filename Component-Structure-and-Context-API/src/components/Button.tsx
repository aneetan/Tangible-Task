import type { ReactNode } from "react";

export enum ButtonType {
    PRIMARY = "primary",
    SECONDARY = "secondary",
    DANGER = "danger"
}
interface ButtonProps{
    onClick: () => void;
    text: string;
    variant: ButtonType;
    className?: string;
}

const Button:React.FC<ButtonProps> = ({onClick, text, variant = ButtonType.PRIMARY, className=''}) => {
    const baseClasses = "rounded-md font-medium px-4 py-2 transition-colors";
    const variantClasses = {
        [ButtonType.PRIMARY]: "bg-blue-600 text-white hover:bg-blue-700",
        [ButtonType.SECONDARY]: "bg-white text-gray-800 border border-gray-300 hover:bg-gray-50",
        [ButtonType.DANGER]: "bg-red-500 text-white hover:bg-red-700"
    };
  return (
     <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      <div className="flex items-center justify-center space-x-2">
        <span>{text}</span>
      </div>
    </button>
  )
}

export { Button };
