import { PropsWithChildren } from 'react';
import styled from 'styled-components';

const MainComponent = styled.main`
  width: 86%;
  max-width: 69.375rem;
  margin: 0 auto;
`;

export const Main = ({ children }: PropsWithChildren) => {
  return <MainComponent>{children}</MainComponent>;
};
