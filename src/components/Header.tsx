import styled from 'styled-components';
import { COLORS } from '../globalStyles';

const HeaderComponent = styled.header`
  position: relative;
  width: 100%;
  height: 9.6875rem;
  background-color: ${COLORS.primary};
  background-image: url('bg-header-mobile.svg');
  background-repeat: no-repeat;
  background-position: left bottom;
  background-size: cover;

  @media screen and (min-width: 767px) {
    background-image: url('bg-header-desktop.svg');
  }
`;

export const Header = () => {
  return <HeaderComponent />;
};
