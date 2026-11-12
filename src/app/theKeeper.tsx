import { StyleSheet, Text, View } from 'react-native';

export default function CafeteriaScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>You smooth the note flat on the counter. Rules are rules.
      {"\n\n"}
      The work is good. You catalog the gloves by hand and the umbrellas by temperament. At some point, you stop trying to remember your interview.
      {"\n\n"}
      At 2:10 a.m., the counter bell rings. The woman in front of you is very old, her raincoat dripping. In one shaking hand she holds a brass key.
      {"\n\n"}
      "It wouldn't open," she says, and looks at you a beat too long.
      {"\n\n"}
      You give her your friendliest smile, reach for a fresh tag, and ask if she has her ticket.
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