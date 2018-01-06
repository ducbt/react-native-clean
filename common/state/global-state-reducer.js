export const globalStateReducer = (state = {booksListViewModel:{}, signInViewModel:{}}, action) => {

  switch (action.type) {
		case 'SIGNIN':
			return {signInViewModel : action.vm(action.model)};
		case 'INITSIGNIN':
		  return {signInViewModel : action.vm()};
    case 'LOAD':
      return {booksListViewModel: action.vm(action.model)};
    case 'SAVE':
      return {booksListViewModel: action.vm(action.model)};
    default:
      return state;
  }

};