import { FormFieldProps } from "../types/form";

const FormField: React.FC<FormFieldProps> = ({
    type,
    placeholder,
    name,
    register,
    error,
    valueAsNumber
}) => {
    return(
        <>
            <input type={type} placeholder={placeholder} {...register(name, {valueAsNumber})} className="border-2 border-grey rounded-md mt-2 px-2"/>
            {error && <span className="text-lg text-red-500">{error.message}</span>}
        </>
    );
}
export default FormField;