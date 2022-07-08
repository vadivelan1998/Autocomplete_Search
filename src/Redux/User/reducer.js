import { ADDUSER } from "./action";
import { ADDPAGINATEDUSER } from "./action";

var init={
    user:[],
    info:{}
}

export const userReducer=(store=init,{type,payload})=>{
     switch (type) {
       case ADDUSER:
         return { ...store, user: payload.results, info: payload.info };
       case ADDPAGINATEDUSER:
         return {
           ...store,
           user: [...store.user, ...payload.results],
           info: payload.info,
         };
       default:
         return { ...store };
     }
}
