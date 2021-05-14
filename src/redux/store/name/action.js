import types from './types';

const updateName = name => {
    return {
        type: types.UPDATE_NAME,
        payload: name,
    }
}

export default updateName;