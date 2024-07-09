import React from 'react';
import { View, Button, ToastAndroid } from 'react-native';
import { CheckInternetStatus, ShowInternetStatus } from 'react-native-internet-checker';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
  
  const handleButton1Press = async () => {
    const isConnected = await CheckInternetStatus();
    if (isConnected) {
      ToastAndroid.show('Connected to the internet', ToastAndroid.SHORT);
    } else {
      ToastAndroid.show('No internet connection', ToastAndroid.SHORT);
    }
  };

  return (
    <SafeAreaProvider>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ShowInternetStatus />

        <View style={{ marginTop: 20 }}>
          <Button title="Check Internet" onPress={handleButton1Press} />
        </View>
      </View>
    </SafeAreaProvider>
  );
};

export default App;


