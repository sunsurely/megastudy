import styled from '@emotion/styled';
import NavList from 'components/NavList';
import SectionTitle from 'components/SectionTitle';
import { NavUtil } from 'utils/navList';

const Container = styled.nav`
  width: 1440px;
  display: flex;
  margin: 100px auto;
  align-items: center;

  ul {
    width: 300px;
    padding: 0 20px;
    justify-content: space-around;
    li {
      font-size: 18px;
      font-weight: 600;
    }
  }
`;

const BestSellerNav = () => {
  return (
    <Container>
      <SectionTitle text="베스트" />
      <NavList navList={NavUtil.mainCategory} />
    </Container>
  );
};

export default BestSellerNav;
