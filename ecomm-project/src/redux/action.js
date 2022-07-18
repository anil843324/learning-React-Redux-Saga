
import { ADD_TO_CART ,EMPTY_CART} from "./constant"
import { REMOVE_FROM_CART } from "./constant"
export const addToCart = (data) => {

    console.log("action called", data)
    return {
        type: ADD_TO_CART,
        data
    }

}

export const removeFromCart = (data) => {

    console.log("action removeFromCart", data)
    return {
        type: REMOVE_FROM_CART,
        data
    }

}

export const emptyFromCart = () => {

    console.log("emptyFromCart")
    return {
        type: EMPTY_CART,
       
    }

}
