import styled from '@emotion/styled';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { NavUtil } from 'utils/navList';
import { MainProps } from 'utils/types';
import BestBook from '../BestBook';
import 'swiper/css';

const Container = styled.ul`
  width: 1440px;
  margin: 0 auto;
  display: flex;
`;

const BestBookList = (props: MainProps.BestBookListProps) => {
  const { bestBooks } = props;

  return (
    <Container>
      {
        <Swiper
          modules={[Navigation]}
          spaceBetween={50}
          navigation={true}
          slidesPerView={3}
        >
          {bestBooks.map((book, idx) => {
            return (
              <SwiperSlide>
                <BestBook src={book} text={NavUtil.bestSellerList[idx]} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      }
    </Container>
  );
};

export default BestBookList;
