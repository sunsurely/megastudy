import styled from '@emotion/styled';
import { pickBookList } from 'utils/images';
import { NavUtil } from 'utils/navList';
import PickLink from '../PickLink';

const Container = styled.ul`
  width: 1440px;
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;

const PickList = () => {
  return (
    <Container>
      {pickBookList.map((book, idx) => {
        return <PickLink src={book} text={NavUtil.pickTitleList[idx]} />;
      })}
    </Container>
  );
};

export default PickList;
