import React, { useState } from "react";
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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  {
    name: "bilal",
    email: "bilal@gmail.com",
    cont: "999999",
    bank: "standard charted",
    acNum: "562563",
  },
];

const Draft = () => {
  const [openAdd, setOpenAdd] = useState(false);
  const openAddModal = () => {
    console.log("clicked");
  };
  return (
    <div>
      <Typography
        sx={{
          m: 2,
          color: "white",
        }}
      >
        Draft Record
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
            {rows.map((row) => (
              <TableRow
                key={row.name}
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
    </div>
  );
};

export default Draft;
