import styled from 'styled-components'

const Wrapper = styled.div`
  margin-bottom: 7px;

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
    @media (max-width: 768px) {
      /* width: 60%; */
    }
  }

  label {
    font-family: 'Inter';
    font-size: 12px;
    color: #3c3f41;
  }
`
export default Wrapper
