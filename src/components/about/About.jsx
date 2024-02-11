import { Box, Container, Stack, Typography } from "@mui/material";
import "./abaot.css";
const About = () => {
    return (
        <div
            className="section"
            style={{
                backgroundColor: "#ececec",
                paddingTop: "30px",
                paddingBottom: "30px",
                marginTop: "90px",
                marginBottom: "90px",
            }}
            id="about"
        >
            <Container>
                <Typography
                    sx={{
                        fontWeight: "bold",
                        color: "#f7337f",
                        fontSize: "3rem",
                        display: "flex",
                        justifyContent: "center",
                        marginBottom: "50px",
                    }}
                >
                    About
                </Typography>

                <Stack
                    direction={"row"}
                    sx={{
                        marginTop: "50px",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <Stack className="story">
                        <Typography
                            sx={{
                                fontWeight: "700",
                                fontSize: "30px",
                                marginBottom: "20px",
                                textAlign: "center",
                                
                            }}
                        >
                            Our Story
                        </Typography>
                        <Typography textAlign={"center"} >
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia
                            in repellendus alias consequuntur? Dolorem voluptatesLorem ipsum
                            dolor, sit amet consectetur adipisicing elit. Mollitia in
                            repellendus alias consequuntur .
                        </Typography>
                    </Stack>
                    <Box sx={{ width: "400px" }}></Box>
                    <Box>
                        <img
                            className="top"
                            src="../../../public/about/images.jpeg"
                            alt="our-story"
                        />
                    </Box>
                </Stack>
                <Stack
                    direction={"row"}
                    className="section"
                    sx={{ justifyContent: "space-between", alignItems: "center" }}
                >
                    <Box>
                        <img
                            src="../../../public/about/Scoops-kinds-ice-cream.webp"
                            alt="our-story"
                        />
                    </Box>
                    <Box sx={{ width: "400px" }}></Box>

                    <Stack className="story" >
                        <Typography
                            sx={{
                                fontWeight: "700",
                                fontSize:  "30px",
                                marginBottom: "20px",
                                textAlign: "center",
                            }}
                        >
                            Our Story
                        </Typography>
                        <Typography textAlign={"center"} >
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia
                            in repellendus alias consequuntur? Dolorem voluptatesLorem ipsum
                            dolor, sit amet consectetur adipisicing elit. Mollitia in
                            repellendus alias consequuntur .
                        </Typography>
                    </Stack>
                </Stack>
            </Container>
        </div>
    );
};

export default About;
