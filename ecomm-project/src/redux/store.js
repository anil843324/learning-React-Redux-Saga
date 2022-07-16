
import { createStore } from "redux"
import rootReduer from "./rootReduer"

const store=createStore(rootReduer )

export default store