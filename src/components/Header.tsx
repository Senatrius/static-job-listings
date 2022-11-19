import styled from 'styled-components';
import { COLORS } from '../globalStyles';

const HeaderComponent = styled.header`
  position: relative;
  width: 100%;
  height: 9.6875rem;
  background-color: ${COLORS.primary};
  background-image: url('./images/bg-header-mobile.svg');
  background-repeat: no-repeat;
  background-position: left bottom;
  background-size: cover;
  z-index: -1;

  @media screen and (min-width: 767px) {
    background-image: url('./images/bg-header-desktop.svg');
  }
`;

export const Header = () => {
  return <HeaderComponent />;
};
