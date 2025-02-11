import { ActionType } from "../Constants/action-type";

// export const selectedItem = (itemId)=>{
//     return{
//         type: ActionType.SELECTED_ITEM,
//         payload: itemId,
//     };
// };

export const addToCart=(Item)=>{
    return{
        type: ActionType.ADD_TO_CART,
        payload:Item,
    };
};

export const removeFromCart=(Item)=>{
    return{
        type: ActionType.REMOVE_FROM_CART,
        payload:Item,
    };
};