import styled from '@emotion/styled';
import banner1 from '../../../images/메인배너1.png';
import banner2 from '../../../images/메인배너2.png';
import banner3 from '../../../images/메인배너3.png';
import banner4 from '../../../images/메인배너4.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Container = styled.div`
  width: 1440px;
  height: 500px;
  margin: 105px auto 0 auto;
`;

const MainBanner = () => {
  return (
    <Container>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        navigation={true}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <a>
            <img src={banner1} />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a>
            <img src={banner2} />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a>
            <img src={banner3} />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a>
            <img src={banner4} />
          </a>
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default MainBanner;
