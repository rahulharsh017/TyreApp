import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

// Define types for the dumper data
type Dumper = {
  dumperId: string;
  loadPerTyreEmpty: number;
  loadPerTyreLoaded: number;
  rotationHoursPerDay: number;
  cyclesPerDay: number;
  distancePerCycle: number;
  shift: string;
};

// Define the type for your navigation stack
type RootStackParamList = {
  ShiftScreen: undefined;
  TKPHScreen: { dumperData: Dumper };
};

type ShiftScreenNavigationProp = StackNavigationProp<RootStackParamList, 'ShiftScreen'>;

const dumpersData = {
  dumpers: [
    {
      dumperId: "DMP001",
      loadPerTyreEmpty: 9000,
      loadPerTyreLoaded: 15000,
      rotationHoursPerDay: 8,
      cyclesPerDay: 15,
      distancePerCycle: 14,
      shift: "morning",
    },
    {
      dumperId: "DMP002",
      loadPerTyreEmpty: 8000,
      loadPerTyreLoaded: 13000,
      rotationHoursPerDay: 7,
      cyclesPerDay: 12,
      distancePerCycle: 13,
      shift: "afternoon",
    },
    {
      dumperId: "DMP003",
      loadPerTyreEmpty: 9500,
      loadPerTyreLoaded: 15500,
      rotationHoursPerDay: 9,
      cyclesPerDay: 16,
      distancePerCycle: 15,
      shift: "morning",
    },
    {
      dumperId: "DMP004",
      loadPerTyreEmpty: 8700,
      loadPerTyreLoaded: 14500,
      rotationHoursPerDay: 8,
      cyclesPerDay: 13,
      distancePerCycle: 12,
      shift: "evening",
    },
  ],
};

const ShiftScreen: React.FC = () => {
  const [selectedShift, setSelectedShift] = useState<string>('');
  const [filteredDumpers, setFilteredDumpers] = useState<Dumper[]>([]);

  const navigation = useNavigation<ShiftScreenNavigationProp>();

  const handleShiftChange = (shift: string) => {
    setSelectedShift(shift);
    const filteredData = dumpersData.dumpers.filter(dumper => dumper.shift === shift);
    setFilteredDumpers(filteredData);
  };

  const handleCardClick = (dumperData: Dumper) => {
    navigation.navigate('TKPHScreen', { dumperData });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Shift</Text>
      <Picker
        selectedValue={selectedShift}
        onValueChange={(itemValue) => handleShiftChange(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="-- Select Shift --" value="" />
        <Picker.Item label="Morning" value="morning" />
        <Picker.Item label="Afternoon" value="afternoon" />
        <Picker.Item label="Evening" value="evening" />
      </Picker>

      <FlatList
        data={filteredDumpers}
        keyExtractor={(item) => item.dumperId}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => handleCardClick(item)}
          >
            <Text style={styles.cardTitle}>Dumper ID: {item.dumperId}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#000000', // Background color set to black
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff', // Text color set to white
    textAlign: 'center',
  },
  picker: {
    marginVertical: 20,
    height: 50,
    width: '100%',
    color: '#ffffff', // Picker text color set to white
    backgroundColor: '#333333', // Darker background for picker
  },
  card: {
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#1a1a1a', // Darker card background
    borderRadius: 8,
  },
  cardTitle: {
    fontSize: 18,
    color: '#ffffff', // Text color set to white
  },
});

export default ShiftScreen;
