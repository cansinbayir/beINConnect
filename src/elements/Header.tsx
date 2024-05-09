import React, { useState } from "react";
import {
  HeaderContainer,
  MenuButton,
  MenuList,
  MenuItem,
  Logo,
} from "./HeaderFooterElements";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <HeaderContainer>
        <MenuButton onClick={toggleMenu}>☰</MenuButton>
        <Logo to="/" onClick={closeMenu}>
          Connect BeIN
        </Logo>
      </HeaderContainer>
      {menuOpen && (
        <MenuList>
          <MenuItem
            to="/movies"
            state={{ category: "Yerli Film" }}
            onClick={closeMenu}
          >
            Yerli Film
          </MenuItem>
          <MenuItem
            to="/movies"
            state={{ category: "Yabancı Film" }}
            onClick={closeMenu}
          >
            Yabancı Film
          </MenuItem>
          <MenuItem
            to="/movies"
            state={{ category: "Yerli Dizi" }}
            onClick={closeMenu}
          >
            Yerli Dizi
          </MenuItem>
          <MenuItem
            to="/movies"
            state={{ category: "Yabancı Dizi" }}
            onClick={closeMenu}
          >
            Yabancı Dizi
          </MenuItem>
        </MenuList>
      )}
    </>
  );
};
export { Header, Logo };
