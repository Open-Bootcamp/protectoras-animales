import styled from 'styled-components'

const Wrapper = styled.div`
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 8px;
  @media (max-width: 500px) {
    display: flex;
    width: 100%;
    overflow-y: hidden;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
  }

  .petCard {
    border: 0.679234px solid #e1e2e3;
    border-radius: 11px;
    padding-bottom: 0.8rem;
    max-width: 232px;
    min-width: 165px;
    @media (max-width: 500px) {
      scroll-snap-align: center;
      object-fit: cover;
      min-width: 80%;

      with: 232px;
    }

    .img-container {
      max-width: 232px;
    }

    .image-pet {
      max-width: 100%;
    }
    .info {
      margin-left: 1rem;
    }
    .name-pet {
      font-size: 15px;
    }
    .tags {
      display: flex;
      gap: 0.5rem;
      span {
        color: #144353;
        background: rgba(87, 136, 135, 0.15);
        border-radius: 15.1762px;
        padding: 1px 7px;
      }
    }
    .footer-pet {
      margin-top: 10px;
      display: flex;
      justify-content: space-between;

      font-size: 10.5px;
    }
    .icon {
      font-size: 14px;
    }
    .location {
      display: flex;
      align-items: center;
      margin-right: 1rem;
    }
  }
`
export default Wrapper
