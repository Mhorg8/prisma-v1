interface InputProps {
    label: string,
    type: "text" | "password" | "email",
    placeholder?: string,
    name: string,
    inputStyle?: string,
    containerStyle?: string
}

const Input = ({
                   label,
                   type,
                   placeholder,
                   name,
                   inputStyle,
                   containerStyle,
               }: InputProps) => {
    return (
        <div className={`flex flex-col items-start w-full gap-1  ${containerStyle}`}>
            <label className="capitalize text-base font-bold">{label}</label>
            <input type={type} placeholder={placeholder} name={name}
                   className={`input ${inputStyle ? inputStyle : ""}`}/>
        </div>
    );
};

export default Input;