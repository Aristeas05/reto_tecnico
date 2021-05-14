import types from './types';

const updatePlate = plate => {
    return {
        type: types.UPDATE_PLATE,
        payload: plate
    }
}

export default updatePlate;