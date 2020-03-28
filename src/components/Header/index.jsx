import React, { useState } from "react";
import { MainDiv,  ImageDiv } from "./styles";
import Lograf from "../../../content/assets/lografLogo.svg";


const Header = () => {
  return (
    <MainDiv>
      <ImageDiv>
        <img src={Lograf} alt="logo" style={{ width: "20rem" }} />
      </ImageDiv>
    </MainDiv>
  );
};

export default Header;
