// @ts-nocheck

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";

import { Stack, Typography } from "@mui/material";
import "./NavBarStayle.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";

/*const scrollTop = document.documentElement.scrollTop*/

/*const  scrollFunction = () => {
  let result;
  if(scrollTop < 700){
     result = "homeS"
  }else if(scrollTop > 700 && scrollTop < 1400){
     result = "aboutS"
  }else if(scrollTop > 1400 && scrollTop < 2100){
     result = "dishesS"
  }else if(scrollTop > 2100){
     result = "menuS"
  }else {
    result = "menuS"
  }
  return result
}*/

const NavBar = () => {
  const [active, setActive] = useState("home");
  const [showModel, setShowModel] = useState(false);

  // @ts-ignore
  const Cart = useSelector((state) => state.cart);

  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#fff",
          width: "90%",
          display: "flex",
          marginX: "auto",
          borderRadius: "70px",
          position: "relative",
          top: "-30px",
          color: "#f7337f",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <div className="menu">
              <MenuIcon
                sx={{
                  display: { md: "none" },
                  fontSize: "27px",
                  cursor: "pointer",
                  "&:hover": {
                    borderRadius: "50%",
                    backgroundColor: "#ececec",
                  },
                }}
                onClick={() => setShowModel(true)}
              />
            </div>
            <dev
              className="nav"
              style={{
                fontSize: "10px",
                alignItems: "center",
                direction: "row",
              }}
            >
              <Link to="/">
                <button
                  style={{ fontSize: "15px" }}
                  onClick={() => setActive("home")}
                  className={active === "home" ? "active" : null}
                >
                  Home
                </button>
              </Link>

              <a href="#about">
                <button
                  style={{ fontSize: "15px" }}
                  onClick={() => setActive("about")}
                  className={active === "about" ? "active" : null}
                >
                  About
                </button>
              </a>

              <a href="#dishes">
                <button
                  style={{ fontSize: "15px" }}
                  onClick={() => setActive("dishes")}
                  className={active === "dishes" ? "active" : null}
                >
                  Dishes
                </button>
              </a>
              <a href="#menu">
                <button
                  style={{ fontSize: "15px" }}
                  onClick={() => setActive("menu")}
                  className={active === "menu" ? "active" : null}
                >
                  Menu
                </button>
              </a>
            </dev>
            {showModel && (
              <div className="menuBack">
                <ul className="model">
                  <div className="navigation">
                    <h3 className="title">Navigation</h3>
                    <ClearIcon
                      sx={{
                        color: "white",
                        transition: ".3s",
                        cursor: "pointer",
                        fontSize: "2rem",
                        fontWeight: "bolder",
                        "&:hover": {
                          textShadow: "0.1px 0.1px 10px #f7337f",
                          color: "red",
                          rotate: "180deg",
                        },
                      }}
                      onClick={() => setShowModel(false)}
                    />
                  </div>
                  <li>
                    <Link to="/">
                      <a href="#home">Home</a>
                    </Link>
                  </li>
                  <li>
                    <a href="#about">About</a>
                  </li>
                  <li>
                    <a href="#dishes">Dishes</a>
                  </li>
                  <li>
                    <a href="#menu">Menu</a>
                  </li>
                </ul>
              </div>
            )}
            <Box flexGrow={1} />
            <Stack
              direction={"row"}
              sx={{ justifyContent: "space-between", alignItems: "center" }}
            >
              <Stack alignItems={"center"} display={"flex"}>
                <Typography
                  sx={{ position: "absolute", top: "0px", right: "70px" }}
                >
                  {Cart.length}
                </Typography>
                <Link to="/cart" className="icons">
                  <ShoppingCartOutlinedIcon
                    sx={{
                      marginRight: "5px",
                      cursor: "pointer",
                      padding: "10px",
                      borderRadius: "50%",
                      fontSize: "27px",
                      "&:hover": { backgroundColor: "#ececec" },
                    }}
                  />
                </Link>
              </Stack>
              <Link to="/favoret" className="icons">
                <FavoriteOutlinedIcon
                  sx={{
                    cursor: "pointer",
                    padding: "10px",
                    borderRadius: "50%",
                    fontSize: "27px",
                    "&:hover": { backgroundColor: "#ececec" },
                  }}
                />
              </Link>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default NavBar;
