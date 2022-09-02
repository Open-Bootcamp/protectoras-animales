import styled from 'styled-components';

export const ChatContainer = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;
  width: 100%;
  min-width: 48rem;
  height: 44.75rem;
  position: relative;
  margin-top: 3.0625rem;

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
    height: auto;
    min-width: 0;
  }
`;

export const GridChats = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const GridMessages = styled.div`
  border-left: 0.0625rem solid #eaecf0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 1024px) {
    border: none;
    position: absolute;
    top: 0;
    left: ${(props) => (props.show ? '0' : '-140%')};
    transition: 300ms ease-out;
    height: 100%;
    width: 100%;
    background-color: #ffffff;
  }
`;
