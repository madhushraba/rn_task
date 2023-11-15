// EmployeeList.js
import React, { useState, useEffect } from 'react';
import { View, FlatList, TouchableOpacity, Button, StyleSheet } from 'react-native';
import axios from 'axios';
import { withNavigation } from 'react-navigation';
import EmployeeCard from './EmployeeCard';
import AddEmployee from './AddEmployee';

const EmployeeList = ({ navigation }) => {
  const [employees, setEmployees] = useState([]);
  const [isAddEmployeeModalVisible, setIsAddEmployeeModalVisible] = useState(false);

  useEffect(() => {
    // Fetch data from the API
    axios
      .get('https://mocki.io/v1/3a4b56bd-ad05-4b12-a181-1eb9a4f5ac8d')
      .then((response) => setEmployees(response.data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleCardPress = (employee) => {
    navigation.navigate('Details', { employee });
  };

  const handleAddEmployee = (newEmployee) => {
    // Update the local list with the new employee
    setEmployees((prevEmployees) => [...prevEmployees, newEmployee]);
    // Hide the modal
    setIsAddEmployeeModalVisible(false);
  };

  const handleAddEmployeePress = () => {
    // Show the modal
    setIsAddEmployeeModalVisible(true);
  };

  const handleCancelAddEmployee = () => {
    // Hide the modal
    setIsAddEmployeeModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={employees}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleCardPress(item)}>
            <EmployeeCard employee={item} />
          </TouchableOpacity>
        )}
      />

      <View style={styles.addButtonContainer}>
        <Button title="Add Employee" onPress={handleAddEmployeePress} color="#9370DB" />
      </View>

      {isAddEmployeeModalVisible && (
        <AddEmployee
          onAddEmployee={handleAddEmployee}
          onCancel={handleCancelAddEmployee}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  addButtonContainer: {
    position: 'absolute',
    backgroundColor: '#860A35',  
    borderRadius:12,
    padding:5,
    top: 16,
    right: 16,
  },
});

export default withNavigation(EmployeeList);
