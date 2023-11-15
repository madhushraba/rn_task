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
