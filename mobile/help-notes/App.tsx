import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NewNoteButton } from './src/components/NewNoteButton';
import { Note } from './src/components/Note';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style='auto' />

      <Note />
      <NewNoteButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 42,
    paddingHorizontal: 8,
    flex: 1,
    backgroundColor: '#3a3939',
  },
});
