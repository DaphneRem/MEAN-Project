export const ADD_TO_LIST = 'ADD_TO_LIST';
export const DELETE_FROM_LIST = 'DELETE_FROM_LIST';
export const UPDATE_TO_LIST = 'UPDATE_TO_LIST';
export const RESET = 'RESET';
export const LENGTH = 'LENGTH';


export const ReadingListReducer = (state: any = [], {type, payload}) => {
  // console.log('ACTION:', type, payload, state);
  switch(type){

    case ADD_TO_LIST:
        let noDouble = state.filter(item => item._id !== payload._id);
        return noDouble.concat([Object.assign({}, payload)]);

    case UPDATE_TO_LIST:
        let double = state.filter(item => item._id === payload._id);
        let updatedList = state.filter(item => item._id !== payload._id);
        if (double.length === 1) {
            return updatedList.concat([Object.assign({}, payload)]);
        } else {
            return state
        }

    case LENGTH :
        return state.length

    case RESET:
        return state = [];

    case DELETE_FROM_LIST:
      return state.filter(item => item._id !== payload._id);

    default:
      return state;
  }
}
