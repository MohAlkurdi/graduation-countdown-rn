import { StyleSheet, Text, View } from "react-native";
import dayjs from "dayjs";
import CountDown from "react-native-countdown-component";

export default function App() {
  const graduationDate = dayjs("2023-11-16");
  const today = dayjs();
  const diffDate = graduationDate.diff(today, "s");
  return (
    <View style={styles.pages}>
      <Text>Graduation Countdown</Text>
      <Text>Wednesday, November 16th</Text>
      <CountDown
        until={diffDate / 1000}
        size={30}
        onFinish={() => alert("Graduated!")}
        digitStyle={{ backgroundColor: "#FFF" }}
        digitTxtStyle={{ color: "#fb7185" }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
