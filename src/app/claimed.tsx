import { StyleSheet, Text, View } from 'react-native';

export default function CafeteriaScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>You sign. The door groans, the stairs climb, and the air smells of real rain. The cars on the street are too quiet, and nobody you pass looks familiar. Nell doesn't let go of your sleeve the whole way home, as if you might be set down and forgotten. The porch light is on. She has replaced it four times.
      {"\n\n"}
      "You owe me thirty-one birthday dinners," she says, and opens the door.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    padding: 20,
    verticalAlign: 'top',

  },
});