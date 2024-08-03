// src/redux/actions.js

// Action Types
export const ADD_PLANT = 'ADD_PLANT';
export const REMOVE_PLANT = 'REMOVE_PLANT';

// Action Creators
export const addPlant = (plant) => {
    return {
        type: ADD_PLANT,
        payload: plant
    };
};

export const removePlant = (id) => {
    return {
        type: REMOVE_PLANT,
        payload: id
    };
};
