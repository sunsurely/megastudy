import styled from '@emotion/styled';
import SectionTitle from 'components/SectionTitle';

import 'swiper/css';
import 'swiper/css/navigation';
import VideoList from './VideoList';

const Container = styled.section`
  margin-top: 0;
`;

const VideoContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
`;

const Youtube = () => {
  return (
    <Container>
      <VideoContainer>
        <SectionTitle text="메가스터디북스 유튜브" />
        <VideoList />
      </VideoContainer>
    </Container>
  );
};

export default Youtube;
