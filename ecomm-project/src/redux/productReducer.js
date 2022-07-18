
import { PRODUCT_LIST} from "./constant"

export  const productData=(data=[],action)=>{


     switch(action.type){

        case PRODUCT_LIST:
         // add to car logic
         console.log("Product list ",action);
         return [action.data]  
         
         default :
         // no case matched
          return data;


     }
  




}