import { Dispatch } from 'redux';
import axios from 'axios';

export const setCharacters = (characters: any) => ({
  type: 'SET_CHARACTERS',
  payload: characters,
});

export const fetchCharacters = () => async (dispatch: Dispatch) => {
  try {
    const response = await axios.get('https://thronesapi.com/api/v2/Characters');
    dispatch(setCharacters(response.data));
  } catch (error) {
    console.error('Error fetching characters:', error);
    throw error;
  }
};
