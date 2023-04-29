import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram"
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <InstagramIcon
          onClick={() =>
            window.open("https://www.linkedin.com/in/leigh-ryffel/")
          }
        />
        <TwitterIcon
          onClick={() =>
            window.open("https://www.linkedin.com/in/leigh-ryffel/")
          }
        />
        <FacebookIcon
          onClick={() =>
            window.open("https://www.linkedin.com/in/leigh-ryffel/")
          }
        />
        <LinkedInIcon
          onClick={() =>
            window.open("https://www.linkedin.com/in/leigh-ryffel/")
          }
        />
      </div>
      <p> &copy; 2022 leighryffel.com</p>
    </div>
  );
}

export default Footer;
