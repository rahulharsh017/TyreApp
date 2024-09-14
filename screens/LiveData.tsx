import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import Meter from '../Components/Meter';
import { getData } from '../Utils/api';

const LiveData: React.FC = () => {
  const [data, setData] = useState({ temp: 0, pressure: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      getData().then(fetchedData => {
        setData(fetchedData);
        setLoading(false);
      });
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Live Tyre Data</Text>
      <View style={styles.cardsContainer}>
        <View style={styles.card}>
          <Meter value={data.pressure} maxValue={100} label="Pressure" loader={loading} />
        </View>
        <View style={styles.card}>
          <Meter value={data.temp} maxValue={100} label="Temperature" loader={loading} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#121212',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 20,
  },
  cardsContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  card: {
    width: 220,
    height: 250,
    backgroundColor: '#1a1a1a',
    borderRadius: 15,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    padding: 20,
  },
});

export default LiveData;
