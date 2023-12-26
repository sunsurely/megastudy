import styled from '@emotion/styled';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { youtubeImgs } from 'utils/images';

const Container = styled.div`
  margin: 40px auto;
`;

const YoutubeImg = styled.img`
  cursor: pointer;
  max-width: 400px;
`;

const VideoList = () => {
  return (
    <Container>
      <Swiper
        modules={[Navigation]}
        spaceBetween={50}
        navigation={true}
        slidesPerView={3}
      >
        {youtubeImgs.map((img) => {
          return (
            <SwiperSlide>
              <YoutubeImg src={img} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Container>
  );
};

export default VideoList;
