"use client";

import { useState } from "react";
import { type ComponentProps } from "react";

type AppInputProps = ComponentProps<"input"> & {
    label?: string;
    helpText?: string;
    errorMessage?: string;
    maxLength?: number;
    hasStar?: boolean;
};

const AppInput = ({
    maxLength,
    className,
    hasStar,
    errorMessage,
    label,
    helpText,
    onChange,
    onBlur,
    ...rest
}: AppInputProps) => {
    const [value, setValue] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [touched, setTouched] = useState(false);

    const validate = (val: string) => {
        if (maxLength && val.length > maxLength) {
            setError(errorMessage || `حداکثر ${maxLength} کاراکتر مجاز است`);
        } else {
            setError(null);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const tempValue = e.target.value;
        setValue(tempValue);
        validate(tempValue);

        if (onChange) onChange(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        setTouched(true);
        validate(value);

        if (onBlur) onBlur(e);
    };

    return (
        <div className="flex flex-col gap-1 w-[300px]">
            {label && (
                <label className="mb-1 text-gray-700">
                    {hasStar && <span className="text-red-500 ml-2">*</span>}
                    {label}
                </label>
            )}

            <input
                value={value}
                onChange={handleChange}
                onBlur={handleBlur}
                // maxLength={maxLength ? maxLength + 1 : undefined}  // if i wanted to make it to get maxlenght to prvent it to add more char
                {...rest}
                className={`border px-3 w-full py-2 rounded-md text-sm outline-none transition-all 
                     ${error ? "border-red-500 focus:ring-red-300" : "border-gray-300 focus:ring-blue-300"}
                     ${className || "bg-white"}
                 `}
            />

            {!error && helpText && (
                <span className="text-xs text-gray-500">{helpText}</span>
            )}

            {(error || touched) && (
                <span className="text-xs text-red-500">{error}</span>
            )}

            {/* -------------- Option one --------------- */}

            {/* {error && (
                <span className="text-xs text-red-500">{error}</span>
            )} */}

            {/* -------------- Option two --------------- */}

            {/* {error && (
                <span className="text-xs text-red-500">{errorMessage}</span>
            )} */}
        </div>
    );
};

export default AppInput;