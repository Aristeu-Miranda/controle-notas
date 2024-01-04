export interface InputProps extends React.HTMLProps<HTMLInputElement> {
    name?: string;
    type?: string;
    placeholder?: string;
    className: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
