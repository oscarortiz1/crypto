import styled from 'styled-components'

const Card = ({ children, width, height }) => {
  return (
    <CardStyled className='card_modal' width={width} height={height}>
      {children}
    </CardStyled>
  )
}

const CardStyled = styled.div`
  padding: 10px;
  border-radius: 30px;
  background-color: white;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || 'auto'};
  min-height: 200px;
  &:hover {
    transform: scale(1.1);
    transition: 0.5s;
  }
`

export default Card
