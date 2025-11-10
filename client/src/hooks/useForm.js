import React, { useEffect } from "react";
import validateData from "./validations";

const useForm = (model, validationSchema) => {
  const [values, setValues] = React.useState(model);
  const [errors, setErrors] = React.useState({});
  const [touched, setTouched] = React.useState({});
  const [submitAttempted, setSubmitAttempted] = React.useState(false);

  useEffect(() => {
    setErrors(validateData(values, validationSchema));
  }, [values]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setValues({
      ...values,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const resetForm = () => {
    setValues(model);
    setTouched({});
    setErrors({});
    setSubmitAttempted(false);
  };

  return {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    resetForm,
    submitAttempted,
    setSubmitAttempted,
  };
};

export default useForm;
