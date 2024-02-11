import { Box } from "@mui/material";
import "./dishes.css";
const Dishes = () => {
  return (
    <Box sx={{ hight: "50vh" }} id="dishes">
      <div className="video">
        <video autoPlay muted loop>
          <source
            src="../../../public/deshes/video_2024-01-29_19-11-39.mp4"
            type="video/mp4"
          />
        </video>
        <div className="text">
          <h2>Super Ice cream to be hero</h2>
          <p>All people Need it</p>
          <button>See More</button>
        </div>
      </div>
    </Box>
  );
};

export default Dishes;
