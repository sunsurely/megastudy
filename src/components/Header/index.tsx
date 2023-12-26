import styled from '@emotion/styled';
import Top from './Top';
import TopCategory from './TopCategory';
import MainNav from './MainNav';
import { useCallback, useState } from 'react';

const Container = styled.header`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 100;
`;

const Header = () => {
  const [visibility, setvisibility] = useState(false);

  const toggleHandling = useCallback(() => {
    setvisibility((prev) => !prev);
  }, [visibility]);
  return (
    <Container>
      <Top />
      <TopCategory toggleHandling={toggleHandling} visibility={visibility} />
      <MainNav visibility={visibility} />
    </Container>
  );
};

export default Header;
