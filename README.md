###                 Welcome to react-native-internet-checker



```markdown
# react-native-internet-checker

[![npm](https://img.shields.io/npm/v/react-native-internet-checker)](https://www.npmjs.com/package/react-native-internet-checker)
[![npm](https://img.shields.io/npm/dt/react-native-internet-checker)](https://www.npmjs.com/package/react-native-internet-checker)
[![NPM](https://img.shields.io/npm/l/react-native-internet-checker)](https://github.com/your-username/react-native-internet-checker/blob/main/LICENSE)

The `react-native-internet-checker` package is a utility for checking internet connectivity within React Native applications. It simplifies the process of monitoring network status changes and providing real-time feedback to users.

## Installation

Install the package using npm:

```bash
npm install react-native-internet-checker
```

Or using yarn:

```bash
yarn add react-native-internet-checker
```

## Usage

### Basic Usage

```javascript
import React from 'react';
import { View, Button, ToastAndroid } from 'react-native';
import { CheckInternetStatus, ShowInternetStatus } from 'react-native-internet-checker';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Example usage in a React component
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
```

### Usage with StatusMessage Prop

```javascript
import React from 'react';
import { View, Button, ToastAndroid } from 'react-native';
import { CheckInternetStatus, ShowInternetStatus } from 'react-native-internet-checker';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Example usage in a React component
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
        <ShowInternetStatus StatusMessage="No internet connection" />

        <View style={{ marginTop: 20 }}>
          <Button title="Check Internet" onPress={handleButton1Press} />
        </View>
      </View>
    </SafeAreaProvider>
  );
};

export default App;
```

## Features

- Check internet connectivity status.
- Real-time updates on network status changes.
- Simple integration with React Native applications.

## License

This project is licensed under the ISC License - see the [LICENSE](https://github.com/your-username/react-native-internet-checker/blob/main/LICENSE) file for details.
```

Feel free to replace placeholders like `[![npm](...)](https://www.npmjs.com/package/react-native-internet-checker)` with actual links to your npm package and repository. This template provides a structured format for users to understand your package's purpose, installation instructions, usage example, features, and license information.
