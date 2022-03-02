import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .brand {
    .container {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0 0.4rem;
      font-size: 1.2rem;
      font-weight: 900;
      text-transform: uppercase;
    }

    .toggle {
      display: none;
    }
  }

  ul {
    display: flex;
    gap: 1rem;

    li {
      a {
        color: #0077b6;
        font-size: 1.2rem;
        transition: 0s ease-in-out;
        &:hover {
          color: #023e8a;
        }
      }
      &:first-of-type {
        a {
          color: #023e8a;
          font-weight: 900;
        }
      }
    }
  }

  button {
    padding: 0.5rem 1rem;
    border-radius: 1rem;
    border: none;
    color: white;
    background-color: #48cae4;
    text-transform: uppercase;
    font-size: 1.1rem;
    letter-spacing: 0.1rem;
    transition: 0.3s ease-in-out;
    &:hover {
      background-color: #023e8a;
    }
  }
`;
