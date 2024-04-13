import { StyleSheet, Text, View, Button } from "react-native";

import { useUserInformation } from "../context/CreateContext";

export default function Header() {
  const { feedToggle, setFeedToggle } = useUserInformation();

  if (!feedToggle || !setFeedToggle) {
    throw new Error(
      "useUserInformation must be used within a UserInformationProvider"
    );
  }

  const toggleFeed = () => {
    if (feedToggle === "friends") {
      setFeedToggle("community");
    } else {
      setFeedToggle("friends");
    }
  };

  return (
    <View style={styles.headerContainer}>
      <View style={styles.logoContainer}>
        <Text> Logo </Text>
      </View>
      <View style={styles.feedSelectorContainer}>
        <View>
          <Button title="Friends" onPress={toggleFeed} />
        </View>
        <View>
          <Button title="Community" onPress={toggleFeed} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flex: 2,
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    borderBottomColor: "grey",
    borderBottomWidth: 1,
  },
  text: {
    color: "white",
  },
  feedSelectorContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
  },
  logoContainer: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
  },
  friendsContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: "red",
  },
  communityContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "blue",
  },
});
