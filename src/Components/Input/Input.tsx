import { InputProps } from "./Input.types"
import { useForm } from "react-hook-form";

function Input({ name, type, placeholder, className, error, onChange}: InputProps) {
    return (
        <div>
            <input 
            name={name}
            type={type}
            placeholder={placeholder}
            className={className}
            onChange={onChange}
            />
            {error && <span className="block text-xs text-red-700">{error.message}</span>}
        </div>
    )
}

export default Input