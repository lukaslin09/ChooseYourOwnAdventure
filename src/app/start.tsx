import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function StartScreen() {
  return (
    <View style={styles.container}>
    <Text>The listing said *night clerk, no experience, must not mind quiet*. Nobody mentioned that the Lost & Found sits two floors beneath Marrow Street Station, behind a door you'd take for a broom closet.
        {"\n\n"}
        The last clerk, Odalys, left no forwarding address. You found her note in your coat pocket this evening, though you can't say when she gave it to you:
        {"\n\n"}
        1. Nothing goes back without a claim ticket.
        {"\n\n"}
        2. Never open the blue cabinet.
        {"\n\n"}
        3. The 3:33 is not on the schedule. Do not board it.
        {"\n\n"}
        The shelves run back farther than the station should allow: umbrellas by the thousand, single gloves, a tuba, a jar labeled *Thursday*. You try to remember your job interview and can't. Long day, probably.
        {"\n\n"}
        At 2:10 a.m., the counter bell rings. The woman in front of you is in her fifties, her raincoat dripping, though it wasn't raining when you came in. She looks at you a beat too long.
        {"\n\n"}
        "You have a brass key here. Tag 1147. I need it tonight."
        {"\n\n"}
        It's hanging on the hook behind you. She has no ticket.
        </Text>
      <Link href="/givesKey" style={styles.button}> Hand her the key</Link>

      <Link href="/askForTicket" style={styles.button}> Ask for her claim ticket</Link>
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