import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { useState, useEffect } from "react";
import BoredButton from "./src/components/BoredButton";
import { retrieveActivity } from "./src/services/retrieveActivity";
import ActivityDisplay from "./src/components/ActivityDisplay";

export default function App() {
  const [currentActivity, setCurrentActivity] = useState<null | string>(null);
  const [isLoading, setIsLoading] = useState(false);

  const grabActivity = async () => {
    setIsLoading(true);
    const activity = await retrieveActivity();
    setCurrentActivity(activity);
    console.log(activity);
    setIsLoading(false);
  };

  const image = require("./assets/bg.png");
  const pressHandler = () => {
    grabActivity();
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <BoredButton onPress={pressHandler} activity={currentActivity} />
        <ActivityDisplay
          activity={currentActivity}
          setActivity={setCurrentActivity}
        />
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCA0ED",
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
