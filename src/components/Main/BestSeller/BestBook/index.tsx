import styled from '@emotion/styled';
import { MainProps } from 'utils/types';

const Container = styled.li`
  cursor: pointer;
  width: 450px;
  flex-direction: column;
  text-align: center;
`;

const BookImg = styled.img`
  max-width: 450px;
  height: 256px;
`;

const BookTitle = styled.h3`
  overflow: hidden;
  font-size: 20px;
  font-weight: bold;
  padding-top: 40px;
`;

const BestBook = (props: MainProps.BestBookProps) => {
  const { src, text } = props;
  return (
    <Container>
      <BookImg src={src} />
      <BookTitle>{text}</BookTitle>
    </Container>
  );
};

export default BestBook;
