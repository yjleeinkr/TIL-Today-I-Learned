const initialState = {
  number: 0
}

const NUM_UP = "NUM_UP"
const NUM_DOWN = "NUM_DOWN"

export const num_up = () => ({ type: NUM_UP })
export const num_down = () => ({ type: NUM_DOWN, })

export const counter = (state = initialState, action) => {
  switch (action.type) {
    case NUM_UP:
      return {
        ...state,
        number: state.number + 1
      }
    case NUM_DOWN:
      return {
        ...state,
        number: state.number - 1
      }
    default:
      return state
  }
}