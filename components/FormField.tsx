"use client";

import { Controller, Control, FieldValues, Path } from "react-hook-form";

import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

interface FormFieldProps<T extends FieldValues> {
    control: Control<T>;
    name: Path<T>;
    label: string;
    placeholder?: string;
    type?: "text" | "email" | "password";
}

const FormField = <T extends FieldValues>({
                                              control,
                                              name,
                                              label,
                                              placeholder,
                                              type = "text",
                                          }: FormFieldProps<T>) => {
    return (
        <Controller
            control={control}
            name={name}
            render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={name}>{label}</FieldLabel>
                    <Input
                        {...field}
                        id={name}
                        type={type}
                        placeholder={placeholder}
                        aria-invalid={fieldState.invalid}
                    />
                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
            )}
        />
    );
};

export default FormField;
