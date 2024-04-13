import { StyleSheet, Text, View } from 'react-native';

export default function NavBar() {
  return (
    <View style={styles.navbarContainer}>
      <View>
        <Text> NavBar </Text>
      </View>
      <View>
        <Text> Item1 </Text>
      </View>
      <View>
        <Text> Item2 </Text>
      </View>
      <View>
        <Text> Item3 </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    navbarContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '100%',
        backgroundColor: 'red'
    },
    text: {
        color: 'white'
    }

});