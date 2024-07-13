import React, { useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { setCharacters } from '../redux/actions/characterActions';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const characters = useSelector((state: RootState) => state.characters.characters);

  useEffect(() => {
    axios.get('https://thronesapi.com/api/v2/Characters')
      .then(response => {
        dispatch(setCharacters(response.data)); // Redux action to set characters in state
      })
      .catch(error => {
        console.error('Error fetching characters:', error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Game of Thrones Characters</Text>
      <FlatList
        data={characters}
        keyExtractor={(item) => item.characterId.toString()}
        renderItem={({ item }) => (
          <View style={styles.characterItem}>
            <Text style={styles.characterName}>{item.fullName}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  characterItem: {
    marginBottom: 10,
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
    width: '100%',
  },
  characterName: {
    fontSize: 18,
  },
});

export default HomeScreen;
