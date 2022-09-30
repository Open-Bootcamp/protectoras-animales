import styled from 'styled-components'

const Wrapper = styled.div`
  max-width: 40%;
  margin: 50px auto;

  @media (max-width: 1068px) {
    max-width: 55%;
  }
  @media (max-width: 848px) {
    max-width: 60%;
  }
  @media (max-width: 560px) {
    max-width: 85%;
  }
  @media (max-width: 370px) {
    max-width: 90%;
  }
  .image-container {
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
  }
  .container-Verification {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .circle {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: rgba(87, 136, 135, 0.15);

    border: 1.57205px solid #578887;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .circleOne {
    width: 15px;
    height: 15px;
    background: #578887;
    border-radius: 10px;
  }
  .line {
    width: 117px;
    height: 4px;
    background: #c3c6c8;
  }
  .line-alt {
    background: #578887;
  }

  .form-container {
    text-align: center;
    .recording {
      font-size: 14px;
      text-align: center;
      color: #344054;
      margin-bottom: 1rem;
    }

    input[type='checkbox'] {
      margin-right: 10px;
    }

    .btn {
      width: 80%;
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
      color: #144353;
      cursor: pointer;
    }
  }
`

export default Wrapper
