export class InitialGlobalState {
    static generate(){
        return {
            booksListViewModel:{},
            homeViewModel:{signedIn:false},
            signInViewModel:{},
            authModel:{}
        }
    }
}