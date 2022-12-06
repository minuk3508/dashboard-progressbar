import React from "react";
import styled from "styled-components";
import BottomSection from "./BottomSection";
import MiddleSection from "./MiddleSection";
import TopSection from "./TopSection";

export default function ProgressCard() {
  return (
    <CardWrapper>
      <TopSection />
      <MiddleSection />
      <BottomSection />
    </CardWrapper>
  );
}
const CardWrapper = styled.div`
  width: 350px;
  height: 250px;
  border-radius: 15px;
  background-color: white;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  transition: all 0.3s;
  :hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  }
`;
