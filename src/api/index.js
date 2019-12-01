import http from "utils/request";

export const week_choiceApi = ()=>http.get({
    url:"/ajax/hub/home/v1/web/week_choice.json",
    data:{
        
    }
})