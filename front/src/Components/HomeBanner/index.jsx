import React from 'react';
import { Container, BannerBox, BannerTitle, BannerSubTitle } from './styles';
import HomeBannerImage from "@Assets/Layouts/Banner/home-banner.jpg"

const HomeBanner = () => {
  return (
    <Container>
      <BannerBox>
        <BannerTitle>
          <h1>
            Live For
            <br />
            <span>FASHION</span>
          </h1>
        </BannerTitle>
        <img src={HomeBannerImage} />
        <BannerSubTitle>SAVE UP TO 50%</BannerSubTitle>
      </BannerBox>
    </Container>
  );
};

export default HomeBanner;
