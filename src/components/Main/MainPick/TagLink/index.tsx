import styled from '@emotion/styled';
import { MainProps } from 'utils/types';

const Container = styled.li`
  border: 1px solid #cecdcd;
  border-radius: 30px;
  padding: 10px 30px;
  margin-right: 30px;
  cursor: pointer;
`;

const TagText = styled.a`
  font-size: 18px;
  font-weight: bold;
`;

const TagLink = (props: MainProps.TagLinkProps) => {
  const { text } = props;
  return (
    <Container>
      <TagText>{text}</TagText>
    </Container>
  );
};

export default TagLink;
