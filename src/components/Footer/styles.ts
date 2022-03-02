import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-evenly;
  background-color: #d0d8ff;
  border-radius: 0.5rem;
  padding: 2.5rem;

  ul {
    display: flex;
    list-style-type: none;
    gap: 2rem;

    li {
      a {
        text-decoration: none;
        color: black;
        transition: 0.3s ease-in-out;

        &:hover {
          color: #302ce9;
        }
      }

      svg {
        font-size: 1.3rem;
        transition: 0.3s ease-in-out;
        cursor: pointer;

        &:hover {
          color: #302ce9;
        }
      }
    }
  }
`;