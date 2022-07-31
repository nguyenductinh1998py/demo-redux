import * as types from '../constants/index';

export const UpdateProduct = (title, id) => {
    return {
        type: types.UPDATE_PRODUCT,
        payload: {
            title,
            id
        }
    }
};