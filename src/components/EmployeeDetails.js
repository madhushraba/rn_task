// EmployeeDetails.js
import React from "react";
import { View, Text } from "react-native";

const EmployeeDetails = ({ navigation }) => {
    const employee = navigation.getParam('employee', {});

  return (
    <View>
      <Text>Name: {employee.name}</Text>
      <Text>Email: {employee.email}</Text>
      <Text>Phone: {employee.phone}</Text>
      <Text>Manager: {employee.parentId}</Text>
    </View>
  );
};

export default EmployeeDetails;
