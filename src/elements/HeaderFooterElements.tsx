import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const HeaderContainer = styled.div`
  position: sticky;
  top: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  background-color: #9c7f7f;
  color: white;
  height: 50px;
`;

const FooterContainer = styled.div`
  display: grid;
  background-color: #9c7f7f;
  color: white;
  width: 100%;
  line-height: 40px;
  padding: 40px;
  box-sizing: border-box;
  position: absolute;
  justify-content: space-around;
  @media screen and (max-width: 768px) {
    font-size: 12px;
    margin-top: 500px;
    grid-template-columns: 1fr;
  }

  @media screen and (min-width: 768px) {
    font-size: 25px;
    margin-top: 500px;
    grid-template-columns: 8fr 1fr;
  }
`;

const MenuButton = styled.button`
  padding: 10px 10px 10px 10px;
  font-size: 1.5em;
  cursor: pointer;
  border: none;
  color: #f2e8e8;
  background-color: #9c7f7f;
  vertical-align: middle;
`;

const MenuList = styled.div<{
  isfooter?: boolean;
  alignItems?: "flex-start" | "flex-end";
}>`
  ${(props) =>
    props.isfooter
      ? css`
          bottom: 0;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;

          @media screen and (max-width: 768px) {
            align-items: "flex-end"; // Varsayılan olarak flex-end kullanılır
          }

          @media screen and (min-width: 768px) {
            align-items: ${props.alignItems ||
            "flex-end"}; // Varsayılan olarak flex-end kullanılır
          }
        `
      : css`
          position: fixed;
          top: 50px;
          left: 0;
          z-index: 999;
          background-color: #4d4b4b;
          opacity: 0.9;
          color: white;
          width: 100%;
          padding: 10px;
          display: flex;
          flex-direction: column;
        `}
`;

const Logo = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  color: white;

  @media screen and (max-width: 768px) {
    font-size: 20px;
    letter-spacing: 2px;
  }

  @media screen and (min-width: 768px) {
    font-size: 35px;
    letter-spacing: 2px;
  }
`;

const MenuItem = styled(Link)`
  padding: 5px 0;
  cursor: pointer;
  text-decoration: none;
  color: white;
  display: flex;


  @media screen and (max-width: 768px) {
    font-size: 10px;
  }

  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
`;

export {
  HeaderContainer,
  FooterContainer,
  MenuButton,
  MenuList,
  MenuItem,
  Logo,
};
