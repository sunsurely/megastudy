import styled from '@emotion/styled';

const Container = styled.div`
  cursor: pointer;
  h1 {
    font-size: 25px;
    font-weight: bold;
    letter-spacing: -1px;
    span {
      color: #0082ff;
    }
  }
`;

const MainLogo = () => {
  return (
    <Container>
      <h1>
        메가스터디<span>BOOKS</span>
      </h1>
    </Container>
  );
};

export default MainLogo;
