import { Pressable, Text, StyleSheet } from "react-native";

type Props = {
  onPress: () => void;
  activity: string | null;
};

export default function BoredButton({ onPress, activity }: Props) {
  return (
    <Pressable
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}
      onPress={onPress}>
      <Text style={styles.text}>{activity && "STILL"} Bored?</Text>
      <Text style={[styles.text, styles.italicText]}>
        Click me {activity && "again"}!
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: 200,
    borderRadius: 100,
    backgroundColor: "#04B2D9",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  pressed: {
    elevation: 2,
    transform: [{ translateY: 2 }],
    shadowOffset: {
      width: 5,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  text: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
  italicText: {
    fontStyle: "italic",
    marginTop: 5,
    fontSize: 20,
  },
});
