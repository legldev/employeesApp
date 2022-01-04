"use sctrict";

const express = require("express").Router;

const app = express();
const { validations: { validator, schemas: { deparments, employees } } } = require("../middlewares");

// ---------------- Routes Controllers ---------------------------------------- //

const {
  employee, deparment,
} = require("../middlewares/controllers");

// ---------------- Employee ---------------------------------------- //

app.post("/employee", validator.body(employees.employee), employee.createNew);
app.get("/employee", employee.get);

app.post("/deparment", validator.body(deparments.deparment), deparment.createNew);
app.get("/deparment", deparment.get);

module.exports = app;
