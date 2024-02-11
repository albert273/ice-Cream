import { iceCreamItem } from "./Data";
import { useState } from "react";
// @ts-ignore
import { AnimatePresence, motion } from "framer-motion";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import "./main.css";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/slice/SliceToCart";
import { addToFavorite } from "../../redux/slice/favoretSlice";

const GelatoIce = iceCreamItem.filter((item) => {
  return item.category === "Gelato";
});
const ClassicIce = iceCreamItem.filter((item) => {
  return item.category === "Classic";
});
const stickIce = iceCreamItem.filter((item) => {
  return item.category === "stick";
});

const Main = () => {
  // @ts-ignore
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [active, setActive] = useState("all");
  const [arr, setArr] = useState(products);
  // @ts-ignore
  return (
    <>
      <Box sx={{ paddingY: "3rem" }} id="menu">
        <Typography
          sx={{
            marginBottom: "50px",
            fontWeight: "bold",
            color: "#f7337f",
            fontSize: "3rem",
            display: "flex",
            justifyContent: "center",
          }}
        >
          Menu
        </Typography>
        <Box>
          <Container>
            <Stack
              direction={"row"}
              sx={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "3rem",
              }}
            >
              <button
                onClick={() => {
                  setActive("all");
                  setArr(iceCreamItem);
                }}
                className={active === "all" ? "active" : null}
              >
                All product
              </button>

              <button
                onClick={() => {
                  setActive("Gelato");
                  setArr(GelatoIce);
                }}
                className={active === "Gelato" ? "active" : null}
              >
                Gelato
              </button>

              <button
                onClick={() => {
                  setActive("Classic");
                  setArr(ClassicIce);
                }}
                className={active === "Classic" ? "active" : null}
              >
                Classic
              </button>

              <button
                onClick={() => {
                  setActive("stick");
                  setArr(stickIce);
                }}
                className={active === "stick" ? "active" : null}
              >
                Stick
              </button>
            </Stack>
          </Container>
        </Box>

        <main>
          <section className=" button-section">
            <AnimatePresence>
              {arr.map((item) => {
                return (
                  <motion.article
                    layout
                    initial={{ transform: "scale(0)" }}
                    animate={{ transform: "scale(1)" }}
                    exit={{ transform: "scale(0)" }}
                    key={item.id}
                    className="card"
                  >
                    <img src={item.img} alt="" />
                    <div className="box">
                      <h1 className="title">{item.name}</h1>
                      <p className="sub-title">{item.discption}</p>
                    </div>
                    <Box display={"flex"} justifyContent={"space-around"}>
                      <FavoriteOutlinedIcon
                        onClick={() => dispatch(addToFavorite(item))}
                        sx={{
                          "&:hover": {
                            fontSize: "1.7rem",
                            transform: ".100s",
                            color: "red",
                          },
                        }}
                      />
                      <Button
                        onClick={() => dispatch(addToCart(item))}
                        variant="contained"
                        sx={{
                          width: "6rem",
                          height: "1.8rem",
                          backgroundColor: "#f7337f",
                          fontSize: ".7rem",
                          fontWeight: "bold",
                          "&:hover": {
                            color: "#f7337f",
                            backgroundColor: "#fff",
                            fontSize: ".7rem",
                            transform: ".500s",
                            boxShadow: "2px 2px 10px #f7337f",
                          },
                        }}
                      >
                        Add cart{" "}
                      </Button>
                      <Typography sx={{ color: "#f7337f" }}>
                        {item.price}$
                      </Typography>
                    </Box>
                  </motion.article>
                );
              })}
            </AnimatePresence>
          </section>
        </main>
      </Box>
    </>
  );
};

export default Main;
