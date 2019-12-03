import {
    Home,
    Find,
    Order,
    Mine,
    Login,
    Register,
    
} from "pages"
import Personinfo from "../pages/personinfo/index"
import EducaTion from "../pages/personinfo/education"
export const TabBarRoute = [
    {
        path:"/home",
        component:Home,
        meta:{
            flag:true
        },
        icon:"\ue628",
        text:"首页"
    },
    {
        path:"/find",
        component:Find,
        meta:{
            flag:true
        },
        icon:"\ue663",
        text:"发现"
    },
    {
        path:"/order",
        component:Order,
        meta:{
            flag:true
        },
        icon:"\ue737",
        text:"订单"
    },
    {
        path:"/mine",
        component:Mine,
        meta:{
            flag:true,
            requiredAuth:true
        },
        icon:"\ue617",
        text:"我的"
    },
    

];

export const NoTabBarRoute = [
    {
        path:"/login",
        component:Login,
        meta:{},
        text:"登陆"

    },
    {
        path:"/register",
        component:Register,
        meta:{},
        text:"注册"
    },
    {
        path:"/personinfo",
        component:Personinfo,
        meta:{
    
        }
    },
    {
        path:"/education",
        component:EducaTion,
        meta:{
    
        }
    }

];

export const RouteConfig = TabBarRoute.concat(NoTabBarRoute)