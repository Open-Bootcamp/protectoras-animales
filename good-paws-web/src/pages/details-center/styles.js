import styled from 'styled-components'

const MainContainer = styled.div`
  max-width: 88%;
  margin: 0 auto;
  margin-top: 2rem;

  .mq-flex {
    @media (max-width: 500px) {
      width: 280px;
    }
  }
  button {
    background-color: #144353;
    color: white;
    width: 296px;
    padding: 10px 18px;
    border: 1px solid #144353;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    border-radius: 8px;
  }
  .btn-footer {
    margin-top: 1rem;
    align-self: flex-end;
  }
  ul {
    list-style: none;
  }

  header {
    display: flex;
    gap: 1.2rem;

    @media (max-width: 500px) {
      flex-direction: column;
      justify-content: center;
      width: 100%;

      .header-center {
        text-align: center;
      }
      .header-right {
        text-align: center;
      }
    }
  }
  .header-left {
    flex: 1;
    .container {
      background: rgba(87, 136, 135, 0.15);

      border: 4px solid #ffffff;
      box-shadow: 0px 4px 6px -2px rgba(16, 24, 40, 0.03);
      border-radius: 16px;
      height: 96px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #144353;
      h2 {
        font-size: 36px;
        font-weight: 500;
      }
    }
  }
  .header-center {
    flex: 3.6;
    line-height: 1.3;
    h1 {
      font-size: 36px;
      font-weight: 700;
    }
    p {
      font-size: 32px;
      font-weight: 500;
    }
  }
  .header-right {
    flex: 1.5;

    p {
      text-align: center;
      color: #144353;
      cursor: pointer;
    }
  }

  main {
    display: flex;
    gap: 1.5rem;
    @media (max-width: 500px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .main-content {
      flex: 1.5;

      border-right: 1px solid #e1e2e3;
      padding-right: 8px;
      @media (min-width: 1439px) {
        flex: 1.3;
      }

      h3 {
        font-size: 20px;
        font-weight: 700;
        margin-bottom: 0.8rem;
      }

      li {
        display: flex;
        align-items: center;
        margin-bottom: 0.5rem;
        span {
          font-weight: 700;
          color: #3c3f41;
          margin-right: 5px;
        }
      }
      svg {
        display: inline-block;
        margin-right: 5px;
        color: #3c3f41;
      }
      .description {
        text-align: justify;
      }
    }
    .main-right {
      flex: 2;
      display: flex;
      flex-direction: column;

      .container-review {
        display: flex;
        flex-direction: column;
        gap: 12px;
      }
    }
  }
`

export default MainContainer
