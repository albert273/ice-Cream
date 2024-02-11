import { Box, Button, Container, Stack, Typography } from "@mui/material";
import "./hero.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
const Hero = () => {
  return (
    <Box sx={{ height: "80vh", backgroundColor: "wight" }} id="home">
      <Container>
        <Stack direction={"row"} paddingTop={"180px"}>
          <Box sx={{ width: "33rem", paddingTop: "5rem" }}>
            <Typography
              sx={{
                color: "#f7337f",
                marginBottom: "20px",
                fontWeight: "bolder",
              }}
            >
              Our Special Ice Cream
            </Typography>
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "40px",
                marginBottom: "15px",
              }}
            >
              Franch Ice Creame
            </Typography>
            <Typography sx={{ marginBottom: "20px" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              accusamus tempora corporis
            </Typography>
            <a href="#menu">
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#f7337f",
                  color: "#fff",
                  fontWeight: "bold",
                  padding: "8px",
                  fontSize: "12px",
                  "&:hover": { color: "#fff", backgroundColor: "#f395b2" },
                }}
              >
                Order Now
              </Button>
            </a>
            <Box
              sx={{ cursor: "pointer", color: "#f7337f", marginTop: "30px" }}
            >
              <FacebookIcon sx={{ marginRight: "8px" }} />
              <TwitterIcon sx={{ marginRight: "8px" }} />
              <InstagramIcon />
            </Box>
          </Box>
          <Box flexGrow={1} />
          <Box>
            <img
              src="../../../public/hero/f8222d4c28f8ef38666e27d38ba1ac56.jpg.png"
              alt="hero"
              className="hero"
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Hero;
