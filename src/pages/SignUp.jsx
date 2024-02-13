import {
  Alert,
  Box,
  Button,
  Container,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Header from "../components/header/Header";
import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const regEmail =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const regPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

export const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setpassword] = React.useState('');

  const [open, setOpen] = React.useState(false);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleClick = () => {
    setOpen(true);
  };
  async function onSubmit() {
    handleClick();
    const res = await axios.post(
      "",
      {
        headers: {
          Accept: "application/json",
          "content-type": "application/json",
        },
      },
      {
        name: name,
        email: email,
        password: password,
      }
    );
  }
  return (
    <>
      <Header />
      <Box sx={{ paddingBottom: "50px", paddingTop: "180px" }}>
        <Container sx={{ width: { lg: "45%", md: "70%", sm: "70%" } }}>
          <Stack>
            <Box
              onSubmit={handleSubmit(onSubmit)}
              component="form"
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 3,
              }}
              noValidate
              autoComplete="off"
            >
              <Stack>
                <Typography
                  sx={{
                    fontSize: "1.5rem",
                    paddingBottom: "10px",
                    fontWeight: 500,
                    color: "Black",
                  }}
                >
                  User Name:
                </Typography>
                <TextField
                  type="text"
                  id="Name"
                  label="Name"
                  error={Boolean(errors.names)}
                  helperText={
                    errors.names ? "You should enter your Name" : null
                  }
                  {...register("name", {
                    value: name,
                    onChange: (e) => setName(e.target.value),
                    required: true,
                    maxLength: 20,
                    minLength: 3,
                  })}
                  sx={{ flex: 1 }}
                />
              </Stack>
              <Stack>
                <Typography
                  sx={{
                    fontSize: "1.5rem",
                    paddingBottom: "10px",
                    fontWeight: 500,
                    color: "Black",
                  }}
                >
                  Email Address:
                </Typography>
                <TextField
                  type="email"
                  id="Email"
                  label="Email"
                  error={Boolean(errors.email)}
                  helperText={
                    errors.email ? "You should enter your Email" : null
                  }
                  {...register("email", {
                    value: email,
                    onChange: (e) => setEmail(e.target.value),
                    required: true,
                    pattern: regEmail,
                  })}
                />
              </Stack>
              <Stack>
                <Typography
                  sx={{
                    fontSize: "1.5rem",
                    paddingBottom: "10px",
                    fontWeight: 500,
                    color: "Black",
                  }}
                >
                  Password:
                </Typography>
                <TextField
                  type="text"
                  id="Password"
                  label="Password"
                  error={Boolean(errors.password)}
                  helperText={
                    errors.password
                      ? "You must enter a password consisting of numbers and character"
                      : null
                  }
                  {...register("password", {
                    value: password,
                    onChange: (e) => setpassword(e.target.value),
                    required: true,
                    minLength: 6,
                    pattern: regPassword,
                  })}
                  sx={{ flex: 1, marginBottom: "10px" }}
                />
              </Stack>

              <Stack direction={"row"} gap={2}>
              <Button
                  variant="contained"
                  type="submit"
                  sx={{
                    backgroundColor: "#f7337f",
                    width: { lg: "8rem", xs: "8rem" },
                    height: "3rem",
                    display: "flex",
                    borderRadius: "10px",
                    alignItems: "center",
                    transition: ".70s",
                    cursor: "pointer",
                    "&:hover": {
                      backgroundColor: "#f7337f",
                      fontSize: "1.5rem",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "1rem",
                      color: "white",
                      fontWeight: "600",
                      marginX: "auto",
                    }}
                  >
                    register
                  </Typography>
                </Button>
                <Snackbar
                  open={open}
                  autoHideDuration={3000}
                  onClose={handleClose}
                  anchorOrigin={{ vertical: "top", horizontal: "right" }}
                >
                  <Alert
                    onClose={handleClose}
                    severity="info"
                    sx={{ width: "100%", border: "none" }}
                  >
                    Account was created
                  </Alert>
                </Snackbar>
              </Stack>
            </Box>
          </Stack>
        </Container>
      </Box>
    </>
  );
};
