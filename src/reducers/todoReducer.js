export const FETCH_TODO = 'FETCH_TODO';
export const CREATE_TODO = 'CREATE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export const INITIAL_TODOS = [];

export default function todoReducer(state, action) {
  switch (action.type) {
    case FETCH_TODO: {
      return action.payload;
    }
    default:
      return state;
  }
}
