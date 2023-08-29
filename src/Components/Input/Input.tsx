import { InputProps } from "./Input.types"

function Input({ name, label, type, placeholder, className, onChange }: InputProps) {
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input 
            name={name}
            type={type}
            placeholder={placeholder}
            className={className}
            onChange={onChange}
            />
        </div>
    )
}

export default Input