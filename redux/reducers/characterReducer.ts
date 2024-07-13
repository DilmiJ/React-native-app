interface Character {
    characterId: number;
    fullName: string;
    // Add more fields as per API response
  }
  
  interface CharacterState {
    characters: Character[];
  }
  
  const initialState: CharacterState = {
    characters: [],
  };
  
  const characterReducer = (state = initialState, action: any): CharacterState => {
    switch (action.type) {
      case 'SET_CHARACTERS':
        return {
          ...state,
          characters: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default characterReducer;
  