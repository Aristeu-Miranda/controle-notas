import { ButtonHTMLAttributes, ReactNode } from "react";

export interface BotaoProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className: string;
    children: ReactNode;
}