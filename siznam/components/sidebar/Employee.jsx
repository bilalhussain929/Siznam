import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IconButton, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import Box from "@mui/material/Box";
import DeleteIcon from "@mui/icons-material/Delete";
import AddBoxIcon from "@mui/icons-material/AddBox";
import AddEmployee from "./addemployee/addEmployee";
import UpdateEmployee from "./addemployee/UpdateEmployee";
import DeleteEmployee from "./addemployee/DeleteEmployee";

const Employee = () => {
  const [openAdd, setOpenAdd] = useState(false);
  const [edit, setEdit] = useState(false);
  const [remove, setRemove] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [employees, setEmployees] = useState(() => {
    const saved = localStorage.getItem("employees");
    return saved
      ? JSON.parse(saved)
      : [
          {
            name: "bilal",
            email: "bilal@gmail.com",
            cont: "9999999999",
            bank: "standard charted",
            acNum: "562563",
          },
        ];
  });
  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);
  const openAddModal = () => {
    setOpenAdd(true);
    console.log("clicked");
  };
  const handleAdd = (newEmployee) => {
    setEmployees((prev) => [...prev, newEmployee]);
  };
  const openEditModal = () => {
    setEdit(true);
    selectedEmployee(row);
  };
  const handleUpdate = (updatedEmployee) => {
    setEmployees((prev) =>
      prev.map((emp) =>
        emp.email === updatedEmployee.email ? updatedEmployee : emp
      )
    );
  };
  const handleDelete = (employeeToDelete) => {
    setEmployees((prev) =>
      prev.filter((emp) => emp.email !== employeeToDelete.email)
    );
  };
  return (
    <div>
      <Typography
        sx={{
          m: 2,
          color: "white",
        }}
      >
        Employee Record
      </Typography>
      <TableContainer component={Paper}>
        <Box>
          <IconButton
            sx={{
              backgroundColor: "blue",
              color: "white",
              borderRadius: "4px",
              "&:hover": {
                backgroundColor: "blue",
                color: "white",
              },
            }}
            variant="contained"
            onClick={openAddModal}
          >
            <Typography>Add</Typography>
            <AddBoxIcon />
          </IconButton>
        </Box>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Contact</TableCell>
              <TableCell>Bank</TableCell>
              <TableCell>Account No</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employees.map((row, index) => (
              <TableRow
                key={row.index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.cont}</TableCell>
                <TableCell>{row.bank}</TableCell>
                <TableCell>{row.acNum}</TableCell>
                <TableCell>
                  <Box>
                    <IconButton
                      sx={{
                        backgroundColor: "green",
                        color: "white",
                        borderRadius: "4px",
                        "&:hover": {
                          backgroundColor: "green",
                          color: "white",
                        },
                      }}
                      onClick={() => {
                        setSelectedEmployee(row);
                        setEdit(true);
                      }}
                    >
                      <EditIcon />
                      <Typography>Edit</Typography>
                    </IconButton>
                    <IconButton
                      sx={{
                        backgroundColor: "orange",
                        color: "white",
                        borderRadius: "4px",
                        "&:hover": {
                          backgroundColor: "orange",
                          color: "white",
                        },
                      }}
                      onClick={() => {
                        setSelectedEmployee(row);
                        setRemove(true);
                      }}
                    >
                      <DeleteIcon />
                      <Typography>Delete</Typography>
                    </IconButton>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <AddEmployee open={openAdd} setOpen={setOpenAdd} handleAdd={handleAdd} />
      <UpdateEmployee
        open={edit}
        setOpen={setEdit}
        employee={selectedEmployee}
        setEmployee={setSelectedEmployee}
        onUpdate={handleUpdate}
      />
      <DeleteEmployee
        open={remove}
        setOpen={setRemove}
        employee={selectedEmployee}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default Employee;
