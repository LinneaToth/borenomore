import { Text, View, StyleSheet, Pressable } from "react-native";

type Props = {
  activity: string | null;
  setActivity: (value: string | null) => void;
};

export default function ActivityDisplay({ activity, setActivity }: Props) {
  return (
    <View style={[styles.container, activity ? null : styles.invisible]}>
      {setActivity !== null && (
        <Pressable style={styles.xBtn} onPress={() => setActivity(null)}>
          <Text style={styles.xTxt}>&#10006;</Text>
        </Pressable>
      )}
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
    borderColor: "#FFF",
    borderWidth: 2,
  },
  invisible: {
    opacity: 0,
  },
  text: {
    fontSize: 20,
    textAlign: "center",
  },
  xBtn: {
    backgroundColor: "#FF58BE",
    height: 50,
    width: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 15,
    right: -25,
    borderColor: "#FFF",
    borderWidth: 2,
  },
  xTxt: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 3,
  },
});
