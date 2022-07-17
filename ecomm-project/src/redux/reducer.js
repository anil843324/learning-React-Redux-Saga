
import { ADD_TO_CART} from "./constant"

 export  const cartData=(data=[],action)=>{


      switch(action.type){
 
         case ADD_TO_CART:
          // add to car logic
          console.log("Add to cart ",action);
          return [action.data,...data]  
          default :
          // no case matched
           return data;



      }
   




}