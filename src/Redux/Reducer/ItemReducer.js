import { ActionType } from "../Constants/action-type";

export const CartReducer = (state = {}, { type, payload }) => {
    console.log(type);
    switch (type) {
        case ActionType.ADD_TO_CART:
            return { ...state, ...payload };
        case ActionType.REMOVE_FROM_CART:
            return {};
        default:
            return state;
    }
};