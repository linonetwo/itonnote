import { Margin } from 'styled-components-spacing';
import styled from 'styled-components';

export const MaximunWidthHeight = styled.div`
  height: 100%;
  width: 100%;
`;

export const MarginWH = styled(Margin)`
  height: 100%;
  width: 100%;
`;

export const WideDiv = styled.div`
  height: 30vh;
  width: 50vw;

  ${props => props.shadow ? 'box-shadow: 10px 10px 5px #888888;' : ''}
`;