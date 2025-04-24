import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, View } from "react-native";
import * as Notifications from "expo-notifications";

Notifications.setNotificationHandler({
  // yield a promise
  handleNotification: async () => {
    return {
      shouldPlaySound: false,
      shouldSetBadge: false,
      shouldShowAlert: true,
    };
  },
}); // this method must be executed to tell the app and therefore, indirectly, the underlying operating system, how incoming notifications that are related to this app should be handled.

export default function App() {
  function scheduleNotificationHandler() {
    Notifications.scheduleNotificationAsync({
      content: {
        title: "My first local notification",
        body: "This is the body of the notifications.",
        data: {
          userName: "Hamad",
        },
      },
      trigger: {
        seconds: 5,
      },
    });
  }

  return (
    <View style={styles.container}>
      <Button
        title="Schedule Notification"
        onPress={scheduleNotificationHandler}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
