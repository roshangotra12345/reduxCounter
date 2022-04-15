import { ADDITION,SUBRACTION,RESET,MULTIPLICATION } from "../constant";

const initialState = {
    counter : 0
}

export const mainReducer = (state=initialState,action)=>{
 
 switch (action.type) {
         case ADDITION:
         return{...state,counter:state.counter+1 <=90 ? state.counter+1:state.counter}
       
         case SUBRACTION:
         return{...state,counter:state.counter-1 >= 0 ? state.counter-1 : state.counter}
          
         case RESET:
               return (initialState)
         case MULTIPLICATION:
            return{...state,counter:state.counter*2}
              

       
     default:
         return  state;
 }   


}