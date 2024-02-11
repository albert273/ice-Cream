import Header from "../components/header/Header";
import { Alert, Button, Snackbar, Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useDispatch, useSelector } from "react-redux";
import { clear } from "../redux/slice/buyProduct";
import { Link } from "react-router-dom";
import { deleteFromCart } from "../redux/slice/SliceToCart";

const BuyForm = () => {
  // @ts-ignore
  const Buy = useSelector((state) => state.buy);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
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
  const onSubmit = () => {
    console.log("data");
    handleClick();
  };

  console.log(watch("example"));
  return (
    <>
      <Header />
      <Box sx={{ height: "200px" }}></Box>

      {Buy.map((product) => (
        <Stack
          direction={"row"}
          justifyContent={"space-around"}
          width={"90%"}
          marginBottom={"50px"}
          key={product.id}
          sx={{ display: "flex" }}
        >
          <Box>
            <img src={product.img} alt="imgProduct" />
          </Box>
          <Stack>
            <Box sx={{ marginBottom: "30px" }} key={product.id}>
              <Typography
                sx={{
                  fontSize: "40px",
                  fontWeight: "bold",
                  color: "#f7337f",
                  marginBottom: "10px",
                }}
              >
                {product.name}
              </Typography>
              <Typography
                sx={{
                  fontSize: "20px",
                  marginBottom: "10px",
                  color: "#707070",
                }}
              >
                {product.discption}
              </Typography>

              <TextField
                type="text"
                id="count"
                label=""
                defaultValue={product.quantity}
                error={Boolean(errors.count)}
                helperText={errors.count ? "You should enter your" : null}
                {...register("count", {
                  required: true,
                  maxLength: 100,
                  minLength: 1,
                })}
              />
            </Box>
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
              <Stack direction={"row"} gap={2}>
                <TextField
                  type="text"
                  id="Full name"
                  label="Full name"
                  error={Boolean(errors.full)}
                  helperText={errors.full ? "You should enter your Name" : null}
                  {...register("full", { required: true })}
                  sx={{ flex: 1 }}
                />
                <TextField
                  type="text"
                  id="Address"
                  label="Address"
                  error={Boolean(errors.Address)}
                  helperText={
                    errors.Address ? "You should enter your Address" : null
                  }
                  {...register("Address", { required: true })}
                  sx={{ flex: 1 }}
                />
              </Stack>

              <TextField
                error={Boolean(errors.number)}
                helperText={
                  errors.number ? "You should enter your Number" : null
                }
                {...register("number", { required: true })}
                id="number"
                label="Number"
              />
              <TextField
                type="email"
                id="Email"
                label="Email"
                error={Boolean(errors.email)}
                helperText={errors.email ? "You should enter your Email" : null}
                {...register("email", { required: true })}
              />
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Use as my default address."
                />
              </FormGroup>

              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                sx={{ marginBottom: "30px" }}
              >
                <Link to="/cart">
                  <Button
                    onClick={() => {
                      dispatch(clear());
                    }}
                    variant="contained"
                    type="submit"
                    sx={{
                      backgroundColor: "red",
                      width: "10rem",
                      height: "2rem",
                      display: "flex",
                      alignItems: "center",
                      "&:hover": {
                        backgroundColor: "red",
                        borderColor: "gray",
                      },
                    }}
                  >
                    <Typography sx={{ fontSize: "1rem" }}>Back</Typography>
                  </Button>
                </Link>

                <Link to="/cart">
                  <Button
                    onClick={() => {
                      dispatch(clear());
                      dispatch(deleteFromCart(product));
                    }}
                    variant="contained"
                    type="submit"
                    sx={{
                      backgroundColor: "rgb(92, 244, 92)",
                      width: "10rem",
                      height: "2rem",
                      display: "flex",
                      alignItems: "center",
                      "&:hover": {
                        backgroundColor: "rgb(92, 244, 92)",
                        borderColor: "gray",
                      },
                    }}
                  >
                    <Typography sx={{ fontSize: "1rem" }}>Buy</Typography>
                  </Button>
                </Link>

                <Snackbar
                  open={open}
                  autoHideDuration={3000}
                  onClose={handleClose}
                  anchorOrigin={{ vertical: "top", horizontal: "right" }}
                >
                  <Alert
                    onClose={handleClose}
                    severity="info"
                    sx={{ width: "100%" }}
                  >
                    Account was created
                  </Alert>
                </Snackbar>
              </Stack>
            </Box>
          </Stack>
        </Stack>
      ))}
    </>
  );
};

export default BuyForm;
