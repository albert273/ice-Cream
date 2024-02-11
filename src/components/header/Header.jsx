import { Box } from "@mui/material"
import Header2 from "./navbar/NavBar"
import Header1 from "./header/Header-1"

const Header = () => {
  return (
    <Box sx={{position: "fixed", width: "100%", zIndex: 2}}>
        <Header1 />
        <Header2 />
    </Box>
  )
}

export default Header