import { InputProps } from "./Input.types"

function Input({ name, label, type, placeholder, className }: InputProps) {
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input 
            name={name}
            type={type}
            placeholder={placeholder}
            className={className}
            />
        </div>
    )
}

export default Input