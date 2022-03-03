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

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .brand {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;

      .toggle {
        display: block;
      }
    }

    ul {
      display: none;
    }
    button {
      display: none;
    }
  }
`;

export const ResponsiveNav = styled.div<{ state: boolean }>`
  display: flex;
  position: absolute;
  z-index: 5;
  background-color: white;
  height: 25vh;
  width: 100vw;
  align-items: center;
  transition: 0.3s ease-in-out;
  top: ${({ state }) => (state ? '50px' : '-400px')};
  right: 0;

  ul {
    list-style-type: none;
    li {
      margin: 1rem 0;
      margin-left: 2rem;
      a {
        text-decoration: none;
        color: #0077b6;
        font-size: 1.2rem;
        transition: 0.1s ease-in-out;
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
`;
