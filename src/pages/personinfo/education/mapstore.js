import {cityAsyncList} from "../../../action/actionCreator";
export const mapStateToProps =(state)=>({
    cityList:state.home.city_list
})
export const mapDispatchToProps=(dispatch)=>({
    handlecityList(){
        dispatch(cityAsyncList())
    }
})