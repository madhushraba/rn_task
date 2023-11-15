import React from "react";
import { View, Text, StyleSheet } from "react-native";

const EmployeeDetails = ({ navigation }) => {
  const employee = navigation.getParam("employee", {});

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Name: {employee.name}</Text>
      <Text style={styles.text}>Email: {employee.email}</Text>
      <Text style={styles.text}>Phone: {employee.phone}</Text>
      <Text style={styles.text}>Manager: {employee.parentId}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    margin: 16,
  },
  text: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default EmployeeDetails;
