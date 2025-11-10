import Joi from "joi";

const schemas = {
  registrationSchema: Joi.object({
    userName: Joi.string().min(3).max(30).required().label("Username"),
    password: Joi.string()
      .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
      .required()
      .label("Password"),
    firstName: Joi.string().min(1).max(50).required().label("First Name"),
    lastName: Joi.string().min(1).max(50).required().label("Last Name"),
    allowOtherstoSeeMyOrders: Joi.boolean().label(
      "Allow Others to See My Orders"
    ),
  }),
  categoriesSchema: Joi.object({
    name: Joi.string().min(1).max(50).required().label("Category Name"),
  }),
};

const validateData = (data, schema) => {
  const validationSchema = schemas[schema];
  const { error } = validationSchema.validate(data, {
    abortEarly: false,
  });
  if (!error) return {};
  const errors = {};
  error.details.map((item) => (errors[item.context.key] = item.message));
  return errors;
};

export default validateData;
