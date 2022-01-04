const fields = require("./fields");

const deparments = {
  deparment: fields.object({
    name: fields.name.required(),
  }),
};

const employees = {
  employee: fields.object({
    name: fields.name.required(),
    department: fields.any,
    salary: fields.salary.required()
  }),
};

module.exports = {
  deparments,
  employees,
};
