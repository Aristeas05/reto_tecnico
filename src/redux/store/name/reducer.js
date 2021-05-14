const initialState = { name: "" };

export default (state = initialState, action) => {
    if (action.type === 'UPDATE_NAME') {
        return{
            ... state,
            name: action.payload
        }
    }
    return state;

};

export const selectActiveName = state => state.nameReducer.name;