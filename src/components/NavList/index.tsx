import styled from '@emotion/styled';

const Container = styled.ul`
  display: flex;

  li {
    a {
      cursor: pointer;
    }
  }
`;

type NavListProps = {
  navList?: string[];
};

const NavList = (props: NavListProps) => {
  const { navList } = props;
  return (
    <Container>
      {navList?.map((list) => (
        <li>
          <a>{list}</a>
        </li>
      ))}
    </Container>
  );
};

export default NavList;
