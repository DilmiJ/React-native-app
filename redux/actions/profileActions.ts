import { Dispatch } from 'redux';
import { fetchUserProfile } from '../../api/userApi'; // Adjust path as per your project structure

export const fetchUserProfile = async (userId: string) => {
  try {
    // Example logic to fetch user profile from an API or Firebase Firestore
    const response = await fetchUserProfile(userId);
    return response.data; // Adjust based on your API response structure
  } catch (error) {
    console.error('Error fetching user profile:', error);
    throw error; // Rethrow error to handle it in the action dispatch function
  }
};

export const fetchUserProfileAction = (userId: string) => async (dispatch: Dispatch) => {
  try {
    const userProfile = await fetchUserProfile(userId);
    dispatch({ type: 'FETCH_USER_PROFILE_SUCCESS', payload: userProfile });
  } catch (error) {
    console.error('Error fetching user profile:', error);
    // Handle error (e.g., show error message)
  }
};
