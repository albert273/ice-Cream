import { useState } from "react";
import { Box, Container, ListItem, Stack } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { Link } from "react-router-dom";

const options = ["AR", "EN"];

const Header1 = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#f7337f",
          paddingBottom: "2.5rem",
          paddingTop: ".5rem",
        }}
      >
        <Container>
          <Stack direction={"row"} alignItems={"center"}>
            <img
            className="logo"
              src="../../../../public/1706893775852.png"
              alt="logo"
              style={{ width: "80px", height: "60px" }}
            />
            <Box flexGrow={1} />
            <Stack spacing={2} direction="row">
              <Link to="/signUp">
                <button
                  className="register"
                  style={{
                    backgroundColor: "#fff",
                    color: "#f7337f",
                    fontWeight: "bold",
                    border: "#f7337f solid 1px",
                  }}
                >
                  Sign up
                </button>
              </Link>
              <Link to="/logIn">
                <button
                  className="register"
                  style={{
                    backgroundColor: "#f7337f",
                    color: "#fff",
                    fontWeight: "bold",
                    borderColor: "#fff",
                  }}
                >
                  Log in
                </button>
              </Link>
            </Stack>
            
            <List
              component="nav"
              aria-label="Device settings"
              sx={{ p: 0, m: 0 }}
            >
              <ListItem
                id="lock-button"
                aria-haspopup="listbox"
                aria-controls="lock-menu"
                aria-label=""
                aria-expanded={open ? "true" : undefined}
                onClick={handleClickListItem}
                sx={{ "&:hover": { cursor: "pointer" } }}
              >
                <ListItemText
                  secondary={options[selectedIndex]}
                  sx={{
                    ".MuiTypography-root": { fontSize: "15px", color: "#fff" },
                  }}
                />
                <ExpandMore sx={{ fontSize: "16px", color: "#fff" }} />
              </ListItem>
            </List>
            <Menu
              id="lock-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "lock-button",
                role: "listbox",
              }}
            >
              {options.map((option, index) => (
                <MenuItem
                  sx={{ fontSize: "11px", p: "3px 10px", minHeight: "10px" }}
                  key={option}
                  selected={index === selectedIndex}
                  onClick={(event) => handleMenuItemClick(event, index)}
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Header1;
