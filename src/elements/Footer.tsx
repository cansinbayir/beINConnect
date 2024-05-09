import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import {
  FooterContainer,
  MenuList,
  MenuItem,
  Logo,
} from "./HeaderFooterElements";

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <MenuList isfooter alignItems="flex-start">
        <Logo to="/" className="logo">
          Connect BeIN
        </Logo>
        <MenuItem to="/">Hakkımızda</MenuItem>
        <MenuItem to="/">Lorem Ipsum</MenuItem>
        <MenuItem to="/">Lorem Ipsum</MenuItem>
        <MenuItem to="/">Lorem Ipsum</MenuItem>
        <MenuItem to="/">Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</MenuItem>
      </MenuList>
      <MenuList isfooter alignItems="flex-end">
        <MenuItem to="/">
          <h3>Instagram </h3>
          <InstagramIcon></InstagramIcon>
        </MenuItem>
        <MenuItem to="/">
          <h3>Facebook </h3>
          <FacebookIcon></FacebookIcon>
        </MenuItem>
        <MenuItem to="/">
          <h3>Youtube </h3>
          <YouTubeIcon></YouTubeIcon>
        </MenuItem>
        <MenuItem to="/">
          <h3>Twitter </h3>
          <XIcon></XIcon>
        </MenuItem>
      </MenuList>
    </FooterContainer>
  );
};

export default Footer;
