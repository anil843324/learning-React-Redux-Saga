
import { PRODUCT_LIST } from "./constant"
export const productList = async() => {

     let data= await fetch("https://fakestoreapi.com/products/")

        data= await data.json()

    
    console.log("action called", data)
    return {
        type:PRODUCT_LIST,
        data
    }

}