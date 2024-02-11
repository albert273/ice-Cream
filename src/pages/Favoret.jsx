import Header from "../components/header/Header";
import { Box, Button, Container } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { clearFavorite, deleteFromFavorite } from "../redux/slice/favoretSlice";

export const Favoret = () => {
  // @ts-ignore
  const favorite = useSelector((state) => state.favorite);
  const dispatch = useDispatch();
  return (
    <>
      <Header />
      <>
        <Header />
        <Box>
          <Container>
            <Box sx={{ height: "200px" }}></Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "end",
                marginBottom: "5px",
              }}
            >
              <Button
                onClick={() => dispatch(clearFavorite())}
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
            <Box>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell align="center">Image</TableCell>
                      <TableCell align="center">Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {favorite.map((item) => (
                      <TableRow
                        key={item.id}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
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
                        <TableCell align="center">
                          <button
                            onClick={() => dispatch(deleteFromFavorite(item))}
                            style={{
                              backgroundColor: "red",
                              color: "#ffffffff",
                              padding: "7px 5px",
                            }}
                          >
                            remove
                          </button>
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
    </>
  );
};
