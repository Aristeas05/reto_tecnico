import types from './types';

const initialState = { name: "" };

export default (state = initialState, action) => {
    if (action.type === types.UPDATE_NAME) {
        return{
            ... state,
            name: action.payload
        }
    }
    return state;

};

export const selectActiveName = state => state.nameReducer.name;