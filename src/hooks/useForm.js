import { useState } from "react";

export const useForm = (initialForm = {}) => {
  const [formState, setFormState] = useState(initialForm);
  const [error, setError] = useState("");

  const onInputChange = ({ target }) => {
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
