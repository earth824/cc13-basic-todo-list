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
    case CREATE_TODO: {
      return [action.payload, ...state];
    }
    case DELETE_TODO: {
      return state.filter(el => el.id !== action.payload);
    }
    case UPDATE_TODO: {
      const idx = state.findIndex(el => el.id === action.payload.id);
      const newState = [...state];
      newState[idx] = { ...newState[idx], ...action.payload.updateValue };
      return newState;
    }
    default:
      return state;
  }
}
