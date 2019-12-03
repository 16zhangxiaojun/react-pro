import {handleActions} from "redux-actions";
import {cityListType} from "../../action/actionsTypes"

const defaultState = {
    city_list:[]
}

export default handleActions({
    [cityListType]:(state,action)=>{
        let homeState = JSON.parse(JSON.stringify(state));
        homeState.city_list = action.payload.data;
        // console.log(action)
        return homeState
    }

},defaultState)