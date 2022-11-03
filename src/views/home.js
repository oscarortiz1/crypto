import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Card from '../components/card'
import Modal from '../components/modal'
import { getCoins } from '../services/coins'

const Home = () => {
  const [coins, setCoins] = useState([])
  const [openModal, setOpenModal] = useState(false)
  const [index, setIndex] = useState()
  const [allCoins, setAllCoins] = useState([])
  const [select, setSelect] = useState('')

  const onCloseSession = () => {
    window.localStorage.removeItem('uidPrueba')
    window.location.reload()
  }
  const onClose = (coin) => {
    setOpenModal(true)
    setIndex(coin)
  }

  useEffect(() => {
    const Services = async () => {
      const response = await getCoins()
      setCoins(response)
      setAllCoins(response.data)
    }
    Services()
  }, [])

  return (
    <HomeStyled>
      <div>
        <h1>CRYPTO COINS</h1>
        <button className='close' onClick={onCloseSession}>
          Cerrar sesión
        </button>
        <div>
          <p className='text'>
            Actualmente hay
            <strong> {coins?.info?.coins_num}</strong> criptomonedas en el mundo
          </p>
          <h3>Selecciona una criptomoneda</h3>
          <select
            name='select'
            id='select'
            onChange={(e) => setSelect(e.target.value)}
          >
            <option value=''>Seleccione una opción</option>
            {allCoins.map((coin, index) => (
              <option key={index} value={coin.name}>
                {coin.name}
              </option>
            ))}
          </select>
          <div className='container'>
            {coins?.data
              ?.filter((coin) => coin.name === select || select === '')
              .map((coin, index) => (
                <div key={'card' + index} onClick={() => onClose(coin)}>
                  <Card
                    className='list'
                    key={coin.id}
                    width={'auto'}
                    height={'auto'}
                  >
                    <div className='card'>
                      <div className='card__info'>
                        <h2>{coin?.name}</h2>
                        <p>
                          <strong>Ranking: </strong>
                          {coin?.rank}
                        </p>
                        <p>
                          <strong>Precio: </strong>
                          {coin?.price_usd} USD
                        </p>
                        <p>
                          <strong>Porcentaje de cambio: </strong>
                          {coin?.percent_change_24h}%
                        </p>
                        <p className='info'>
                          <b>Click para ver más información</b>
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
          </div>
        </div>
      </div>
      {openModal && <Modal setOpenModal={setOpenModal} coin={index} />}
    </HomeStyled>
  )
}

const HomeStyled = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  margin-top: 3rem;
  position: relative;
  .close {
    background-color: #f44336;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 10px;
    position: absolute;
    top: 0;
    right: 5rem;
  }
  h1 {
    text-align: center;
  }
  .text {
    text-align: center;
  }
  .container {
    width: 1000px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    place-content: center;
    grid-gap: 4rem;
    margin: 1rem;
    .card {
      margin: 1rem;
    }
    .info {
      margin-top: 1rem;
      text-align: center;
      font-size: 14px;
      color: green;
    }
  }
  .card_modal {
    cursor: pointer;
  }
  select {
    width: 200px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid #ccc;
    padding: 5px;
    margin: 1rem;
  }
`

export default Home
