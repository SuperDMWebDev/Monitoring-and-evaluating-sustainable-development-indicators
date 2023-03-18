import styled from 'styled-components';
const Styled = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,600;1,300;1,400&display=swap');
  .landingpage__container {
  }
  .banner {
    width: 100%;
    margin-right: 0;
    position: relative;
    max-height: 600px;
  }
  .banner img {
    width: 100%;
    background-size: contain;
    background-repeat: no-repeat;
    max-height: 600px;
  }
  section.about-index {
    padding: 50px 0;
  }
  section.about-index .container {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  section.about-index .container > * {
    width: 50%;
  }
  section.about-index .img img {
    width: 100%;
  }
  img {
    max-width: 100%;
    max-height: 100%;
  }
  section.about-index .infor {
  }
  .title-h2-index {
    display: block;
    color: #666;
    font-size: 18px;
    line-height: 32px;
    padding: 10px 0px;
    font-family: var(--condensed);
    font-weight: 500;
    text-transform: uppercase;
    position: relative;
  }
  section.about-index .infor .desc {
  }
  p {
    margin: 0 0 10px;
    line-height: 35px;
    color: #7a7a7a;
    font-size: 16px;
    font-family: var(--condensed);
    padding: 10px 0px;
  }
  .title-h2-index span {
    line-height: 42px;
    font-size: 30px;
    line-height: 42px;
    color: #000;
    padding: 10px 0px;
    text-transform: uppercase;
    font-family: var(--condensed);
    font-weight: 500;
    display: block;
  }
  .title-h2-index:before {
    content: '';
    position: absolute;
    width: 50px;
    height: 3px;
    background: var(--hover-color);
    top: 0;
  }
  .title-h2-index.more-left:before {
    content: '';
    position: absolute;
    width: 50px;
    height: 3px;
    background: var(--hover-color);
    top: 0;
    left: 48%;
  }
  .pyramid__container {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default Styled;
