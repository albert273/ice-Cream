import { Box, Button, Container, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Header from "../components/header/Header";
import { iceCreamItem } from "../components/main/Data";
import { useDispatch, useSelector } from "react-redux";
import { clear, deleteFromCart } from "../redux/slice/SliceToCart";
import { Link } from "react-router-dom";
import { addToBuyProduct } from "../redux/slice/buyProduct";

console.log(iceCreamItem);
const Cart = () => {
  // @ts-ignore
  const Cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const totalPrice = Cart.reduce((acc, item) => {
    acc += item.price * item.quantity;
    return acc;
  }, 0);
  return (
    <>
      <Header />
      <Box>
        <Container>
          <Box sx={{ height: "200px" }}></Box>
          <Typography>Total cost of the order: {totalPrice}$</Typography>
          <Box
            sx={{ display: "flex", justifyContent: "end", marginBottom: "5px" }}
          >
            <Button
              onClick={() => dispatch(clear())}
              variant="contained"
              sx={{
                backgroundColor: "red",
                fontWeight: "bold",
                "&:hover": { backgroundColor: "red", border: "red" },
              }}
            >
              delete
            </Button>
          </Box>
          <Box marginBottom={"30px"}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="center">Image</TableCell>
                    <TableCell align="center">Products price</TableCell>
                    <TableCell align="center">Count</TableCell>
                    <TableCell align="center">delete</TableCell>
                    <TableCell align="center">TotalPrice</TableCell>
                    <TableCell align="center">Quantity available</TableCell>
                    <TableCell align="center">Buy</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {Cart.map((item) => (
                    <TableRow
                      key={item.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {item.name}
                      </TableCell>
                      <TableCell align="center">
                        <img
                          src={item.img}
                          alt={item.name}
                          style={{ width: "60px", height: "60px" }}
                        />
                      </TableCell>
                      <TableCell align="center">{item.price}$</TableCell>
                      <TableCell align="center">{item.quantity}</TableCell>
                      <TableCell align="center">
                        <button
                          onClick={() => dispatch(deleteFromCart(item))}
                          style={{
                            backgroundColor: "red",
                            color: "#ffffffff",
                            padding: "7px 5px",
                          }}
                        >
                          remove
                        </button>
                      </TableCell>
                      <TableCell align="center">
                        {item.quantity * item.price}$
                      </TableCell>
                      <TableCell align="center">
                        {item.count - item.quantity}
                      </TableCell>
                      <TableCell align="center">
                        <Link to="/BuyForm">
                          <Button
                            onClick={() => dispatch(addToBuyProduct(item))}
                            variant="contained"
                            type="submit"
                            sx={{
                              backgroundColor: "rgb(92, 244, 92)",
                              color: "#ffffffff",
                              padding: "3px 3px",
                              alignItems: "center",
                              "&:hover": {
                                backgroundColor: "rgb(92, 244, 92)",
                                borderColor: "gray",
                              },
                            }}
                          >
                            <Typography>Buy</Typography>
                          </Button>
                        </Link>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Cart;
