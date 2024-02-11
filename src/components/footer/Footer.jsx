import { Box } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import "./footer.css";
const Footer = () => {
  return (
    <Box>
      <div className="footer">
        <div className="container">
          <img
            decoding="async"
            src="../../../../public/1706893775852.png"
            alt="logo"
            style={{ width: "90px", height: "70px" }}
          />
          <p>ICE CREAM</p>
          <div className="social-icons" style={{ paddingTop: "10px" }}>
            <FacebookIcon />
            <TwitterIcon />
            <InstagramIcon />
          </div>
          <p className="copyright">
            &copy; 2024 <span>Ice Cream</span> All Right Reserved
          </p>
        </div>
      </div>
    </Box>
  );
};

export default Footer;
