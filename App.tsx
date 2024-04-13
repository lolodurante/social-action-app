import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import NavBar from './components/NavBar';
import Header from './components/Header';
import { UserInformationProvider } from './context/CreateContext';
export default function App() {
  return (
    <UserInformationProvider>
      <SafeAreaView style={styles.container}>
        <Header /> 
        <View style={styles.mainContent}>
          <Text>App</Text>
        </View>
        <NavBar />
      </SafeAreaView>
    </UserInformationProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 100,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainContent: {
    flex: 15,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
