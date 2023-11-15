// StackNavigator.js
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import EmployeeList from './EmployeeList';
import EmployeeDetails from './EmployeeDetails';

const AppNavigator = createStackNavigator(
  {
    List: EmployeeList,
    Details: EmployeeDetails,
  },
  {
    initialRouteName: 'List',
  }
);

export default createAppContainer(AppNavigator);

// StackNavigator.js

// StackNavigator.js
// import React from "react";
// import { createAppContainer } from "react-navigation";
// import { createStackNavigator } from "react-navigation-stack";
// import EmployeeList from "./EmployeeList";
// import EmployeeDetails from "./EmployeeDetails";
// import AddEmployee from "./AddEmployee"; // Import the AddEmployee component

// const AppNavigator = createStackNavigator(
//   {
//     List: {
//       screen: EmployeeList,
//       navigationOptions: ({ navigation }) => ({
//         title: "Employee List",
//         headerRight: (
//           <Button
//             title="Add Employee"
//             onPress={() => navigation.navigate("AddEmployee")} // Ensure this navigation is correct
//             color="#9370DB"
//           />
//         ),
//       }),
//     },
//     Details: <EmployeeDetails/>,
//     AddEmployee: <AddEmployee/>, // Use the actual AddEmployee component here
//   },
//   {
//     initialRouteName: "List",
//   }
// );

// export default createAppContainer(AppNavigator);
