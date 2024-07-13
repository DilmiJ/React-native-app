interface User {
    uid: string;
    email: string;
    // Add more fields as needed
  }
  
  interface AuthState {
    user: User | null;
  }
  
  const initialState: AuthState = {
    user: null,
  };
  
  const authReducer = (state = initialState, action: any): AuthState => {
    switch (action.type) {
      case 'SIGN_IN':
      case 'SIGN_UP':
        return {
          ...state,
          user: action.payload,
        };
      case 'SIGN_OUT':
        return {
          ...state,
          user: null,
        };
      default:
        return state;
    }
  };
  
  export default authReducer;
  