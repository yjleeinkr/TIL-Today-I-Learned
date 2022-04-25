import { useState } from 'react'
import Square from './Square'

const getWinner = (squares) => {
  const answers = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6],
  ]

  for (let i = 0; i < answers.length; i++) {
    const [a, b, c] = answers[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
}

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [xIsNext, setNextPlayer] = useState(true)

  const onClick = (i) => {
    if (getWinner(squares) || squares[i]) return
    squares[i] = xIsNext ? 'X' : 'O'
    setNextPlayer((prev) => !prev)
    console.log(squares)
  }

  const renderSquare = (i) => {
    return (
      <Square onClick={() => { onClick(i) }} value={squares[i]} />
    )
  }

  const winner = getWinner(squares)
  const status = winner ? `Winner : ${winner}` :
    `Next player : ${xIsNext ? 'X' : 'O'}`

  return (
    <>
      <div className='status'>{status}</div>
      <div className='board-row'>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className='board-row'>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className='board-row'>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </>
  )
}

export default Board