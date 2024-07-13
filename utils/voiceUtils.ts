import Voice from 'react-native-voice';

export const startListening = () => {
  Voice.start('en-US');
};

export const stopListening = () => {
  Voice.stop();
};

Voice.onSpeechResults = (event: { value: any; }) => {
  console.log('Speech results:', event.value);
  // Handle voice input here
};
