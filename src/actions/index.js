const ADD = 'ADD'
const MINUS = 'MINUS'

//加一
export const add = () => {
  return {
    type: ADD
  }
}

//减一
export const minus = () => {
  return {
    type: MINUS
  }
}