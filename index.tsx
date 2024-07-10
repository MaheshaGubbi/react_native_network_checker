import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Snackbar } from 'react-native-paper';

// Function to check internet connection using axios
const CheckInternetStatus = async (): Promise<boolean> => {
  try {
    const response = await axios.get('https://www.google.com', { timeout: 5000 });
    return response.status === 200;
  } catch (error) {
    return false;
  }
};

interface ShowInternetStatusProps {
  StatusMessage?: string;
}

const ShowInternetStatus: React.FC<ShowInternetStatusProps> = ({ StatusMessage }) => {
  const [visible, setVisible] = useState(false); // State to manage Snackbar visibility
  const [isConnected, setIsConnected] = useState(true); // State to manage internet connectivity status
  const [retrying, setRetrying] = useState(false); // State to track retrying status

  // Effect hook to check internet connection on component mount and every 10 seconds
  useEffect(() => {
    const handleCheckConnection = async () => {
      const connected = await CheckInternetStatus(); // Check internet connection
      setIsConnected(connected); // Update isConnected state

      // Show Snackbar only if not connected and it's currently hidden
      if (!connected && !visible && !retrying) {
        setVisible(true);
      }
    };

    handleCheckConnection(); // Initial check on component mount

    const interval = setInterval(handleCheckConnection, 10000); // Check every 10 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, [visible, retrying]); // Include visible and retrying in dependency array to handle updates

  // Function to dismiss Snackbar
  const handleDismiss = () => {
    setVisible(false);
  };

  // Function to retry internet connection check with delay
  const handleRetry = () => {
    setRetrying(true); // Set retrying flag to true
    setVisible(false); // Hide Snackbar

    setTimeout(async () => {
      const connected = await CheckInternetStatus(); // Retry connection check
      setIsConnected(connected); // Update isConnected state
      setRetrying(false); // Reset retrying flag

      // Show Snackbar if retry fails (still not connected)
      if (!connected) {
        setVisible(true);
      }
    }, 2000); // 2-second delay before retrying
  };

  return (
    <Snackbar
      visible={visible}
      onDismiss={handleDismiss}
      action={{
        label: 'Retry',
        onPress: handleRetry,
      }}
    >
      {isConnected ? 'Connected to the internet' : StatusMessage || 'No internet connection'}
    </Snackbar>
  );
};

export { ShowInternetStatus, CheckInternetStatus };
