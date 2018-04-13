import {InitialGlobalState} from './initial-global-state';

export const globalStateReducer = (
    state = InitialGlobalState.generate(), action) => {

  switch (action.type) {
    case 'SIGNIN':
      state.homeViewModel.signedIn = action.model.status ===
          'submitted-success';
      return {
        ...state,
        authModel: action.model,
        signInViewModel: action.vm(action.model),
      };
    case 'INITSIGNIN':
      return {...state, signInViewModel: action.vm()};
    default:
      return state;
  }

};