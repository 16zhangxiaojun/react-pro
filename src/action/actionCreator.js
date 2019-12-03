import {cityListType} from "./actionsTypes";
import {createAction} from "redux-actions";
import {cityApi} from "../api/index"
export const cityAsyncList =()=>{
    let listAction = createAction(cityListType,(data)=>({data:data}));
    console.log("listAction");
    return async (dispatch)=>{
        let data = await cityApi();
        // console.log(data);
        dispatch(listAction(data));
    }
}