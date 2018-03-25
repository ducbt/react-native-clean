import {InitialGlobalState} from "./initial-global-state";

export const globalStateReducer=(state=InitialGlobalState.generate(), action)=>{

    switch(action.type){
        case 'SIGNIN':
            if(action.model.status==='submitted-success'){
                state.drawerItems.push('Books');
                state.homeViewModel.signedIn=true;
            }else{
                state.homeViewModel.signedIn=false;
            }
            return {
                ...state,
                drawerItems:state.drawerItems,
                authModel:action.model,
                signInViewModel:action.vm(action.model)
            };
        case 'INITSIGNIN':
            return {...state,signInViewModel:action.vm()};
        default:
            return state;
    }

};