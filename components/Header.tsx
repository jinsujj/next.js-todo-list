import React from "react";
import styled from "styled-components";
import pallete from "../styles/pallete";

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  margin: 0 auto;
  max-width: 600px;
  justify-content: center;

  height: 52px;
  padding: 0 12px;
  border-bottom: 1px solid ${pallete.gray};
  h1 {
    font-size: 21px;
  }
`;
const Header: React.FC = () => {
  return (
    <Container>
      <h1>부엉이&apos;s TodoList</h1>
    </Container>
  );
};

export default Header;
