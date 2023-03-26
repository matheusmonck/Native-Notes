import { View, Text, StyleSheet } from 'react-native';

const Note = () => {
  return (
    <View style={styles.container}>
      <Text></Text>
      <Text>Note</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
  },
});

export { Note };
