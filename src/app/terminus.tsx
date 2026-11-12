import { StyleSheet, Text, View } from 'react-native';

export default function CafeteriaScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>The seats are warm, and nobody asks where you're going.
      {"\n\n"}
      The tunnel ends at the sea. There's a town there, strung with every sock that ever left a dryer, where a stranger hands you coffee in the mug you lost in college.
      {"\n\n"}
      Nobody here is unhappy. Nobody here is being looked for, either, or at least nobody remembers it.
      {"\n\n"}
      Some evenings, far off across the water, you notice one small yellow light, like a porch light left on. You can't think why you always stop to look.
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