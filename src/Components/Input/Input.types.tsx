export interface InputProps 
    extends Omit<React.HTMLProps<HTMLInputElement>, "size"> {
    name: string;
    type?: string;
    placeholder?: string;
    className: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
