import styled, { keyframes } from 'styled-components';

export const ZoomAnimation = keyframes`
  0% {
    transform: rotate(0deg) scale(0.0);
    transform-style: preserve-3d;
    transition: all linear;
  }
  50% {
    transform: scale(0.5);
    transform-style: preserve-3d;
    transition: all linear;
  }
  100% {
    transform: rotate(360deg) scale(1.0);
    transform-style: preserve-3d;
    transition: all linear;
  }
`;

const KeyboardAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const FlowAnimation = keyframes`
  0% {
    margin-left: 50%;
  }
  100% {
    margin-left: 25%;
  }
`;

export const AppWrapper = styled.section`
  display: flex;
  width: 100%;
  padding: 10px;
  transform: translateY(15%);
  .child {
    margin: auto;
  }
`;

export const MobileWrapper = styled.section`
  max-width: 300px;
  height: 500px;
  border-radius: 6px;
  background-color: #ffffff;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.8);
`;

export const CardWrapper = styled.div`
  width: auto;
  margin: 20px 20px;
  height: 130px;
  border-radius: 16px;
  background: ${props => (props.flip ? '#4691e9' : '#434343')};
  padding: 10px;
  color: #ffffff;
  cursor: pointer;
  position: relative;
  box-shadow: 2px 1px 2px 1px #d8d8d8;
`;

export const CardNumber = styled.div`
  position: absolute;
  margin-top: 18px;
  margin-left: 5px;
  color: #ffffff;
  letter-spacing: 0.5px;
  font-size: 0.8rem;
  opacity: 0.7;
`;

export const Month = styled.div`
  position: absolute;
  bottom: 40px;
  margin-left: 5px;
  color: #ffffff;
  font-size: 0.7rem;
  font-weight: 600;
  opacity: 0.3;
  text-transform: uppercase;
`;

export const OwnerName = styled.div`
  position: absolute;
  bottom: 20px;
  margin-left: 5px;
  color: #ffffff;
  font-size: 0.7rem;
  text-transform: uppercase;
  opacity: 0.3;
`;

export const CvvWrapper = styled.div`
  position: absolute;
  bottom: 40px;
  right: 10px;
  font-size: 0.7rem;
  font-weight: 600;
  opacity: 0.5;
  text-transform: uppercase;
  color: #ffffff;
  img {
    margin-left: 5px;
    width: 15px;
  }
`;

export const StyledInput = styled.input`
  margin-top: 15px;
  line-height: 25px;
  margin-left: 25%;
  margin-right: 25%;
  width: 50%;
  padding: 5px;
  border-radius: 4px;
  text-align: center;
  font-size: 0.8rem;
  animation: ${FlowAnimation} 0.5s;
  &:active {
    border: 1px solid #ffffff;
  }
  &:focus {
    border: 1px solid #ffffff;
  }
`;

export const ButtonsWrapper = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  padding-left: 0px;
  padding: 8px;
  text-align: center;
  background-color: #243037;
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 6px;
  animation: ${KeyboardAnimation} 0.8s ease-in;
  li {
    color: #ffffff;
    font-weight: bold;
    text-align: center;
    font-size: ${props => (props.small ? '1rem' : '1.2rem')};
    height: ${props => (props.small ? '22px' : '46px')};
    flex: ${props => (props.small ? '1 0 16%' : '1 0 20%')};
    cursor: pointer;
    margin: 5px;
  }

  li:hover::after {
    content: '';
    background-color: #ffffff;
    width: ${props => (props.small ? '20px ' : '45px')};
    height: ${props => (props.small ? '22px' : '45px')};
    border-radius: 50%;
    display: block;
    margin: 5px;
    flex: 1 0 20%;
    margin-top: ${props => (props.small ? '-22px' : '-35px')};
    opacity: 0.5;
    margin-left: ${props => (props.small ? '13px' : '')};
  }
`;

export const TextWrapper = styled.div`
  color: #4691e9;
  font-weight: bold;
  font-size: 1rem;
  text-align: center;
`;

const Bounce = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  20%, 80% {
    transform: translateY(-30px);
  }
  40%, 60% {
    transform: translateY(-50px);
  }
`;

export const DetialsCard = styled.div`
  background-color: #ffffff;
  min-height: 350px;
  width: 300px;
  border-radius: 8px;
  font-family: 'Lato';
  padding: 8px;
  animation: ${props => (props.animate ? `${Bounce} 0.5s ease-out` : ``)};
`;

export const UserImage = styled.div`
  display: flex;
  margin: 10px;
  img {
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }
  div {
    margin-left: 5px;
    text-align: left;
  }
`;

export const HintText = styled.div`
  color: #5a5757;
  font-size: 0.8rem;
  font-weight: bold;
  a {
    margin-left: 5px;
    color: #4691e9;
    text-decoration: none;
    cursor: pointer;
  }
  a:hover {
    cursor: pointer;
    text-decoration: none;
  }
`;

export const TypeHeading = styled.div`
  font-weight: bold;
  font-size: 1rem;
`;
