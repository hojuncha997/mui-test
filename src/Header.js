import { Drawer } from "@mui/material";
import styled from "@emotion/styled";

const Header_container = styled.div`
  margin: auto;
  max-width: 1200px;
  width: 80vw;
  height: 5vw;
  background-color: black;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Sidebar_button = styled.button`
  height: 80%;
  width: 10%;
  border-radius: 15px;
  background-color: white;
  // margin-left: auto;
  // margin-right: auto;

  display: block;

  &:hover {
    background-color: wheat;
  }

  @media screen and (max-width: 768px) {
    background: pink;
  }
`;

const Header = () => {
  return (
    <>
      <Header_container>
        <Sidebar_button>sdf</Sidebar_button>
      </Header_container>
    </>
  );
};

export default Header;
