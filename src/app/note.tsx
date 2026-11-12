import { StyleSheet, Text, View } from 'react-native';

export default function CafeteriaScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>T"Could you hold this a second?"
      {"\n\n"}
      He takes it, because people do. Something heavy slides off your shoulders and settles onto his.
      {"\n\n"}
      "The desk's two floors up," you tell him. "It's an easy job. Quiet."
      {"\n\n"}
      Halfway up the stairs, you hear a counter bell. A kid who doesn't know the rules is telling a woman in a raincoat that he's sorry, but no ticket, no claim. You don't know any woman in a raincoat. You don't know why your face is wet.
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