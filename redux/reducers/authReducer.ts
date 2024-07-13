import { User } from '@react-native-firebase/auth';

const initialState = {
  user: {} as User,
};

const authReducer = (state = initialState, action: any) => {
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
        user: {} as User,
      };
    default:
      return state;
  }
};

export default authReducer;
