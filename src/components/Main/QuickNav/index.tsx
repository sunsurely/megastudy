import styled from '@emotion/styled';
import { quickMenuList } from 'utils/images';
import { NavUtil } from 'utils/navList';

const Container = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

const QuickMenuList = styled.ul`
  width: 1240px;
  display: flex;
  justify-content: space-between;

  li {
    width: 120px;
    padding: 20px;
    cursor: pointer;
    border-radius: 15px;
    &:hover {
      box-shadow: 2px 2px 6px 1px rgba(53, 53, 53, 0.4);
    }
    a {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-weight: bold;
      img {
        width: 45px;
        opacity: 70%;
      }
      p {
        padding-top: 20px;
      }
    }
  }
`;

const QuickNav = () => {
  return (
    <Container>
      <QuickMenuList>
        {NavUtil.quickMenus.map((menu, idx) => {
          return (
            <li>
              <a>
                <img src={quickMenuList[idx]} alt="" />
                <p>{menu}</p>
              </a>
            </li>
          );
        })}
      </QuickMenuList>
    </Container>
  );
};

export default QuickNav;
