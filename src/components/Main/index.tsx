import styled from '@emotion/styled';
import MainBanner from './MainBanner';
import QuickNav from './QuickNav';
import MainPick from './MainPick';
import MidBanner from './MidBanner';
import BestSeller from './BestSeller';
import Youtube from './Youtube';
import Notice from './Notice';

const Container = styled.main``;

const Main = () => {
  return (
    <Container>
      <MainBanner />
      <QuickNav />
      <MainPick />
      <MidBanner />
      <BestSeller />
      <Youtube />
      <Notice />
    </Container>
  );
};

export default Main;
