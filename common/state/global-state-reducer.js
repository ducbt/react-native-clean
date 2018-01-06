export const globalStateReducer = (state = {booksListViewModel:{}, signInViewModel:{}, drawerItems:['Home','SignIn'], authModel:{}}, action) => {

  switch (action.type) {
		case 'SIGNIN':

			console.log('SIGNIN');
			console.log(action.model);

			return { ...state, authModel: action.model, signInViewModel : action.vm(action.model) };
		case 'INITSIGNIN':
			return { ...state, signInViewModel : action.vm() };
		case 'NAVIGATION':

			console.log('NAVIGATION');
			console.log(state.authModel);


			return { ...state, drawerItems : ['Home','SignIn','Books'] };
    default:
      return state;
  }

};