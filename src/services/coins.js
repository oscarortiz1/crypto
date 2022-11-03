import axios from 'axios'

export const getCoins = async () => {
  const response = await axios.get(
    'https://api.coinlore.net/api/tickers/?start=0&limit=20'
  )
  return response.data
}
