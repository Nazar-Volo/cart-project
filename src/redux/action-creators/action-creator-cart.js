import {ADD_CART, RMV_CART, RMV_ONE} from '../action-types'
export const addCart = (item) => {
    return {
        type: ADD_CART,
        payload: item
    }
}

// remove items
export const deleteCart = (id) => {
    return {
        type: RMV_CART,
        payload: id
    }
}

// remove individual item

export const removeOne = (item) => {
    return {
        type: RMV_ONE,
        payload: item
    }
}