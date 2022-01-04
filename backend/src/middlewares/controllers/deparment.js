"use sctrict";

const HTTP = require("http-status");
const ERROR = require("http-errors");
const asyncHandler = require("express-async-handler");
const { httpCodes: { CREATED } } = require("../../tools");
const {
Deparment: {
    create: { createDeparment },
    get: { getAll }
  },
} = require("../../services");

const createNew = asyncHandler(async (req, res, next) => {
  const { body } = req;
  const data = await createDeparment(body);
  if (data) return res.status(HTTP.CREATED).json({ CREATED, data });
  return next(ERROR.BadRequest());
});

const get = asyncHandler(async (req, res, next) => {
  const {
    page, limit
  } = req.query;

  const { data, pagination } = await getAll(page, limit);
  if (data) return res.status(HTTP.OK).json({ data, pagination });
  return next(ERROR.BadRequest());
});


module.exports = {
  createNew,
  get,
};
