import styled from 'styled-components';
const Styled = styled.div`
  @import '~react-vis/dist/style';
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,600;1,300;1,400&display=swap');
  width: 100%;
  height: 100%;
  .visualization__container {
    padding: 20px;
  }
  .visualization__header {
    font-weight: 700;
    font-size: 50px;
    text-transform: uppercase;
    text-align: left;
    margin-bottom: 20px;
    line-height: 50px;
    letter-spacing: -0.01em;
    color: rgb(22, 119, 255);
    text-shadow: rgba(0, 0, 0, 0.25) 0px 2px 2px;
    font-family: 'Poppins', sans-serif;
  }
`;

export default Styled;
