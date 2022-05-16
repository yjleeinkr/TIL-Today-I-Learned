import { useEffect, useState } from 'react';
import { CreateBoxStyle } from '../App'

type Style = { backgroundColor: string, width: string, height: string }

// const Square: React.FC<CreateBoxStyle> = ({ createBoxStyle }): JSX.Element => {
//   const [style, setStyle] = useState<Style | {}>({})

//   useEffect(() => {
//     setStyle(createBoxStyle())
//   }, [createBoxStyle])

//   return (
//       <div style={style}></div>  
//   )
// }

const Square = ({ createBoxStyle } : CreateBoxStyle ): JSX.Element => {
  const [style, setStyle] = useState<Style | {}>({})

  useEffect(() => {
    setStyle(createBoxStyle())
  }, [createBoxStyle])

  return (
      <div style={style}></div>  
  )
}

export default Square;