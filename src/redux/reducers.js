// src/redux/reducers.js

import { ADD_PLANT, REMOVE_PLANT } from './actions';

const initialState = {
    plants: []
};

const plantReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PLANT:
            return {
                ...state,
                plants: [...state.plants, action.payload]
            };
        case REMOVE_PLANT:
            return {
                ...state,
                plants: state.plants.filter(plant => plant.id !== action.payload)
            };
        default:
            return state;
    }
};

export default plantReducer;
