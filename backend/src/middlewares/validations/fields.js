const ERROR = require("http-errors");
const Joi = require("joi");

const joi = Joi.defaults((schema) => {
  const custom = schema.error((error) => {
    if (error[0].isJoiError) return error;
    return ERROR(400, `INVALID_${error[0].local.key.toUpperCase() || "REQUEST"}`, { isJoiError: true });
  });
  custom.prefs({
    abortEarly: true,
    allowUnknown: false,
    errors: {
      render: false,
    },
  });
  return custom;
});

const fields = {
  name: joi.string().min(3).max(256).alphanum(),
  object: joi.object,
  array: joi.array,
  department: joi.string(),
  salary: joi.number().greater(0),
  any: joi.any(),
};
  
module.exports = fields;
