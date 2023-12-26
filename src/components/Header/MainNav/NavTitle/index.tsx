import styled from '@emotion/styled';
import { HeaderProps } from 'utils/types';

const Container = styled.div<HeaderProps.ToggleProps>`
  display: ${(props) => (!props.visibility ? `none` : ``)};
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  a {
    display: flex;
    align-items: center;
    img {
    }
  }
`;

const NavTitle = (props: HeaderProps.MainNavProps) => {
  const { text, src, visibility } = props;
  return (
    <Container visibility={visibility}>
      <a>
        {text}
        <img src={src} />
      </a>
    </Container>
  );
};

export default NavTitle;
