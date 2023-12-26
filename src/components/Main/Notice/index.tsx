import styled from '@emotion/styled';
import SectionTitle from 'components/SectionTitle';
import NoticeList from './NoticeList';

const Contaienr = styled.section``;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1440px;
  margin: 200px auto;
`;

const Notice = () => {
  return (
    <Contaienr>
      <Wrap>
        <SectionTitle text="Notice" />
        <NoticeList />
      </Wrap>
    </Contaienr>
  );
};

export default Notice;
