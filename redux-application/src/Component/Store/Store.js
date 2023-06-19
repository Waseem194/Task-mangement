import { createStore, combineReducers } from "redux";
let Initial = {
    song:[],
   
};
let data = combineReducers({userSection, productSection});

export let meraStore = createStore(data);

