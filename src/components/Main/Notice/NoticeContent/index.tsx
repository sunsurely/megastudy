import styled from '@emotion/styled';
import { MainProps } from 'utils/types';

const Container = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 450px;
  background-color: #f5f8fd;
  text-align: center;
  padding: 25px 0;
  border-radius: 40px;
  cursor: pointer;
`;

const Content = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Date = styled.p`
  font-size: 18px;
  opacity: 0.5;
`;

const NoticeContent = (props: MainProps.NoticeContentProps) => {
  const { text, date } = props;
  return (
    <Container>
      <Content>{text}</Content>
      <Date>{date}</Date>
    </Container>
  );
};

export default NoticeContent;
