const initialState = {
  list: []
}

const ADD_CMMT = 'ADD_CMMT'
const UPDATE_CMMT = 'UPDATE_CMMT'
export const add_cmmt = (payload) => ({ type: ADD_CMMT, payload })
export const update_cmmt = (payload) => ({ type: UPDATE_CMMT, payload })

export const comment = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case ADD_CMMT:
      return {
        ...state,
        list: [...state.list, payload]
      }
    case UPDATE_CMMT:
      console.log(payload)
      return {
        ...state,
      }
    default:
      return state
  }
}

