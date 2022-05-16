import { useCallback, useState } from "react";
import Square from "./component/Square";

export interface BoxStyle {
  backgroundColor: string,
  width: string,
  height: string,
}

export interface CreateBoxStyle {
  createBoxStyle(): BoxStyle
}

// const App: React.FC = ()=>{
//   const [size, setSize] = useState<number>(100);

//   const cb = (): BoxStyle => {
//     return {
//       backgroundColor: 'yellow',
//       width: `${size}px`,
//       height: `${size}px`
//     }
//   }
  
//   const createBoxStyle = useCallback(cb, [size])  

//   const updateNumber = (e: React.ChangeEvent<HTMLInputElement>): void => {
//     const { valueAsNumber } = e.target
//     setSize(valueAsNumber)
//   }

//   return (
//     <div className="App">
//       <input type="number" onChange={updateNumber} value={size }/>
//       <Square createBoxStyle={createBoxStyle} />
//     </div >
//   )
// }
const App = () =>{
  const [size, setSize] = useState(100);

  const cb = (): BoxStyle => {
    return {
      backgroundColor: 'yellow',
      width: `${size}px`,
      height: `${size}px`
    }
  }
  
  const createBoxStyle = useCallback(cb, [size])  

  const updateNumber = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { valueAsNumber } = e.target
    setSize(valueAsNumber)
  }

  return (
    <div className="App">
      <input type="number" onChange={updateNumber} value={size }/>
      <Square createBoxStyle={createBoxStyle} />
    </div >
  )
}

export default App;
