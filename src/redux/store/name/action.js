const updateName = name => {
    return {
        type: 'UPDATE_NAME',
        payload: name,
    }
}

export default updateName;