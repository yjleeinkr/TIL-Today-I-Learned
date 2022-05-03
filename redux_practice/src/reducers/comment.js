const initialState = {
  list: []
}

const ADD_CMMT = 'ADD_CMMT'

export const add_cmmt = (payload) => ({ type: ADD_CMMT, payload })

export const comment = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case ADD_CMMT:
      console.log(payload)
      return {
        ...state,
        list: [...state.list, payload]
      }
    default:
      return state
  }
}

