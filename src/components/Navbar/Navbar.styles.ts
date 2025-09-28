import styled from "styled-components";
import { FiMenu } from "react-icons/fi";

export const NavWrapper = styled.header`
    width: 100%;
    position: sticky;
    top: 0;
    background-color: #ffffff;
    border-bottom: 1px solid #e6e6e6;
    z-index: 100;
    // border: 1px solid red;
`
export const NavContent = styled.div`
//   max-width: 1200px;
  max-width: 1600px;
  margin: 0 auto;
  padding: 12px 24px;
  display: flex;
  align-items: center;
//   justify-content: space-between;
`;

export const Logo = styled.div`
  font-size: 1.4rem;
  font-weight: 700;
  font-family: Georgia, "Times New Roman", serif;
  cursor: pointer;
  //   border: 1px solid red;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    // display: none;
    margin-right: auto;
  }
`;

export const SearchContainer = styled.div`
  flex: 1;
  max-width: 300px;
  margin: 0 24px;
  display: flex;
  align-items: center;
  gap: 8px;
  border: 1px solid #ddd;
  border-radius: 24px;
  padding: 6px 12px;
  background: #fafafa;
  margin-right: auto;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const SearchInput = styled.input.attrs({
  type: "text",
})`
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-size: 0.9rem;
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
color: gray;
`;

export const RightSectionWritePlusEdit = styled.div`
    display: flex;  
    align-items: center;
    gap: 8px;
`

export const WriteButton = styled.button`
  border: none;
  background: transparent;
//   padding: 6px 14px;
  border-radius: 20px;
  font-size: 0.9rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Avatar = styled.div`
  width: 32px;
  height: 32px;
  background: #000;
  border-radius: 50%;
  cursor: pointer;
//   border: 1px solid red;
`;

export const MenuIcon = styled(FiMenu)`
  display: none;
  font-size: 1.4rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;