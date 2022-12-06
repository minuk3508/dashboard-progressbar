import styled, { createGlobalStyle } from "styled-components";
import ProgressCard from "./ProgressCard";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');
* {
  margin: 0;
  padding: 0;
  border: 0;
  font-family: 'Alfa Slab One', cursive;
  font-family: 'Noto Sans KR', sans-serif;
  font: inherit;
  line-height: 1;
  box-sizing: border-box;
  
}
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <ProgressCard />
      </Container>
    </>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: rgb(245, 208, 86);
`;
