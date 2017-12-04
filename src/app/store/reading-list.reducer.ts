export const ADD_TO_LIST = 'ADD_TO_LIST';
export const DELETE_FROM_LIST = 'DELETE_FROM_LIST';
export const UPDATE_TO_LIST = 'UPDATE_TO_LIST';
export const RESET = 'RESET';
export const LENGTH = 'LENGTH';
export const FIND = 'FIND';



export function ReadingListReducer(state: any = [], {type, payload}) {
  // console.log('ACTION:', type, payload, state);
  switch(type){

    case ADD_TO_LIST:
        let noDouble = state.filter(item => item._id !== payload._id);
        return [ ...noDouble, payload];

    case UPDATE_TO_LIST:
        let double = state.filter(item => item._id === payload._id);
        let updatedList = state.filter(item => item._id !== payload._id);
        if (double.length === 1) {
            return [ ...updatedList, payload];
        } else {
            return state
        }

    case LENGTH :
        return state.length

    case FIND :
        let exist = state.filter(item => item._id === payload._id);
        if (exist.length === 1) {
            return true;
        } else {
            return false
        }

    case RESET:
        return state = [];

    case DELETE_FROM_LIST:
      return state.filter(item => item._id !== payload._id);

    default:
      return state;
  }
}
