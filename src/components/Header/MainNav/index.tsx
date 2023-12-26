import styled from '@emotion/styled';
import arrow from '../../../images/arrow_forward.png';
import { NavUtil, navList } from 'utils/navList';
import { HeaderProps } from 'utils/types';
import NavBox from './NavBox';
import { NavStyles } from 'utils/styles';

const Container = styled.nav<HeaderProps.ToggleProps>`
  background-color: #ffffff;
  width: 100%;
  display: flex;
  justify-content: center;
  opacity: ${(props) => (props.visibility ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
  border-top: 1px solid #ebebeb;
  padding-top: 50px;
  ${NavStyles.mainNavList}
`;

const MainNav = (props: HeaderProps.ToggleProps) => {
  const { visibility } = props;

  return (
    <Container visibility={visibility}>
      {NavUtil.mainNavTitles.map((title, idx) => {
        return (
          <NavBox
            text={title}
            src={arrow}
            visibility={visibility}
            list={navList[idx]}
          />
        );
      })}
    </Container>
  );
};
export default MainNav;
