import React, { useCallback } from 'react';
import Styled from './style';
import Slider from 'react-slick';
import { sliderConfig } from '../../../utils/config';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const LandingPage = () => {
  const renderImage = useCallback(
    (imageUrl: string, index: number) => (
      <div key={`${index}-image`}>
        <img src={imageUrl} alt="solar energy" />
      </div>
    ),
    []
  );
  const images = [
    '/assets/solar_energy_2.jpg',
    '/assets/solar_energy_3.jpg',
    '/assets/solar_energy_4.jpg'
  ];
  return (
    <Styled>
      <div className="landingpage__container">
        <div className="banner">
          <Slider {...sliderConfig}>{images.map((item, index) => renderImage(item, index))}</Slider>
        </div>
        <section className="section-index about-index">
          <div className="container">
            <div className="img">
              <img src="/assets/solar_energy.jpeg" alt="solar energy" />
            </div>
            <div className="infor">
              <h2 className="title-h2-index">
                <span>Chỉ tiêu phát triển bền vững số 7</span>
              </h2>
              <div className="desc">
                <p>
                  Chỉ tiêu phát triển bền vững số 7 của Liên Hợp Quốc nhằm đảm bảo tiếp cận với năng
                  lượng sạch, bền vững và giá cả phải chăng cho tất cả mọi người. Solar energy, hay
                  năng lượng mặt trời, được coi là một trong những giải pháp sáng giá để đáp ứng chỉ
                  tiêu này. Với tính tiện lợi, không gây ô nhiễm và có khả năng tái tạo, năng lượng
                  mặt trời được xem là một trong những nguồn năng lượng sạch và bền vững được khuyến
                  khích sử dụng để giúp giảm thiểu tác động của ngành công nghiệp năng lượng đến môi
                  trường và đáp ứng nhu cầu năng lượng của con người.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="section-index field-index">
          <div className="container">
            <h2 className="title-h2-index text-center more-left">
              <span>Vấn đề đặt ra </span>
            </h2>
          </div>
          <div className="pyramid__container">
            <img src="/assets/pyramid.png" placeholder="pyramid" />
            <div className="pyramid__text">
              <span>Source:</span>
              <span>
                [1] Office of Energy Efficiency and Renewable Energy
                <br />
                [2] www.weforum.org
                <br />
                [3] Cục điện lực và năng lượng tái tạo, Báo cáo tình hình phát triển điện mặt trời
                mái nhà, 24/08/2020
              </span>
            </div>
          </div>
        </section>
        <section className="section-index about-index">
          <div className="container">
            <div className="infor">
              <h2 className="title-h2-index">
                <span>Giải pháp đề ra</span>
              </h2>
              <div className="desc">
                <p>
                  Mong muốn đạt được mục tiêu sử dụng năng lượng sạch và bền vững. Bằng cách chuyển
                  đổi sử dụng năng lượng mặt trời để sản xuất điện, hệ thống này sẽ giúp giảm thiểu
                  sự phụ thuộc vào các nguồn năng lượng truyền thống và giảm thiểu tác động tiêu cực
                  đến môi trường.
                </p>
                <p>
                  Mục tiêu của việc chuyển đổi sử dụng năng lượng mặt trời là để tạo ra một hệ thống
                  bền vững, với khả năng sản xuất năng lượng đủ để đáp ứng nhu cầu sử dụng trong lâu
                  dài. Nó cũng giúp tăng cường sự độc lập và an ninh năng lượng, giảm thiểu rủi ro
                  và tạo ra một tương lai bền vững cho con người và hành tinh của chúng ta.
                </p>
              </div>
            </div>
            <div className="img">
              <img src="/assets/idea.jpg" alt="solar energy" />
            </div>
          </div>
        </section>
      </div>
    </Styled>
  );
};

export default LandingPage;
