import React from "react";
import {
  NavWrapper,
  NavContent,
  Logo,
  SearchContainer,
  SearchInput,
  RightSection,
  WriteButton,
  Avatar,
  RightSectionWritePlusEdit,
} from "./Navbar.styles";
import { BiEdit, BiBell, BiMenu } from "react-icons/bi";
import OpenInAppComponent from "../OpenInApp/OpenInApp";

const Navbar: React.FC = () => {
  return (
    <NavWrapper>
        <OpenInAppComponent />
      <NavContent>
        {/* Left Section: Logo */}
        <Logo>
            <BiMenu size={"25px"} style={{ marginRight: "1rem" }}/>
            Medium
        </Logo>

        {/* Middle Section: Search bar (hidden on mobile) */}
        <SearchContainer>
          <SearchInput placeholder="Search" />
        </SearchContainer>

        {/* Right Section: Buttons + avatar + mobile menu */}
        <RightSection>
            <RightSectionWritePlusEdit>
                <BiEdit size={"25px"}/>
            <WriteButton>Write</WriteButton>
            </RightSectionWritePlusEdit>
          <BiBell size={"25px"}/>
          <Avatar />
        </RightSection>
      </NavContent>
    </NavWrapper>
  );
};

export default Navbar;
