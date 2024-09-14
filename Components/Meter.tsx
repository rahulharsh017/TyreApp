import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Circle, G } from 'react-native-svg';

interface MeterProps {
  value: number;
  maxValue: number;
  label: string;
  loader: boolean;
}

const Meter: React.FC<MeterProps> = ({ value, maxValue, label, loader }) => {
  const radius = 65;
  const strokeWidth = 12;
  const circumference = 2 * Math.PI * radius;
  const progress = (value / maxValue) * circumference;

  return (
    <View style={styles.meterContainer}>
      <Svg height="160" width="160">
        <G rotation="-90" origin="80,80">
          <Circle
            stroke="#333"
            strokeWidth={strokeWidth}
            fill="none"
            r={radius}
            cx="80"
            cy="80"
          />
          <Circle
            stroke="#00ff00"
            strokeWidth={strokeWidth}
            fill="none"
            r={radius}
            cx="80"
            cy="80"
            strokeDasharray={`${progress} ${circumference}`}
          />
        </G>
      </Svg>
      {loader ? (
        <Text style={styles.meterValue}>Loading..</Text>
      ) : (
        <Text style={styles.meterValue}>{value.toFixed(2)}</Text>
      )}
      <Text style={styles.meterLabel}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  meterContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  meterLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    position: 'absolute',
    bottom: -25,
  },
  meterValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    position: 'absolute',
    top: '42%',
  },
});

export default Meter;
