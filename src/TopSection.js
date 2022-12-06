import React from "react";
import styled from "styled-components";
import { AiOutlineMore } from "react-icons/ai";

export default function TopSection() {
  return (
    <Container>
      <RegistrationDate>Dec 06, 22</RegistrationDate>
      <SettingButton>
        <AiOutlineMore />
      </SettingButton>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 18%;
  padding: 0% 1.5% 0% 7%;
`;
const RegistrationDate = styled.div`
  display: flex;
  align-items: center;
  width: 45%;
  height: 70%;
  font-size: 20px;
  font-weight: 700;
  color: #cccccc;
`;
const SettingButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  font-size: 20px;
  color: #cccccc;
  background-color: white;
  border-radius: 50%;
  :hover {
    cursor: pointer;
    background-color: rgba(232, 232, 232, 0.2);
  }
`;
