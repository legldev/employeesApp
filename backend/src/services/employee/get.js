"use sctrict";

const {
  Employee
} = require("../../models");

const { employees, pagination } = require("../../middlewares/masks");
const { logger } = require("../../tools");

const getAll = async (page, limit) => {
    
    const options = {
      page: page || 1,
      limit: limit || 5,
      collation: {
        locale: "en",
      },
    };

    const employeePaginated = await Employee.paginate({}, options)
      .then(async (result) => result)
      .catch((err) => logger.info(err));

    const populateDeparments = await Employee.populate(employeePaginated.docs, { path: "department" })
      .then(async (data) => data)
      .catch((err) => logger.info(err));
  
    const data = {
      data: populateDeparments.map((r) => employees.employeeSimple(r)),
      pagination: pagination.paginationLabels(employeePaginated),
    };
    
    return data;
  };

  module.exports = {
    getAll,
  };

  