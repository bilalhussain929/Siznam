import { Box, Button, IconButton, Modal, Typography } from "@mui/material";
import React from "react";
import CancelIcon from "@mui/icons-material/Cancel";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #ffffff",
  boxShadow: 24,
  p: 4,
  maxHeight: "90vh",
  overflowY: "auto",
};

const DeleteEmployee = ({ open, setOpen, employee, onDelete }) => {
  const handleClose = () => {
    setOpen(false);
  };
  const handleDelete = () => {
    onDelete(employee); // Call the parent's delete function
    handleClose(); // Close modal after deletion
  };

  return (
    <Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <IconButton
            onClick={handleClose}
            sx={{ position: "absolute", top: 8, right: 8 }}
          >
            <CancelIcon />
          </IconButton>
          <Typography variant="h5" sx={{ fontWeight: 600 }}>
            Delete Modal
          </Typography>
          <Box
            sx={{
              my: 3,
              p: 2,
              backgroundColor: "#f9f9f9",
              borderRadius: 2,
              boxShadow: 1,
            }}
          >
            <Typography sx={{ fontWeight: "bold", mb: 1 }}>
              Name:{" "}
              <span style={{ fontWeight: "normal" }}>{employee?.name}</span>
            </Typography>
            <Typography sx={{ fontWeight: "bold", mb: 1 }}>
              Email:{" "}
              <span style={{ fontWeight: "normal" }}>{employee?.email}</span>
            </Typography>
            <Typography sx={{ fontWeight: "bold", mb: 1 }}>
              Contact:{" "}
              <span style={{ fontWeight: "normal" }}>{employee?.cont}</span>
            </Typography>
            <Typography sx={{ fontWeight: "bold", mb: 1 }}>
              Bank:{" "}
              <span style={{ fontWeight: "normal" }}>{employee?.bank}</span>
            </Typography>
            <Typography sx={{ fontWeight: "bold", mb: 1 }}>
              Account Number:{" "}
              <span style={{ fontWeight: "normal" }}>{employee?.acNum}</span>
            </Typography>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              sx={{
                backgroundColor: "orange",
                color: "white",
                "&:hover": {
                  backgroundColor: "orange",
                },
              }}
              onClick={handleClose}
            >
              No
            </Button>
            <Button
              sx={{
                backgroundColor: "red",
                color: "white",
                "&:hover": {
                  backgroundColor: "red",
                },
              }}
              onClick={handleDelete}
            >
              Yes
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default DeleteEmployee;
