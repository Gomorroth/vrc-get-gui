import { ReactNode } from "react";

type Props = {
    children: ReactNode,
    className?: string
} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export default function BorderButton({children, className, ...props}: Props)
{
    return <button 
    className={`hover:scale-105 transition-transform ease-out duration-300 border rounded-3xl py-1 px-8 text-center font-extrabold ${className}`} {...props}>{children}</button>
}