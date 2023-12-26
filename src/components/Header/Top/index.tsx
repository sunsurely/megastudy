import styled from '@emotion/styled';
import search from '../../../images/search.png';
import profile from '../../../images/person.png';

const Container = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid #ebebeb;
  padding: 5px 0;
  justify-content: center;
  background-color: #ffffff;
`;

const Wrap = styled.div`
  display: flex;
  justify-content: end;
  width: 1100px;
`;

const SearchInput = styled.div`
  display: flex;
  input {
    width: 250px;
    height: 35px;
    border: 1px solid #cecdcd;
    border-radius: 20px;
  }

  div {
    background-color: #0082ff;
    border-radius: 50px;
    padding: 5px;
    margin-left: 5px;
    cursor: pointer;
    img {
      filter: invert();
    }
  }
`;

const Profile = styled.div`
  margin-left: 10px;
  cursor: pointer;
  img {
    width: 30px;
  }
`;

const Top = () => {
  return (
    <Container>
      <Wrap>
        <SearchInput>
          <input type="text" />
          <div>
            <img src={search} alt="" />
          </div>
        </SearchInput>
        <Profile>
          <img src={profile} alt="" />
        </Profile>
      </Wrap>
    </Container>
  );
};

export default Top;
