import styled from '@emotion/styled';
import NavTitle from '../NavTitle';
import { HeaderProps } from 'utils/types';
import NavList from 'components/NavList';

const Container = styled.div`
  padding: 0px 5px 10px 10px;
  border-right: 2px solid #ebebeb;
  &:nth-child(4) {
    border: none;
  }
`;

const NavBox = (props: HeaderProps.MainNavProps) => {
  const { visibility, text, src, list } = props;
  return (
    <Container>
      <NavTitle text={text} src={src} visibility={visibility} />
      <NavList navList={list} />
    </Container>
  );
};

export default NavBox;
