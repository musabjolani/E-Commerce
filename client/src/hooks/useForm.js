import React, { useEffect } from "react";
import validateData from "./validations";

const useForm = (model) => {
  const [values, setValues] = React.useState(model);
  const [errors, setErrors] = React.useState({});
  const [touched, setTouched] = React.useState({});

  useEffect(() => {
    setErrors(validateData(values, "registrationSchema"));
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
  };

  return { values, errors, touched, handleChange, handleBlur, resetForm };
};

export default useForm;
