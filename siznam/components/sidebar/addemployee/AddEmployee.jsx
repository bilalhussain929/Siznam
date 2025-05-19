import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { IconButton, TextField } from "@mui/material";
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

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  cont: Yup.string()
    .matches(/^\d{10}$/, "Contact must be exactly 10 digits")
    .required("Contact is required"),
  bank: Yup.string().required("Bank name is required"),
  acNum: Yup.string()
    .matches(/^\d+$/, "Account number must be numeric")
    .required("Account number is required"),
});

const AddEmployee = ({ open, setOpen, handleAdd }) => {
  const handleClose = () => {
    setOpen(false);
  };

  const initialValues = {
    name: "",
    email: "",
    cont: "",
    bank: "",
    acNum: "",
  };

  return (
    <Box sx={{ maxHeight: "90vh", overflowY: "auto" }}>
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
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add New User
          </Typography>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              console.log("Submitted values:", values);
              handleAdd(values);
              setSubmitting(false);
              handleClose();
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <form
                onSubmit={handleSubmit}
                style={{ display: "flex", flexDirection: "column" }}
              >
                <Typography>Name</Typography>
                <TextField
                  type="text"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  sx={{ mb: 1 }}
                  error={Boolean(errors.name && touched.name)}
                  helperText={touched.name && errors.name}
                />

                <Typography>Email</Typography>
                <TextField
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  sx={{ mb: 1 }}
                  error={Boolean(errors.email && touched.email)}
                  helperText={touched.email && errors.email}
                />

                <Typography>Contact</Typography>
                <TextField
                  type="text"
                  name="cont"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.cont}
                  sx={{ mb: 1 }}
                  error={Boolean(errors.cont && touched.cont)}
                  helperText={touched.cont && errors.cont}
                />

                <Typography>Bank</Typography>
                <TextField
                  type="text"
                  name="bank"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.bank}
                  sx={{ mb: 1 }}
                  error={Boolean(errors.bank && touched.bank)}
                  helperText={touched.bank && errors.bank}
                />

                <Typography>Account Num</Typography>
                <TextField
                  type="text"
                  name="acNum"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.acNum}
                  sx={{ mb: 1 }}
                  error={Boolean(errors.acNum && touched.acNum)}
                  helperText={touched.acNum && errors.acNum}
                />

                <Button
                  variant="contained"
                  disabled={isSubmitting}
                  type="submit"
                >
                  Submit
                </Button>
              </form>
            )}
          </Formik>
        </Box>
      </Modal>
    </Box>
  );
};

export default AddEmployee;
