import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const NewNoteButton = () => {
  return (
    <TouchableOpacity style={styles.pressableButton}>
      <Text style={styles.plusButton}>+</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  plusButton: {
    fontSize: 36,
    borderWidth: 2,
    borderRadius: 30,
    padding: 2,
    paddingHorizontal: 16,
    textAlign: 'center',
    color: 'white',
    borderColor: 'white',
  },
  pressableButton: {
    position: 'absolute',
    right: 10,
    bottom: 40,
  },
});

export { NewNoteButton };
