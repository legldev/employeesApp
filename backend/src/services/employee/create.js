"use sctrict";

const { Employee } = require("../../models");

const createEmployee = async (body) => {

    const employeeBody = body;
    const employee = new Employee(employeeBody);
    
    return employee
      .save()
      .then(() => employee)
      .catch((error) => error);
  };

module.exports = {
    createEmployee,
};
