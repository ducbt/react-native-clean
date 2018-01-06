export const globalStateReducer = (state = {booksListViewModel:{}, signInViewModel:{}, drawerItems:['Home','SignIn'], authModel:{}}, action) => {

	//console.log(action);

	switch (action.type) {
		case 'SIGNIN':
			let newDrawerItems = ['Home','SignIn'];
			if(action.model.status === 'submitted-success'){
				newDrawerItems.push('Books');
			}
			return { ...state, drawerItems: newDrawerItems, authModel: action.model, signInViewModel : action.vm(action.model) };
		case 'INITSIGNIN':
			return { ...state, signInViewModel : action.vm() };
		case 'NAVIGATION':
			if(state.authModel.status === 'submitted-success'){
				return { ...state, drawerItems : ['Home','SignIn','Books'] };
			}else {
				return state;
			}
    default:
      return state;
  }

};