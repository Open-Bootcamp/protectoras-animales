import styled from 'styled-components'

const ModalWrapper = styled.div`
  text-align: center;
  .btn-mod {
    background-color: #144353;
    color: white;
    width: 296px;
    padding: 10px 18px;
    border: 1px solid #144353;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    border-radius: 8px;
    margin-bottom: 0.5rem;
  }
  p {
    margin-bottom: 1rem;
  }
  .btn-fw {
    width: 100%;
  }

  .btn-alt {
    color: #144353;
    background-color: #fff;
  }
  .flex {
    display: flex;
    gap: 1rem;
  }
`

export default ModalWrapper
