import { StyleSheet, Text, View } from 'react-native';

export default function CafeteriaScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>The pages catch faster than they should. The counter bell rings. Then every lost bell in the building rings with it.
      {"\n\n"}
      Umbrellas burst up the stairwell like bats. Gloves go looking for their mates. The 3:33 pulls in with its doors open, and out step four thousand people in a century's worth of coats, blinking at the signs.
      {"\n\n"}
      The morning news calls it a gas leak. All over the city, telephones begin to ring.
      {"\n\n"}
      You sit on the curb with Nell, holding the jar labeled *Thursday*. You unscrew the lid. It's lovely out.
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