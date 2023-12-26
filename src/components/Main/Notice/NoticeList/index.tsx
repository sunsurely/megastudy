import styled from '@emotion/styled';
import { NavUtil } from 'utils/navList';
import NoticeContent from '../NoticeContent';

const Container = styled.ul`
  width: 100%;
  justify-content: space-around;
  display: flex;
  margin-top: 20px;
`;

const NoticeList = () => {
  return (
    <Container>
      {NavUtil.noticeList.map((notice, idx) => {
        return (
          <NoticeContent text={notice} date={NavUtil.noticeDateList[idx]} />
        );
      })}
    </Container>
  );
};

export default NoticeList;
