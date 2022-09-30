import styled from 'styled-components'

const Wrapper = styled.div`
  margin-bottom: 7px;
  textarea {
    width: 100%;
    border: 1px solid #c3c6c8;
    /* Shadow/xs */
    outline: none;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    border-radius: 8px;
    height: 249px;
    padding: 3px;
  }
  .input-box {
    text-align: left;
    width: 80%;
    margin: 0 auto;
  }
  .error-message {
    color: tomato;
    font-size: 11px;
  }

  input {
    display: block;
    width: 100%;
    border: 1px solid #c3c6c8;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    border-radius: 8px;
    padding: 10px 14px;
    margin-top: 2px;
    outline: none;
    color: #3c3f41;
    margin: 0 auto;
    @media (max-width: 768px) {
      /* width: 60%; */
    }
  }
  .checbox {
    input {
      width: auto;
      display: inline-block;
    }
  }
  label {
    font-family: 'Inter';
    font-size: 12px;
    color: #3c3f41;
    width: 100%;
    text-align: right;
  }
`
export default Wrapper
