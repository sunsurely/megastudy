import styled from '@emotion/styled';
import midBanner from '../../../images/메인중간배너.png';

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 100px;
  img {
    cursor: pointer;
  }
`;

const MidBanner = () => {
  return (
    <Container>
      <img src={midBanner} />
    </Container>
  );
};

export default MidBanner;
