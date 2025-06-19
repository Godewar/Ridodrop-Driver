// // App.js
// import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { createStackNavigator } from '@react-navigation/stack';
// import HomePage from './components/HomePage';
// import ProfileScreen from './components/ProfileScreen';
// import LocationScreen from './components/LocationScreen';

// const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();

// function MainStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen 
//         name="Home" 
//         component={HomePage} 
//         options={{ headerShown: false }}
//       />
//       <Stack.Screen name="Profile" component={ProfileScreen} />
//       <Stack.Screen name="Location" component={LocationScreen} />
//     </Stack.Navigator>
//   );
// }

// function App() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator initialRouteName="Raidodrop">
//         <Drawer.Screen name="Raidodrop" component={MainStack} />
//         <Drawer.Screen name="Profile" component={ProfileScreen} />
//         <Drawer.Screen name="Location" component={LocationScreen} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;

// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { TailwindProvider } from 'nativewind';

import ProfileScreen from './Screens/ProfileScreen';
//  import LocationScreen from './components/LocationScreen';
import BottomTabNavigator from './navigation/BottamTabNavigator';
import LocationScreen from './Screens/LocationScreen';
import DriverRegistrationScreen from './Screens/DriverRegistrationScreen';
import VehicleRegistrationScreen from './Screens/VehicleRegistrationScreen';
import IncentiveScreen from './Screens/IncentiveScreen';
import PayoutScreen from './Screens/PayoutScreen';
import PrivacyPolicyScreen from './Screens/PrivacyPolicyScreen';
import HelpAndSupportScreen from './Screens/HelpAndSupportScreen';
import LanguageSelectorScreen from './Screens/LanguageSelectorScreen';
import MobileNumberScreen from './Screens/MobileNumberScreen';
import OtpScreen from './Screens/OtpScreen';
import WalletScreen from './Screens/WalletScreen';
import EarnScreen from './Screens/EarnScreen';
import DriverDetailsScreen from './Screens/DriverDetailsScreen';
import MyVehiclesScreen from './Screens/MyVehiclesScreen';
import DriverCheckoutScreen from './Screens/DriverCheckoutScreen';
import DriverPaymentMethodsScreen from './Screens/DriverPaymentMethodScreen';
import HomeScreen from './Screens/HomeScreen';
import GoToAreaScreen from './Screens/GoToAreaScreen';
import CustomDrawerContent from './navigation/CustomDrawerContent';
import LanguageSidebar from './Screens/LanguageSidebar';
import LogoutScreen from './Screens/LogoutScreen';
import ReferAndEarnScreen from './Screens/ReferAndEarnScreen';
import OrderFareCheckoutScreen from './Screens/OrderFareCheckoutScreen';
import OrderReviewScreen from './Screens/OrderReviewScreen';


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

// Optional: If you want to keep stack screens for tab routes
// function TabStackNavigator() {
//   return (

    
     
//     <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="LanguageSelector">
//       <Stack.Screen name="LanguageSelector"  screenOptions={{ headerShown: false }} component={LanguageSelectorScreen} />
//         <Stack.Screen name="MobileNumber"  screenOptions={{ headerShown: false }}component={MobileNumberScreen} />
//               <Stack.Screen name="Otp" component={OtpScreen} />
//       <Stack.Screen name="Tabs" component={BottomTabNavigator} />
//       <Stack.Screen name="LocationScreen" component={LocationScreen} />
      
//        <Stack.Screen name="Register" component={DriverRegistrationScreen} />
      
//         <Stack.Screen name="Vehicle Register" component={VehicleRegistrationScreen} />
//         <Stack.Screen name="Driver Details" component={DriverDetailsScreen} />
//          <Stack.Screen name="My Vehicle" component={MyVehiclesScreen} />
//          <Stack.Screen name="Driver Checkout" component={DriverCheckoutScreen} />
//            <Stack.Screen name="Driver Payment Method" component={DriverPaymentMethodsScreen} />
//            <Stack.Screen name="Home" component={HomeScreen} />
//             <Stack.Screen name="GoToAreaScreen" component={GoToAreaScreen} />
  
  
//     </Stack.Navigator>

//   );
// }

export default function App() {
  // return (  
  //   <NavigationContainer>
      
  //     {/* <Drawer.Navigator initialRouteName="Raidrop"> */}
  //      <Drawer.Navigator     drawerContent={(props) => <CustomDrawerContent {...props} />}
  //       screenOptions={{ headerShown: false }}>
  //       {/* Drawer links to Bottom Tabs via Stack */}
        
  //        <Drawer.Screen name="Home" component={BottomTabNavigator} />
  //         {/* <Drawer.Screen name="Home" component={TabStackNavigator} /> */}
         

  //       {/* Direct screens */}
  //       <Drawer.Screen name="Profile" component={ProfileScreen} />
  //       <Drawer.Screen name="Wallet" component={WalletScreen} />
  //       <Drawer.Screen name="Incentive" component={IncentiveScreen} />
  //       <Drawer.Screen name="Earning" component={EarnScreen} />
  //        <Drawer.Screen name="Refer And Earn" component={ReferAndEarnScreen} />

  //       <Drawer.Screen name="Language " component={LanguageSidebar} />

      
       
  //              <Drawer.Screen name="Privacy & Policy" component={PrivacyPolicyScreen} />
  //              <Drawer.Screen name="Help And Sopport" component={HelpAndSupportScreen} />
  //              <Drawer.Screen name="Logout" component={LogoutScreen} />


  //     </Drawer.Navigator>
      
  //   </NavigationContainer>
  // );

  return (
    <BottomTabNavigator/>
  )
}
