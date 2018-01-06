export const globalStateReducer = (state = {booksListViewModel:{}, signInViewModel:{}, drawerItems:['Home','SignIn'], authModel:{}}, action) => {

	switch (action.type) {
		case 'SIGNIN':
			if(action.model.status === 'submitted-success'){
				state.drawerItems.push('Books');
			}
			return { ...state, drawerItems: state.drawerItems, authModel: action.model, signInViewModel : action.vm(action.model) };
		case 'INITSIGNIN':
			return { ...state, signInViewModel : action.vm() };
		case 'NAVIGATION':
			if(state.authModel.status === 'submitted-success'){
				return { ...state, drawerItems : state.drawerItems};
			}else {
				return state;
			}
    default:
      return state;
  }

};