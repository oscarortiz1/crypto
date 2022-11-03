import styled from 'styled-components'
import Card from './card'

const Modal = ({ coin, setOpenModal }) => {
  return (
    <ModalStyled>
      <Card width={'600px'} height={'300px'}>
        <img
          src={
            'https://cdn.icon-icons.com/icons2/1674/PNG/512/close_111152.png'
          }
          alt='logo'
          onClick={() => setOpenModal(false)}
        />
        <h1>{coin?.name}</h1>
        <p>Información más relevante:</p>
        <br />
        <p>
          Símbolo <strong>{coin?.symbol}</strong>
        </p>
        <p>
          Porcentaje de cambio en 24h:
          <strong> {coin?.percent_change_24h}%</strong>
        </p>
        <p>
          Market Cap USD <strong>{coin?.market_cap_usd}</strong>
        </p>
        <p>
          Precio en BTC <strong>{coin?.price_btc}</strong>{' '}
        </p>
        <p>
          Supply <strong>{coin?.tsupply}</strong>{' '}
        </p>
      </Card>
    </ModalStyled>
  )
}

const ModalStyled = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  min-width: 1100px;
  background-color: rgba(0, 0, 0, 0.5);
  .card_modal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    cursor: context-menu;
  }
  h1 {
    margin: 1rem;
  }
  img {
    width: 50px;
    position: absolute;
    right: 1rem;
    cursor: pointer;
  }
`

export default Modal
