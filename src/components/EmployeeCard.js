import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";


const EmployeeCard = ({ employee, userIdToNameMap }) => {
  const { name, email, phone, parentId, background } = employee;

  const managerName = userIdToNameMap[parentId] || "Manager Not Found";

  return (
    <View style={[styles.card, { backgroundColor: background }]}>
      <Text style={styles.text}>{`Name: ${name}`}</Text>
      <Text style={styles.text}>{`Email: ${email}`}</Text>
      <Text style={styles.text}>{`Phone: ${phone}`}</Text>
      <Text style={styles.text}>{`Manager: ${managerName}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 16,
    margin: 8,
    borderRadius: 8,
    backgroundColor: "#C77DEA",
    borderColor: "#CCCCCC",
    borderWidth: 1,
    shadowColor: "#AA5656",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default EmployeeCard;
