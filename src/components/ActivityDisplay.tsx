import { Text, View, StyleSheet } from "react-native";

type Props = {
  activity: string | null;
};

export default function ActivityDisplay({ activity }: Props) {
  return (
    <View style={[styles.container, activity ? null : styles.invisible]}>
      <Text numberOfLines={6} style={styles.text}>
        {activity}!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff65",
    flex: 1 / 4,
    marginTop: 75,
    alignItems: "center",
    justifyContent: "center",
    padding: 40,
    borderRadius: 25,
    width: "60%",
  },
  invisible: {
    opacity: 0,
  },
  text: {
    fontSize: 20,
    textAlign: "center",
  },
});
