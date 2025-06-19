// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';




// import { Ionicons, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
// import HomeScreen from '../Screens/HomeScreen';
// import OrdersScreen from '../Screens/OrdersScreen';
// import WalletScreen from '../Screens/WalletScreen';
// import ProfileScreen from '../Screens/ProfileScreen';

// const Tab = createBottomTabNavigator();

// export default function BottomTabNavigator() {
//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         headerShown: false,
//         tabBarIcon: ({ color, size }) => {
//           if (route.name === 'Home') return <Ionicons name="home" size={size} color={color} />;
//           if (route.name === 'Orders') return <MaterialCommunityIcons name="cart-outline" size={size} color={color} />;
//           if (route.name === 'Wallet') return <MaterialIcons name="account-balance-wallet" size={size} color={color} />;
//           if (route.name === 'Profile') return <MaterialIcons name="person-outline" size={size} color={color} />;
//         },
//         tabBarActiveTintColor: '#4c669f',
//         tabBarInactiveTintColor: '#666',
//       })}
//     >
//       <Tab.Screen name="Home" component={HomeScreen} />
//       <Tab.Screen name="Orders" component={OrdersScreen} />
//       <Tab.Screen name="Wallet" component={WalletScreen} />
//       <Tab.Screen name="Profile" component={ProfileScreen} />
//     </Tab.Navigator>
//   );
// }

// navigation/BottomTabNavigator.js
// navigation/BottomTabNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';


import HomeScreen from '../Screens/HomeScreen';
import WalletScreen from '../Screens/WalletScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import OrdersScreen from '../Screens/OrdersScreen';
import EarnScreen from '../Screens/EarnScreen';
import IncentiveScreen from '../Screens/IncentiveScreen';
import PrivacyPolicyScreen from '../Screens/PrivacyPolicyScreen';
import HelpAndSupportScreen from '../Screens/HelpAndSupportScreen';
import LanguageSidebar from '../Screens/LanguageSidebar';
import ReferAndEarnScreen from '../Screens/ReferAndEarnScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawerContent from './CustomDrawerContent';
import LogoutScreen from '../Screens/LogoutScreen';
import { NavigationContainer } from '@react-navigation/native';
import LanguageSelectorScreen from '../Screens/LanguageSelectorScreen';
import MobileNumberScreen from '../Screens/MobileNumberScreen';
import LocationScreen from '../Screens/LocationScreen';
import DriverRegistrationScreen from '../Screens/DriverRegistrationScreen';
import VehicleRegistrationScreen from '../Screens/VehicleRegistrationScreen';
import DriverDetailsScreen from '../Screens/DriverDetailsScreen';
import MyVehiclesScreen from '../Screens/MyVehiclesScreen';
import DriverCheckoutScreen from '../Screens/DriverCheckoutScreen';
import DriverPaymentMethodsScreen from '../Screens/DriverPaymentMethodScreen';
import GoToAreaScreen from '../Screens/GoToAreaScreen';
import OtpScreen from '../Screens/OtpScreen';
import ReferralBikeScreen from '../Screens/ReferralBikeScreen';
import TrainingVideosScreen from '../Screens/TrainingVideosScreen';
import OrderDetailsScreen from '../Screens/OrderDetailsScreen';
import CancelReasonsScreen from '../Screens/CancelReasonsScreen';
import SupportOptionsScreen from '../Screens/SupportOptionsScreen';
import OrderFareCheckoutScreen from '../Screens/OrderFareCheckoutScreen';
import OrderReviewScreen from '../Screens/OrderReviewScreen';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export default function BottomTabNavigator() {


  const DrawerNavigator = () => (

     <Drawer.Navigator     drawerContent={(props) => <CustomDrawerContent {...props} />}
            screenOptions={{ headerShown: false }}>
            {/* Drawer links to Bottom Tabs via Stack */}
            
             <Drawer.Screen name="Home" component={Tabs}  options={{
    drawerItemStyle: { height: 0 }, 
    drawerIcon: () => null,
  }}/>
              {/* <Drawer.Screen name="Home" component={TabStackNavigator} /> */}
             
    
            {/* Direct screens */}
            <Drawer.Screen name="Profile" component={ProfileScreen}  options={{
    drawerItemStyle: { height: 0 }, 
    drawerIcon: () => null,
  }}/>

  
            <Drawer.Screen name="Wallet" component={WalletScreen} />
            <Drawer.Screen name="Incentive" component={IncentiveScreen} />
            <Drawer.Screen name="Earning" component={EarnScreen} />
             <Drawer.Screen name="Refer And Earn" component={ReferAndEarnScreen} />
    
            <Drawer.Screen name="Language " component={LanguageSidebar} />
    
          
           
                   <Drawer.Screen name="Privacy & Policy" component={PrivacyPolicyScreen} />
                   <Drawer.Screen name="Help And Sopport" component={HelpAndSupportScreen} />
                   <Drawer.Screen name="Logout" component={LogoutScreen} />
    
    
          </Drawer.Navigator>


  )


  // 🟢 Bottom Tabs (inside Drawer)
const Tabs = () => (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Orders"
        component={OrdersScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cart-outline" size={size} color={color} />
          ),
        }}
      />
      

       <Tab.Screen
        name="Earn"
        component={EarnScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="trending-up" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={WalletScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="account-balance-wallet" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>


)
  return (
    // <Tab.Navigator screenOptions={{ headerShown: false }}>
    //   <Tab.Screen
    //     name="Home"
    //     component={HomeScreen}
    //     options={{
    //       tabBarIcon: ({ color, size }) => (
    //         <Ionicons name="home" size={size} color={color} />
    //       ),
    //     }}
    //   />

    //   <Tab.Screen
    //     name="Orders"
    //     component={OrdersScreen}
    //     options={{
    //       tabBarIcon: ({ color, size }) => (
    //         <MaterialCommunityIcons name="cart-outline" size={size} color={color} />
    //       ),
    //     }}
    //   />
      

    //    <Tab.Screen
    //     name="Earn"
    //     component={EarnScreen}
    //     options={{
    //       tabBarIcon: ({ color, size }) => (
    //         <MaterialIcons name="trending-up" size={size} color={color} />
    //       ),
    //     }}
    //   />
    //   <Tab.Screen
    //     name="Wallet"
    //     component={WalletScreen}
    //     options={{
    //       tabBarIcon: ({ color, size }) => (
    //         <MaterialIcons name="account-balance-wallet" size={size} color={color} />
    //       ),
    //     }}
    //   />
    //   <Tab.Screen
    //     name="Profile"
    //     component={ProfileScreen}
    //     options={{
    //       tabBarIcon: ({ color, size }) => (
    //         <Ionicons name="person-outline" size={size} color={color} />
    //       ),
    //     }}
    //   />
    // </Tab.Navigator>


 <NavigationContainer>
   <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="LanguageSelector">
       <Stack.Screen name="LanguageSelector"  screenOptions={{ headerShown: false }} component={LanguageSelectorScreen} /> 
        <Stack.Screen name="MobileNumber"  screenOptions={{ headerShown: false }}component={MobileNumberScreen} />
              <Stack.Screen name="Otp" component={OtpScreen} />
             
            
     
      <Stack.Screen name="LocationScreen" component={LocationScreen} />
      
       <Stack.Screen name="DriverRegister" component={DriverRegistrationScreen} />
      
        <Stack.Screen name="Vehicle Register" component={VehicleRegistrationScreen }/>
        <Stack.Screen name="Driver Details" component={DriverDetailsScreen} />
         <Stack.Screen name="My Vehicle" component={MyVehiclesScreen} />
         <Stack.Screen name="Driver Checkout" component={DriverCheckoutScreen} />
           <Stack.Screen name="Driver Payment Method" component={DriverPaymentMethodsScreen} />
           <Stack.Screen name="Tabs" component={Tabs} />
            <Stack.Screen name="GoToAreaScreen" component={GoToAreaScreen} />
             <Stack.Screen name="ReferralBikeScreen" component={ReferralBikeScreen} />
             <Stack.Screen name="TrainingVideos" component={TrainingVideosScreen} />
             <Stack.Screen name="OrderDetailsScreen" component={OrderDetailsScreen} />
             <Stack.Screen name="CancelReasonsScreen" component={CancelReasonsScreen}/>
             <Stack.Screen name="SupportOptionsScreen" component={SupportOptionsScreen}/>
             <Stack.Screen name="OrderFareCheckout" component={OrderFareCheckoutScreen}/>
             <Stack.Screen name="OrderReviewScreen" component={OrderReviewScreen}/>

  
             
            {/* <Stack.Screen name="ReferralBikeScreen" component={} /> */}

              {/* App Flow */}
      <Stack.Screen name="Home" component={DrawerNavigator} />
      
  
  
    </Stack.Navigator>






</NavigationContainer>






















































































































  );
}

