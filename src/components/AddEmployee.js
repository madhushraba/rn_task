// AddEmployee.js
import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const AddEmployee = ({ onAddEmployee, onCancel }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [parent, setParent] = useState("");

  const handleAddEmployee = () => {
    const newEmployee = {
      id: Math.random().toString(),
      name,
      email,
      phone,
      parent,
      background: "#FFC0CB", // Default background color for the new employee
    };

    // Callback to parent component to add the employee to the list
    onAddEmployee(newEmployee);

    // Reset form fields
    setName("");
    setEmail("");
    setPhone("");
    setParent("");
  };

  return (
    <View style={styles.formbody}>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Name:</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={(text) => setName(text)}
        />

        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />

        <Text style={styles.label}>Phone:</Text>
        <TextInput
          style={styles.input}
          value={phone}
          onChangeText={(text) => setPhone(text)}
        />

        <Text style={styles.label}>Reporting Manager:</Text>
        <TextInput
          style={styles.input}
          value={parent}
          onChangeText={(text) => setParent(text)}
        />

        <Button
          title="Add Employee"
          onPress={handleAddEmployee}
          color="#FFFFFF"
          style={styles.button}
        />
        <Button
          title="Cancel"
          onPress={onCancel}
          color="#FF0000"
          style={styles.button}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formbody: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    // margin: "auto",
    marginBottom: 240,
  },
  formContainer: {
    top: 0,
    padding: 16,
    margin: 8,
    borderRadius: 8,
    backgroundColor: "#E7CBCB",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  label: {
    fontSize: 16,
    marginBottom: 4,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  button: {
    flex: 1,
    marginHorizontal: 4,
    borderColor: "#333333",
    borderWidth: 4,
  },
});

export default AddEmployee;
