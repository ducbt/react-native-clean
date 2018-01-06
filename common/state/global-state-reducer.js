export const globalStateReducer = (state = {booksListViewModel:{}, signInViewModel:{}, drawerItems:['Home','SignIn'], authModel:{}}, action) => {
  switch (action.type) {
		case 'SIGNIN':
			return { ...state, authModel: action.model, signInViewModel : action.vm(action.model) };
		case 'INITSIGNIN':
			return { ...state, signInViewModel : action.vm() };
		case 'NAVIGATION':
			if(state.authModel.status === 'submitted-success'){
				return { ...state, drawerItems : ['Home','SignIn','Books'] };
			}else {
				return { ...state, drawerItems : ['Home','SignIn'] };
			}
    default:
      return state;
  }

};