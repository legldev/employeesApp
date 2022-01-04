"use sctrict";

const { Department } = require("../../models");

const createDeparment = async (body) => {

    const deparmentBody = body;
    const deparment = new Department(deparmentBody);
    
    return deparment
      .save()
      .then(() => deparment)
      .catch((error) => error);
  };

module.exports = {
    createDeparment,
};
