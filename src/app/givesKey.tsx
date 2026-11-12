import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function StartScreen() {
  return (
    <View style={styles.container}>
    <Text>Rule one survives your first shift by about fifteen minutes. She takes the key and walks through the staff door, the one you were told was a dead end. You follow her wet footprints down to a tunnel and a rust-green door.
        {"\n\n"}
        She stands with the key in the lock, unturned. "It won't open for me alone," she says. "I was hoping you'd come."
        {"\n\n"}
        Up close, she has your chin. There's a gap where a tooth once went missing, long since fixed with a slightly wrong color.
        {"\n\n"}
        "It's Nell. Your sister. I was twenty-four when you came down here. I'm fifty-five now. You're still twenty-nine, you idiot." She pulls out a claim form, every line filled in but one. "Sign it. That takes you off the ledger, and the door opens for both of us."
        {"\n\n"}
        "There are others," she adds quietly. "Four thousand of them. The ledger is the only thing that says they're lost. I don't know what happens if it's gone."
        {"\n\n"}
        Behind you, far back along the tunnel, the shelves hum in the dark.
        </Text>
      <Link href="/claimed" style={styles.button}> Sign the form</Link>

      <Link href="/theGreatReturn" style={styles.button}> Run back and burn the ledger</Link>

      <Link href="/theKeeper" style={styles.button}> Go back to your desk. You have a job to do</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#0000ff',
    margin: 20,
  },
});