// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import HomeScreen from '../Screens/HomeScreen';
// import WalletScreen from '../Screens/WalletScreen';
// import EarnScreen from '../Screens/EarnScreen';
// import ProfileScreen from '../Screens/ProfileScreen';
// import IncentiveScreen from '../Screens/IncentiveScreen';
// import PrivacyPolicyScreen from '../Screens/PrivacyPolicyScreen';
// import HelpAndSupportScreen from '../Screens/HelpAndSupportScreen';
// import { createStackNavigator } from '@react-navigation/stack';


// export default function CustomDrawerContent() {

//     const Stack = createStackNavigator();
//     const Drawer = createDrawerNavigator();
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Sidebar Menu</Text>

//       <Drawer.Navigator screenOptions={{ headerShown: false }} >
//          <Drawer.Screen name="Home" component={HomeScreen} />
//            {/* <Drawer.Screen name="Wallet" component={WalletScreen} />
//             <Drawer.Screen name="Earning" component={EarnScreen} />
//              <Drawer.Screen name="Profile" component={ProfileScreen} />
//              <Drawer.Screen name="Incentive" component={IncentiveScreen}/>
//               <Drawer.Screen name="Private Policy" component={PrivacyPolicyScreen} />
//               <Drawer.Screen name="Help & Support" component={HelpAndSupportScreen}/> */}




//       </Drawer.Navigator>
       
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 50,
//     paddingHorizontal: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
// });


import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

export default function CustomDrawerContent(props) {
  
   const userName = 'Lokesh';
  const userCity = 'Bengaluru';
  const userImage = 'https://i.pravatar.cc/100?img=12';

  // Hide Home and Profile from sidebar
  const filteredRoutes = props.state.routes.filter(
    (route) => route.name !== 'Home' && route.name !== 'Profile'
  );

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.scrollContainer}>

        <TouchableOpacity
        style={styles.header}
        onPress={() => props.navigation.navigate('Profile')}
      >
        <Image source={{ uri: userImage }} style={styles.avatar} />
        <Text style={styles.name}>{userName}</Text>
        <Text style={styles.city}>{userCity}</Text>
      </TouchableOpacity>
      {/* Header Section */}
      {/* <TouchableOpacity
        style={styles.header}
        onPress={() => props.navigation.navigate('Profile')}
      >
        <Text style={styles.welcome}>Welcome</Text>
        <View style={styles.userRow}>
          <Text style={styles.name}>{userName}</Text>
          <Ionicons name="chevron-forward" size={24} color="#2d2d2d" />
        </View>
      </TouchableOpacity> */}

      {/* Drawer Items as Cards */}
      <View style={styles.cardContainer}>
        {filteredRoutes.map((route, index) => {
          const focused = index === props.state.index;
          const { name, key } = route;
          const options = props.descriptors[key].options;
          const label = options.drawerLabel ?? name;
          const Icon = options.drawerIcon;

          return (
            <TouchableOpacity
              key={key}
              style={[
                styles.cardItem,
                focused && styles.cardItemFocused,
              ]}
              onPress={() => props.navigation.navigate(name)}
            >
              <View style={styles.cardContent}>
                <View style={styles.iconLabelRow}>
                  {Icon && Icon({ color: '#000', size: 22 })}
                  <Text style={styles.label}>{label}</Text>
                </View>
                <Ionicons name="chevron-forward" size={20} color="#2d2d2d" />
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    paddingBottom: 20,
  },
 header: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  avatar: {
    width: 72,
    height: 72,
    borderRadius: 36,
    marginBottom: 12,
  },
   name: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2d2d2d',
  },
  city: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  welcome: {
    fontSize: 16,
    color: '#666',
  },
  userRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2d2d2d',
  },
  cardContainer: {
    padding: 16,
    gap: 12,
  },
  cardItem: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },
  // cardItemFocused: {
  //   backgroundColor: '#e6f0ff',
  // },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconLabelRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    marginLeft: 10,
    color: '#000',
  },
});
