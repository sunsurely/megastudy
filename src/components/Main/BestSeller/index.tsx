import styled from '@emotion/styled';
import { bestBooks } from 'utils/images';
import BestSellerNav from './BestSellerNav';
import BestBookList from './BestBookLIst';

const Conatainer = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  position: relative;
`;

const BackgroundLeft = styled.div`
  width: 750px;
  height: 700px;
  background-color: #d5e9fc;
  position: absolute;
  top: 50px;
  left: 0;
  z-index: -1;
  border-radius: 0 100px 100px 0;
`;

const BackgroundBottom = styled.div`
  width: 650px;
  height: 150px;
  margin-top: 150px;
  background-color: #d5e9fc;

  div {
    width: 700px;
    height: 150px;
    background-color: #ffffff;
    border-radius: 200px 0 0 0;
  }
`;

const BestSeller = () => {
  return (
    <Conatainer>
      <BestSellerNav />
      <BestBookList bestBooks={bestBooks} />
      <BackgroundLeft />
      <BackgroundBottom>
        <div></div>
      </BackgroundBottom>
    </Conatainer>
  );
};

export default BestSeller;
