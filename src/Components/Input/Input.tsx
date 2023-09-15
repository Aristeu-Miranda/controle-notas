import { InputProps } from "./Input.types"

function Input({ name, type, placeholder, className, onChange }: InputProps) {
    return (
        <div>
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