
import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART } from "./constant"

export const cartData = (data = [], action) => {


     switch (action.type) {

          case ADD_TO_CART:
               // add to car logic
               console.log("Add to cart ", action);
               return [action.data, ...data]
          case REMOVE_FROM_CART:
               // add to car logic
               console.log("REMOVE_FROM_CART ", action);
                  let filterData=data.filter((ele) =>ele.id!==action.payload)
               return [...filterData]
          case EMPTY_CART:
               // add to car logic
               console.log("EMPTY_CART ", action);
               data = []
               return [...data]


          default:
               // no case matched
               return data;


     }





}