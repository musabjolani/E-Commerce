import useForm from "../hooks/useForm";
import { addData } from "../../utils/dbUtils";
import {
  Typography,
  TextField,
  Box,
  Button,
  FormControlLabel,
  Checkbox,
  FormGroup,
  Alert,
} from "@mui/material";
import { useState } from "react";

const Registration = () => {
  const fieldsWidth = { width: "300px" };
  const [errorMessageForms, setErrorMessageForms] = useState("");
  const [submitAttempted, setSubmitAttempted] = useState(false);

  const initialValues = {
    firstName: "",
    lastName: "",
    userName: "",
    password: "",
    allowOtherstoSeeMyOrders: false,
  };

  const { values, errors, touched, handleChange, handleBlur, resetForm } =
    useForm(initialValues, "registrationSchema");

  const submitHandler = async (e) => {
    e.preventDefault();
    setSubmitAttempted(true);
    if (errors && Object.keys(errors).length > 0) return;
    try {
      await addData("http://localhost:3000/api/users/addUser", values);
      resetForm();
      setSubmitAttempted(false);
    } catch (error) {
      setErrorMessageForms(
        error.response ? error.response.data.message : error.message
      );
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <Typography variant="h3" gutterBottom>
        New User Registration
      </Typography>
      <Box sx={{ display: "flow-root", my: 2, ml: 4, paddingLeft: "-110px" }}>
        <Typography variant="h6" gutterBottom>
          First Name
        </Typography>
        <TextField
          variant="outlined"
          size="small"
          sx={{ mb: 3, ...fieldsWidth }}
          name="firstName"
          value={values.firstName}
          onChange={handleChange}
          onBlur={handleBlur}
          {...(errors.firstName &&
            (touched.firstName || submitAttempted) && {
              error: true,
              helperText: errors.firstName,
            })}
        />
        <Typography variant="h6" gutterBottom>
          Last Name
        </Typography>
        <TextField
          variant="outlined"
          size="small"
          sx={{ mb: 3, ...fieldsWidth }}
          name="lastName"
          value={values.lastName}
          onChange={handleChange}
          onBlur={handleBlur}
          {...(errors.lastName &&
            (touched.lastName || submitAttempted) && {
              error: true,
              helperText: errors.lastName,
            })}
        />
        <Typography variant="h6" gutterBottom>
          User Name
        </Typography>
        <TextField
          name="userName"
          variant="outlined"
          size="small"
          sx={{ mb: 3, ...fieldsWidth }}
          value={values.userName}
          onChange={handleChange}
          onBlur={handleBlur}
          {...(errors.userName &&
            (touched.userName || submitAttempted) && {
              error: true,
              helperText: errors.userName,
            })}
        />
        <Typography variant="h6" gutterBottom>
          Password
        </Typography>
        <TextField
          variant="outlined"
          size="small"
          name="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          {...(errors.password &&
            (touched.password || submitAttempted) && {
              error: true,
              helperText: errors.password,
            })}
          type="password"
          sx={{
            mb: 2,
            ...fieldsWidth,
          }}
        />
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                name="allowOtherstoSeeMyOrders"
                checked={values.allowOtherstoSeeMyOrders}
                onChange={handleChange}
              />
            }
            label="Allow others to see my orders"
          />
        </FormGroup>
        <Button
          variant="contained"
          type="submit"
          disabled={Object.keys(errors).length > 0}
          sx={{
            mt: 2,
            backgroundColor: (theme) => theme.palette.secondary.main,

            ...fieldsWidth,
          }}
        >
          Create
        </Button>
        {errorMessageForms && (
          <Box sx={{ mt: 2 }}>
            <Alert severity="error">{errorMessageForms}</Alert>
          </Box>
        )}
      </Box>
    </form>
  );
};
export default Registration;
