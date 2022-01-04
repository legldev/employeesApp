
const employeeSimple = (row) => ({
  id: row._id,
  name: row.name,
  department: row.department.name,
  salary: row.salary,
});


module.exports = {
  employeeSimple, 
};
