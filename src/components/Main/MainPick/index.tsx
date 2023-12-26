import styled from '@emotion/styled';
import TagList from './TagList';
import PickList from './PickList';
import SectionTitle from 'components/SectionTitle';

const Container = styled.section``;

const PickContainer = styled.div`
  width: 1440px;
  margin: 50px auto;
`;

const MainPick = () => {
  return (
    <Container>
      <PickContainer>
        <SectionTitle text="메가 PICK" />
        <TagList />
        <PickList />
      </PickContainer>
    </Container>
  );
};

export default MainPick;
