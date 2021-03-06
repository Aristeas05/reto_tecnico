import types from './types';

const initialState = { plate: "" };

export default (state = initialState, action) => {
    if (action.type === types.UPDATE_PLATE) {
        return{
            ... state,
            plate: action.payload
        }
    }
    return state;

};

export const selectActivePlate = state => state.plateReducer.plate;