import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function StartScreen() {
  return (
    <View style={styles.container}>
    <Text>"Sorry. No ticket, no claim."
        {"\n\n"}
        She almost laughs, and slides a slip across the counter, gone soft from years in a wallet.
        {"\n\n"}
        *Item: one night clerk. Received: November 4, 2026.*
        {"\n\n"}
        That's tonight's date. Yet the ink has faded to brown, and the signature on the *Received by* line is yours.
        {"\n\n"}
        She settles onto the bench to wait. You open the ledger. The ink on its last page is still wet.
        {"\n\n"}
        *No. 1148. One night clerk, age 29. Found wandering on Platform Four. Unclaimed. Placed on staff.*
        {"\n\n"}
        *No. 1148. One night clerk, age 29. Found wandering on Platform Four. Unclaimed. Placed on staff.*
        {"\n\n"}
        When you look up, the bench is empty. Your feet carry you down to Platform Four, where a young man with a backpack frowns at a phone with no signal. "Sorry, do you work here? I think I got off at the wrong stop."
        {"\n\n"}
        The note crackles in your pocket, and you almost remember how it came to you. A woman with a kind voice, on this platform: *Could you hold this a second?*
        {"\n\n"}
        There's a light far down the tunnel, and a warm wind ahead of it. It's 3:33.
        </Text>
      <Link href="/terminus" style={styles.button}> Board the train</Link>

      <Link href="/note" style={styles.button}> Ask him to hold the note for a second</Link>
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