
// import { createStore } from "redux"
import {configureStore} from "@reduxjs/toolkit"
import rootReduer from "./rootReduer"

// const store=createStore(rootReduer )

 const store=configureStore({reducer:rootReduer})

export default store