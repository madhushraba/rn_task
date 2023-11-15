// EmployeeList.js
import React, { useState, useEffect } from "react";
import {
  View,
  FlatList,
  TouchableOpacity,
  Button,
  StyleSheet,
} from "react-native";
import { withNavigation } from "react-navigation"; // Import withNavigation

import EmployeeCard from "./EmployeeCard";
import AddEmployee from "./AddEmployee";

const EmployeeList = ({ navigation }) => {
  // Use withNavigation HOC to access the navigation prop
  const [employees, setEmployees] = useState([]);
  const [isAddEmployeeModalVisible, setIsAddEmployeeModalVisible] =
    useState(false);
  const [userIdToNameMap, setUserIdToNameMap] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://mocki.io/v1/3a4b56bd-ad05-4b12-a181-1eb9a4f5ac8d"
        );
        const data = await response.json();
        setEmployees(data);

        const map = {};
        data.forEach((user) => {
          map[user.id] = user.name;
        });

        setUserIdToNameMap(map);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleCardPress = (employee) => {
    navigation.navigate("Details", { employee });
  };

  const handleAddEmployee = (newEmployee) => {
    setEmployees((prevEmployees) => [...prevEmployees, newEmployee]);
    setIsAddEmployeeModalVisible(false);
  };

  const handleAddEmployeePress = () => {
    setIsAddEmployeeModalVisible(true);
  };

  const handleCancelAddEmployee = () => {
    setIsAddEmployeeModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={employees}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleCardPress(item)}>
            <EmployeeCard employee={item} userIdToNameMap={userIdToNameMap} />
          </TouchableOpacity>
        )}
      />

      <View style={styles.addButtonContainer}>
        <Button
          title="Add Employee"
          onPress={handleAddEmployeePress}
          color="#9370DB"
        />
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
    position: "absolute",
    backgroundColor: "#860A35",
    color: "white",
    borderRadius: 12,
    padding: 5,
    top: 16,
    right: 16,
  },
});

export default withNavigation(EmployeeList); // Wrap with withNavigation
