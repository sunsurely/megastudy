import styled from '@emotion/styled';
import { MainProps } from 'utils/types';

const Container = styled.h2`
  font-size: 40px;
  font-weight: bold;
`;

const SectionTitle = (props: MainProps.SectionTitleProps) => {
  const { text } = props;

  return <Container>{text}</Container>;
};

export default SectionTitle;
