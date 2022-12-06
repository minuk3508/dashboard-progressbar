import React from "react";
import styled, { keyframes } from "styled-components";

export default function MiddleSection() {
  return (
    <Container>
      <TaskTitle>Web Design</TaskTitle>
      <TaskType>Design</TaskType>
      <ProgressBarBox>
        <ProgressBarBackground>
          <ProgressBar />
        </ProgressBarBackground>
      </ProgressBarBox>
      <ProgressBox>
        <ProgressSpan>Progress</ProgressSpan>
        <NumberSpan>80%</NumberSpan>
      </ProgressBox>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 55%;
  padding: 0% 8% 0% 10%;
`;

const TaskTitle = styled.div`
  width: 100%;
  height: 23%;
  font-size: 25px;
  font-weight: 900;
  color: #27104e;
`;

const TaskType = styled.div`
  width: 100%;
  height: 17%;
  font-size: 15px;
  color: #27104e;
`;

const ProgressBarBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 25%;
`;

const ProgressBarBackground = styled.div`
  width: 100%;
  height: 35%;
  background-color: #ababab;
  border-radius: 20px;
`;
const ProgressGauge = keyframes`
0%{
width: 0%;
}
100%{
width: 80%;
}

`;
const ProgressBar = styled.div`
  width: 80%;
  height: 100%;
  border-radius: 20px;
  background-color: rgb(245, 208, 86);
  animation: ${ProgressGauge} 1.5s;
`;
const ProgressBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 19%;
`;

const ProgressSpan = styled.span`
  font-size: 20px;
  color: #27104e;
`;
const NumberSpan = styled.span`
  font-size: 20px;
  color: #27104e;
`;
