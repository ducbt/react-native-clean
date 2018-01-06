export const globalStateReducer = (state = {booksListViewModel:{}, signInViewModel:{}, drawerItems:['Home','SignIn']}, action) => {

  switch (action.type) {
		case 'SIGNIN':
			return {signInViewModel : action.vm(action.model)};
		case 'INITSIGNIN':
		  return {signInViewModel : action.vm()};
    default:
      return state;
  }

};