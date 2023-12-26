import styled from '@emotion/styled';
import { NavUtil } from 'utils/navList';
import TagLink from '../TagLink';

const Container = styled.ul`
  display: flex;
  padding-top: 30px;
`;

const TagList = () => {
  return (
    <Container>
      {NavUtil.pickList.map((pick) => {
        return <TagLink text={pick} />;
      })}
    </Container>
  );
};

export default TagList;
