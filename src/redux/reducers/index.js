const initialState = {
  // people: [],
  // planets: [],
  counter: 0
}
export default function reducer(state = initialState, action) {
  switch (action.type) {
    // case 'SET_PEOPLE':
    //   return { ...state, people: [...state.people, action.payload] }
    // case 'SET_PLANETS':
    //   return { ...state, planets: [...state.planets, action.payload] }
    case 'INC':
      return { ...state, counter: state.counter + 1 }
    case 'DEC':
      return { ...state, counter: state.counter - 1 }
    default:
      return state
  }
};