import styled from 'styled-components'

const MainContainer = styled.div`
  max-width: 70%;
  margin: 0 auto;

  @media (max-width: 992px) {
    max-width: 85%;
  }
  @media (max-width: 800px) {
    max-width: 92%;
  }
  .section-form {
    display: flex;
    align-items: center;
    min-height: 100vh;
    .header-form {
      margin-bottom: 20px;
    }
    h3 {
      margin-bottom: 4px;
      font-size: 36px;
    }
    .subt {
      color: #697172;
    }
  }

  .form-container {
    flex: 1.2;
    @media (max-width: 768px) {
      max-width: 28rem;
      margin: 0 auto;
    }
    .recording {
      font-size: 14px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: #344054;
    }

    .btn {
      width: 100%;
      background: #144353;
      padding: 10px 18px;
      border: 1px solid #144353;

      box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
      border-radius: 8px;
      color: white;
      font-size: 16px;
      cursor: pointer;
    }

    .text-center {
      margin-top: 10px;
      text-align: center;
      color: #144353;
    }
  }
  .img-container {
    flex: 2;
    @media (max-width: 768px) {
      display: none;
    }

    img {
      width: 100%;
    }
  }
`

export default MainContainer
