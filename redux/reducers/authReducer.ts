// Define a user interface that matches your application's user object structure
interface User {
    uid: string;
    email: string;
    displayName?: string;
    photoURL?: string;
    // Add more fields as per your application's requirements
  }
  
  // Define the initial state for authentication
  interface AuthState {
    user: User | null; // User type defined here
  }
  
  // Initial state for authentication
  const initialState: AuthState = {
    user: null,
  };
  
  // Reducer function to handle authentication actions
  const authReducer = (state = initialState, action: any): AuthState => {
    switch (action.type) {
      case 'SIGN_IN':
      case 'SIGN_UP':
        return {
          ...state,
          user: action.payload, // Assuming action.payload is of type User
        };
      case 'SIGN_OUT':
        return {
          ...state,
          user: null, // Reset user state on sign out
        };
      default:
        return state;
    }
  };
  
  export default authReducer;
  