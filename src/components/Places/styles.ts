import styled from 'styled-components';

export const Section = styled.section`
  padding: 2rem 0;

  .title {
    text-align: center;
  }

  .packages {
    display: flex;
    justify-content: center;
    margin: 2rem 0;

    ul {
      display: flex;
      width: max-content;

      li {
        padding: 1rem 2rem;
        border-bottom: 0.1rem solid black;
        cursor: pointer;
      }
      .active {
        border-bottom: 0.5rem solid #8338ec;
      }
    }
  }

  .destinations {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    padding: 0 3rem;

    .destination {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      background-color: #8338ec14;
      border-radius: 1rem;
      transition: 0.3s ease-in-out;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
      }
    }
    img {
      width: 100%;
    }

    .info {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .services {
        display: flex;
        gap: 0.3rem;
        img {
          width: 2rem;
          border-radius: 1rem;
          background-color: #4d2ddb84;
          padding: 0.2rem 0.4rem;
        }
      }
    }
    .distance {
      display: flex;
      justify-content: space-between;
    }
  }

  @media screen and (min-width: 760px) and (max-width: 850px) {
    .destinations {
      grid-template-columns: repeat(2, 1fr);
      padding: 0;
    }
  }

  @media screen and (min-width: 280px) and (max-width: 760px) {
    .packages {
      ul {
        li {
          padding: 0 0.5rem;
          font-size: 2vh;
          padding: 1rem;
        }
        .active {
          border-bottom-width: 0.3rem;
        }
      }
    }

    .destinations {
      grid-template-columns: 1fr;
      padding: 0;
    }
  }
`;
