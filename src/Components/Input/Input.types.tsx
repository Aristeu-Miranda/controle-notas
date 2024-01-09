import { FieldError, UseFormRegister } from "react-hook-form";
import { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name?: string;
    type?: string;
    placeholder?: string;
    className: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: FieldError | undefined;
}
