"use sctrict";

const {
  Department
} = require("../../models");

const { employees, pagination, deparments } = require("../../middlewares/masks");
const { logger } = require("../../tools");

const getAll = async (page, limit) => {
    
    const options = {
      page: page || 1,
      limit: limit || 5,
      collation: {
        locale: "en",
      },
    };

    const deparmentPaginated = await Department.paginate({}, options)
      .then(async (result) => result)
      .catch((err) => logger.info(err));
  
    const data = {
      data: deparmentPaginated["docs"].map((r) => deparments.deparmentSimple(r)),
      pagination: pagination.paginationLabels(deparmentPaginated),
    };
    
    return data;
  };

  module.exports = {
    getAll,
  };

  