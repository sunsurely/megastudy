import styled from '@emotion/styled';
import { MainProps } from 'utils/types';

const Container = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;

const BookImg = styled.a`
  width: 345px;
  padding-top: 55px;
  padding-bottom: 55px;
  background-color: #f6f4fc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  img {
    max-width: 180px;
  }
  margin-bottom: 10px;
`;

const BookTitle = styled.div`
  strong {
    font-size: 18px;
  }
`;

const PickLink = (props: MainProps.PickLinkProps) => {
  const { src, text } = props;
  return (
    <Container>
      <BookImg>
        <img src={src} />
      </BookImg>
      <BookTitle>
        <strong>{text}</strong>
      </BookTitle>
    </Container>
  );
};

export default PickLink;
