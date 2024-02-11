import { InputFieldProps } from "../InputField/InputField";

export type FormInputFieldProps = Partial<Omit<InputFieldProps, 'name'>> & {
    /**
     * The input field name within the form usage
     */
    name: string;
};