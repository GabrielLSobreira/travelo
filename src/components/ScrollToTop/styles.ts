import styled from 'styled-components';

export const ToTop = styled.div<{ scrollState: boolean }>`
  display: ${({ scrollState }) => (scrollState ? 'block' : 'none')};
  position: fixed;
  bottom: 1rem;
  right: 2rem;
  z-index: 10;
  cursor: pointer;
  border-radius: 2rem;
  background-color: #1900ff39;
  padding: 1rem;

  img {
    height: 1.5rem;
  }
`;
