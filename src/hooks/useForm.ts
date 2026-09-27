import { useState, type ChangeEvent } from "react";

type FormFieldElement = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;

export const useForm = <T extends Record<string, string>>(initialForm: T = {} as T) => {
  
  const [formState, setFormState] = useState<T>(initialForm);
  const [error, setError] = useState("");

  const onInputChange = ({ target }: ChangeEvent<FormFieldElement>) => {
    const { name, value } = target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
    setError("");
  };

  return {
    ...formState,
    formState,
    error,
    setError,
    onInputChange,
    onResetForm,
  };
};
