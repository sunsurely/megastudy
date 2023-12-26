import styled from '@emotion/styled';
import close from '../../../images/close.png';
import open from '../../../images/menu.png';
import NavList from 'components/NavList';
import { NavUtil } from 'utils/navList';
import { NavStyles } from 'utils/styles';
import MainLogo from 'components/MainLogo';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 15px 0;
  background-color: #ffffff;
`;

const Nav = styled.nav`
  width: 350px;
  display: flex;
  justify-content: center;
  ${NavStyles.topCategoryList}
`;

const ToggleBtn = styled.div`
  cursor: pointer;
  width: 200px;
  padding-left: 20px;

  img {
    width: 15%;
  }
`;

type TopCategoryProps = {
  toggleHandling: () => void;
  visibility: boolean;
};

const TopCategory = (props: TopCategoryProps) => {
  const { toggleHandling, visibility } = props;

  return (
    <Container>
      <MainLogo />
      <Nav>
        <NavList navList={NavUtil.mainCategory} />
      </Nav>
      <ToggleBtn onClick={toggleHandling}>
        <img src={visibility ? close : open} alt="" />
      </ToggleBtn>
    </Container>
  );
};

export default TopCategory;
