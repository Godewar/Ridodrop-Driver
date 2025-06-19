// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
// import { MaterialIcons, Ionicons, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
// import { LinearGradient } from 'expo-linear-gradient';

// export default function HomeScreen() {
//   const [isOnDuty, setIsOnDuty] = useState(false);
//   const [greeting, setGreeting] = useState('');

//   // Driver mock data
//   const driverInfo = {
//     name: 'Lokesh Godewar',
//     vehicleType: 'SUV',
//     numberPlate: 'XYZ 1234'
//   };

//   useEffect(() => {
//     updateGreeting();
//   }, []);

//   const updateGreeting = () => {
//     const hour = new Date().getHours();
//     if (hour < 12) setGreeting('Good Morning');
//     else if (hour < 17) setGreeting('Good Afternoon');
//     else setGreeting('Good Evening');
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       {/* Main Content */}
//       <View style={styles.mainContent}>

        
//         {/* Duty Toggle */}
//         <TouchableOpacity 
//           style={[styles.dutyToggle, isOnDuty ? styles.dutyOn : styles.dutyOff]}
//           onPress={() => setIsOnDuty(!isOnDuty)}
//         >
//           <Text style={styles.dutyText}>
//             {isOnDuty ? 'ON DUTY' : 'OFF DUTY'}
//           </Text>
//         </TouchableOpacity>

//         {/* Driver Info Card */}
//         <LinearGradient
//           colors={['#4c669f', '#3b5998', '#192f6a']}
//           style={styles.driverCard}
//         >
//           <Text style={styles.greeting}>{greeting}!</Text>
//           <Text style={styles.name}>{driverInfo.name}</Text>
//           <View style={styles.infoRow}>
//             <MaterialIcons name="directions-car" size={20} color="white" />
//             <Text style={styles.infoText}>{driverInfo.vehicleType}</Text>
//           </View>
//           <View style={styles.infoRow}>
//             <FontAwesome5 name="license-plate" size={20} color="white" />
//             <Text style={styles.infoText}>{driverInfo.numberPlate}</Text>
//           </View>
          
//           {!isOnDuty && (
//             <TouchableOpacity style={styles.startButton} onPress={() => setIsOnDuty(true)}>
//               <Text style={styles.startButtonText}>Go Online to Start</Text>
//             </TouchableOpacity>
//           )}
//         </LinearGradient>
//       </View>

//       {/* Driver App Advertisement Section */}
// <View style={styles.adBanner}>
//   <LinearGradient colors={['#FF6F00', '#FF8F00']} style={styles.adGradient}>
//     <Text style={styles.adTitle}>🚀 Ready to Boost Your Earnings?</Text>
//     <Text style={styles.adText}>
//       Join thousands of drivers growing their income with flexible hours, instant payouts, and priority trips!
//     </Text>
//     <TouchableOpacity style={styles.adButton} onPress={() => {/* navigate or show modal */}}>
//       <Text style={styles.adButtonText}>Get Started Now</Text>
//     </TouchableOpacity>
//   </LinearGradient>
// </View>

      
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//   },
//   mainContent: {
//     flex: 1,
//     padding: 16,
//   },
//   dutyToggle: {
//     padding: 12,
//     borderRadius: 25,
//     alignSelf: 'center',
//     marginBottom: 20,
//   },
//   dutyOn: {
//     backgroundColor: '#4CAF50',
//   },
//   dutyOff: {
//     backgroundColor: '#FF5252',
//   }, 
//   dutyText: {
//     color: 'white',
//     fontWeight: 'bold',
//     paddingHorizontal: 16,
//   },
//   driverCard: {
//     borderRadius: 15,
//     padding: 20,
//     marginHorizontal: 4,
//     elevation: 3,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//   },
//   greeting: {
//     color: 'white',
//     fontSize: 24,
//     fontWeight: '600',
//     marginBottom: 8,
//   },
//   name: {
//     color: 'white',
//     fontSize: 28,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   infoRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 12,
//   },
//   infoText: {
//     color: 'white',
//     fontSize: 16,
//     marginLeft: 10,
//   },
//   startButton: {
//     backgroundColor: 'white',
//     padding: 15,
//     borderRadius: 25,
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   startButtonText: {
//     color: '#192f6a',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
//   bottomNav: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     padding: 12,
//     backgroundColor: 'white',
//     borderTopWidth: 1,
//     borderTopColor: '#eee',
//   },
//   navItem: {
//     alignItems: 'center',
//   },
//   navText: {
//     color: '#666',
//     fontSize: 12,
//     marginTop: 4,
//   },
//   adBanner: {
//   borderRadius: 15,
//     padding: 10,
//     marginHorizontal: 4,
// },
// adGradient: {
//   borderRadius: 15,
//   padding: 30,
//   elevation: 4,
//   shadowColor: '#000',
//   shadowOffset: { width: 0, height: 3 },
//   shadowOpacity: 0.3,
//   shadowRadius: 4.65,
// },
// adTitle: {
//   color: 'white',
//   fontSize: 22,
//   fontWeight: 'bold',
//   marginBottom: 10,
// },
// adText: {
//   color: 'white',
//   fontSize: 15,
//   lineHeight: 22,
//   marginBottom: 16,
// },
// adButton: {
//   backgroundColor: 'white',
//   paddingVertical: 12,
//   paddingHorizontal: 24,
//   borderRadius: 25,
//   alignSelf: 'center',
// },
// adButtonText: {
//   color: '#FF6F00',
//   fontWeight: 'bold',
//   fontSize: 16,
// },

// });


// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Animated } from 'react-native';
// import { MaterialIcons, Ionicons, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
// import { LinearGradient } from 'expo-linear-gradient';

// export default function HomeScreen() {
//   const [isOnDuty, setIsOnDuty] = useState(false);
//     const [notificationCount, setNotificationCount] = useState(35);
//   const [greeting, setGreeting] = useState('');
//   const toggleAnim = useState(new Animated.Value(0))[0]; // 0 for off, 1 for on

//   // Driver mock data
//   const driverInfo = {
//     name: 'Lokesh Godewar',
//     vehicleType: 'SUV',
//     numberPlate: 'XYZ 1234'
//   };

//   useEffect(() => {
//     updateGreeting();
//   }, []);

//   const updateGreeting = () => {
//     const hour = new Date().getHours();
//     if (hour < 12) setGreeting('Good Morning');
//     else if (hour < 17) setGreeting('Good Afternoon');
//     else setGreeting('Good Evening');
//   };

//   const toggleDuty = () => {
//     const toValue = isOnDuty ? 0 : 1;
//     Animated.timing(toggleAnim, {
//       toValue,
//       duration: 300,
//       useNativeDriver: true,
//     }).start();
//     setIsOnDuty(!isOnDuty);
//   };

//   const onMenuPress = () => {
//     Alert.alert('Menu pressed');
//   };

//   const onHeartPress = () => {
//     Alert.alert('Favorites pressed');
//   };

//   const onBellPress = () => {
//     Alert.alert('Notifications pressed');
//     // Example: reset notification count
//     setNotificationCount(0);
//   };

//   const circleTranslateX = toggleAnim.interpolate({
//     inputRange: [0, 1],
//     outputRange: [0, 50], // Adjust this value based on your toggle width
//   });

//   return (
//     <SafeAreaView style={styles.container}>
//       {/* Main Content */}
//       <View style={styles.mainContent}>
//         {/* Duty Toggle */}
//         {/* <View style={styles.toggleContainer}>
//           <TouchableOpacity 
//             style={[styles.toggleTrack, isOnDuty ? styles.toggleOn : styles.toggleOff]}
//             onPress={toggleDuty}
//             activeOpacity={0.8}
//           >
//             <Animated.View 
//               style={[
//                 styles.toggleCircle,
//                 isOnDuty ? styles.toggleCircleOn : styles.toggleCircleOff,
//                 { transform: [{ translateX: circleTranslateX }] }
//               ]}
//             />
//             <Text style={[styles.toggleText, isOnDuty ? styles.toggleTextOn : styles.toggleTextOff]}>
//               {isOnDuty ? 'ON' : 'OFF'}
//             </Text>
//           </TouchableOpacity>
//           <Text style={styles.toggleLabel}>{isOnDuty ? 'ON DUTY' : 'OFF DUTY'}</Text>
//         </View> */}

//      <View style={styles.header}>
//       {/* Hamburger menu */}
//       <TouchableOpacity onPress={onMenuPress} style={styles.iconButton}>
//         <Ionicons name="menu" size={28} color="black" />
//       </TouchableOpacity>

//       {/* OFF DUTY toggle */}
//       <View style={styles.toggleContainer}>
//         <Text style={[styles.toggleLabel, !isOnDuty && styles.inactiveText]}>OFF DUTY</Text>
//         <Switch
//           value={isOnDuty}
//           onValueChange={setIsOnDuty}
//           trackColor={{ false: '#ccc', true: '#34C759' }}
//           thumbColor="#fff"
//           style={{ marginLeft: 8 }}
//         />
//       </View>

//       {/* Heart Icon */}
//       <TouchableOpacity onPress={onHeartPress} style={styles.iconButton}>
//         <MaterialCommunityIcons name="heart-outline" size={28} color="black" />
//       </TouchableOpacity>

//       {/* Bell Icon with Badge */}
//       <TouchableOpacity onPress={onBellPress} style={styles.iconButton}>
//         <View>
//           <Ionicons name="notifications-outline" size={28} color="black" />
//           {notificationCount > 0 && (
//             <View style={styles.badge}>
//               <Text style={styles.badgeText}>{notificationCount}</Text>
//             </View>
//           )}
//         </View>
//       </TouchableOpacity>
//     </View>

//         {/* Driver Info Card */}
//         <LinearGradient
//           colors={['#4c669f', '#3b5998', '#192f6a']}
//           style={styles.driverCard}
//         >
//           <Text style={styles.greeting}>{greeting}!</Text>
//           <Text style={styles.name}>{driverInfo.name}</Text>
//           <View style={styles.infoRow}>
//             <MaterialIcons name="directions-car" size={20} color="white" />
//             <Text style={styles.infoText}>{driverInfo.vehicleType}</Text>
//           </View>
//           <View style={styles.infoRow}>
//             <FontAwesome5 name="license-plate" size={20} color="white" />
//             <Text style={styles.infoText}>{driverInfo.numberPlate}</Text>
//           </View>
          
//           {!isOnDuty && (
//             <TouchableOpacity style={styles.startButton} onPress={toggleDuty}>
//               <Text style={styles.startButtonText}>Go Online to Start</Text>
//             </TouchableOpacity>
//           )}
//         </LinearGradient>
//       </View>

//       {/* Driver App Advertisement Section */}
//       <View style={styles.adBanner}>
//         <LinearGradient colors={['#FF6F00', '#FF8F00']} style={styles.adGradient}>
//           <Text style={styles.adTitle}>🚀 Ready to Boost Your Earnings?</Text>
//           <Text style={styles.adText}>
//             Join thousands of drivers growing their income with flexible hours, instant payouts, and priority trips!
//           </Text>
//           <TouchableOpacity style={styles.adButton} onPress={() => {/* navigate or show modal */}}>
//             <Text style={styles.adButtonText}>Get Started Now</Text>
//           </TouchableOpacity>
//         </LinearGradient>
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//     marginTop:50,
//   },
 
 
//   mainContent: {
//     flex: 1,
//     padding: 16,
//   },
//   toggleContainer: {
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   toggleTrack: {
//     width: 90,
//     height: 40,
//     borderRadius: 22,
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: 3,
//     justifyContent: 'space-between',
//     position: 'relative',
//   },
//   toggleOn: {
//     backgroundColor: '#4CAF50',
//   },
//   toggleOff: {
//     backgroundColor: '#FF5252',
//   },
//   toggleCircle: {
//     width: 32,
//     height: 32,
//     borderRadius: 16,
//     position: 'absolute',
//   },
//   toggleCircleOn: {
//     backgroundColor: 'white',
//   },
//   toggleCircleOff: {
//     backgroundColor: 'white',
//   },
//   toggleText: {
//     fontSize: 15,
//     fontWeight: 'bold',
//     marginHorizontal: 5,
//   },
//   toggleTextOn: {
//     color: 'white',
//     marginLeft: 8
    
//   },
//   toggleTextOff: {
//     color: 'white',
//     marginRight: 8,
//      left: 35
     
//   },
//   toggleLabel: {
//     marginTop: 8,
//     fontSize: 14,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   driverCard: {
//     borderRadius: 15,
//     padding: 20,
//     marginHorizontal: 4,
//     elevation: 3,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//   },
//   greeting: {
//     color: 'white',
//     fontSize: 24,
//     fontWeight: '600',
//     marginBottom: 8,
//   },
//   name: {
//     color: 'white',
//     fontSize: 28,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   infoRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 12,
//   },
//   infoText: {
//     color: 'white',
//     fontSize: 16,
//     marginLeft: 10,
//   },
//   startButton: {
//     backgroundColor: 'white',
//     padding: 15,
//     borderRadius: 25,
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   startButtonText: {
//     color: '#192f6a',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
//   adBanner: {
//     borderRadius: 15,
//     padding: 10,
//     marginHorizontal: 4,
//   },
//   adGradient: {
//     borderRadius: 15,
//     padding: 30,
//     elevation: 4,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 3 },
//     shadowOpacity: 0.3,
//     shadowRadius: 4.65,
//   },
//   adTitle: {
//     color: 'white',
//     fontSize: 22,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   adText: {
//     color: 'white',
//     fontSize: 15,
//     lineHeight: 22,
//     marginBottom: 16,
//   },
//   adButton: {
//     backgroundColor: 'white',
//     paddingVertical: 12,
//     paddingHorizontal: 24,
//     borderRadius: 25,
//     alignSelf: 'center',
//   },
//   adButtonText: {
//     color: '#FF6F00',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
//   header: {
//     paddingTop: 50, // For status bar spacing, adjust for your device or use SafeAreaView
//     paddingBottom: 10,
//     paddingHorizontal: 15,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     backgroundColor: '#fff',
//     borderBottomWidth: 1,
//     borderBottomColor: '#eee',
//   },
//   iconButton: {
//     padding: 5,
//   },
//   toggleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#f5f5f5',
//     borderRadius: 20,
//     paddingHorizontal: 12,
//     paddingVertical: 6,
//     borderWidth: 1,
//     borderColor: '#ccc',
//   },
//   toggleLabel: {
//     fontSize: 14,
//     fontWeight: '600',
//     color: '#999',
//   },
//   inactiveText: {
//     color: '#bbb',
//   },
//   badge: {
//     position: 'absolute',
//     right: -6,
//     top: -4,
//     backgroundColor: '#ff3b30',
//     borderRadius: 10,
//     minWidth: 18,
//     paddingHorizontal: 4,
//     height: 18,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   badgeText: {
//     color: 'white',
//     fontSize: 12,
//     fontWeight: 'bold',
//   },
// });

// import React, { useState, useEffect, useRef } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Animated, Dimensions, FlatList } from 'react-native';
// import { MaterialIcons, Ionicons, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
// import { LinearGradient } from 'expo-linear-gradient';

// const { width: screenWidth } = Dimensions.get('window');

// export default function HomeScreen() {
//   const [isOnDuty, setIsOnDuty] = useState(false);
//   const [greeting, setGreeting] = useState('');
//   const [currentAdIndex, setCurrentAdIndex] = useState(0);
//   const toggleAnim = useState(new Animated.Value(0))[0];
//   const scrollX = useRef(new Animated.Value(0)).current;
//   const adsRef = useRef(null);

//   // Driver mock data
//   const driverInfo = {
//     name: 'Lokesh Godewar',
//     vehicleType: 'SUV',
//     numberPlate: 'XYZ 1234'
//   };

//   // Advertisement data
//   const advertisements = [
//     {
//       id: '1',
//       title: '🚀 Ready to Boost Your Earnings?',
//       text: 'Join thousands of drivers growing their income with flexible hours, instant payouts, and priority trips!',
//       colors: ['#FF6F00', '#FF8F00'],
//       buttonText: 'Get Started Now'
//     },
//     {
//       id: '2',
//       title: '💰 New Bonus Program!',
//       text: 'Complete 20 trips this week and earn an extra ₹2000 bonus! Limited time offer.',
//       colors: ['#4CAF50', '#8BC34A'],
//       buttonText: 'Learn More'
//     },
//     {
//       id: '3',
//       title: '🌟 Top Rated Driver Rewards',
//       text: 'Maintain a 4.8+ rating and get access to premium trips with higher earnings!',
//       colors: ['#2196F3', '#03A9F4'],
//       buttonText: 'See Benefits'
//     }
//   ];

//   useEffect(() => {
//     updateGreeting();
    
//     // Auto-scroll ads every 5 seconds
//     const interval = setInterval(() => {
//       const nextIndex = (currentAdIndex + 1) % advertisements.length;
//       setCurrentAdIndex(nextIndex);
//       adsRef.current?.scrollToIndex({ index: nextIndex, animated: true });
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [currentAdIndex]);

//   const updateGreeting = () => {
//     const hour = new Date().getHours();
//     if (hour < 12) setGreeting('Good Morning');
//     else if (hour < 17) setGreeting('Good Afternoon');
//     else setGreeting('Good Evening');
//   };

//   const toggleDuty = () => {
//     const toValue = isOnDuty ? 0 : 1;
//     Animated.timing(toggleAnim, {
//       toValue,
//       duration: 300,
//       useNativeDriver: true,
//     }).start();
//     setIsOnDuty(!isOnDuty);
//   };

//   const circleTranslateX = toggleAnim.interpolate({
//     inputRange: [0, 1],
//     outputRange: [0, 55],
//   });

//   const renderAdItem = ({ item }) => (
//     <View style={[styles.adSlide, { width: screenWidth - 32 }]}>
//       <LinearGradient colors={item.colors} style={styles.adGradient}>
//         <Text style={styles.adTitle}>{item.title}</Text>
//         <Text style={styles.adText}>{item.text}</Text>
//         <TouchableOpacity style={styles.adButton} onPress={() => {}}>
//           <Text style={styles.adButtonText}>{item.buttonText}</Text>
//         </TouchableOpacity>
//       </LinearGradient>
//     </View>
//   );

//   const renderAdIndicators = () => (
//     <View style={styles.indicatorContainer}>
//       {advertisements.map((_, index) => (
//         <View 
//           key={index}
//           style={[
//             styles.indicator,
//             currentAdIndex === index ? styles.activeIndicator : styles.inactiveIndicator
//           ]}
//         />
//       ))}
//     </View>
//   );

//   return (
//     <SafeAreaView style={styles.container}>
//       {/* Main Content */}
//       <View style={styles.mainContent}>
//         {/* Duty Toggle */}
//         <View style={styles.toggleContainer}>
//           <TouchableOpacity 
//             style={[styles.toggleTrack, isOnDuty ? styles.toggleOn : styles.toggleOff]}
//             onPress={toggleDuty}
//             activeOpacity={0.8}
//           >
//             <Animated.View 
//               style={[
//                 styles.toggleCircle,
//                 isOnDuty ? styles.toggleCircleOn : styles.toggleCircleOff,
//                 { transform: [{ translateX: circleTranslateX }] }
//               ]}
//             />
//             <Text style={[styles.toggleText, isOnDuty ? styles.toggleTextOn : styles.toggleTextOff]}>
//               {isOnDuty ? 'ON' : 'OFF'}
//             </Text>
//           </TouchableOpacity>
//           <Text style={styles.toggleLabel}>{isOnDuty ? 'ON DUTY' : 'OFF DUTY'}</Text>
//         </View>

//         {/* Driver Info Card */}
//         <LinearGradient
//           colors={['#4c669f', '#3b5998', '#192f6a']}
//           style={styles.driverCard}
//         >
//           <Text style={styles.greeting}>{greeting}!</Text>
//           <Text style={styles.name}>{driverInfo.name}</Text>
//           <View style={styles.infoRow}>
//             <MaterialIcons name="directions-car" size={20} color="white" />
//             <Text style={styles.infoText}>{driverInfo.vehicleType}</Text>
//           </View>
//           <View style={styles.infoRow}>
//             <FontAwesome5 name="license-plate" size={20} color="white" />
//             <Text style={styles.infoText}>{driverInfo.numberPlate}</Text>
//           </View>
          
//           {!isOnDuty && (
//             <TouchableOpacity style={styles.startButton} onPress={toggleDuty}>
//               <Text style={styles.startButtonText}>Go Online to Start</Text>
//             </TouchableOpacity>
//           )}
//         </LinearGradient>
//       </View>

//       {/* Driver App Advertisement Slider */}
//       <View style={styles.adContainer}>
//         <FlatList
//           ref={adsRef}
//           data={advertisements}
//           renderItem={renderAdItem}
//           horizontal
//           pagingEnabled
//           showsHorizontalScrollIndicator={false}
//           onScroll={Animated.event(
//             [{ nativeEvent: { contentOffset: { x: scrollX } } }],
//             { useNativeDriver: false }
//           )}
//           onMomentumScrollEnd={(e) => {
//             const newIndex = Math.round(e.nativeEvent.contentOffset.x / (screenWidth - 32));
//             setCurrentAdIndex(newIndex);
//           }}
//           keyExtractor={(item) => item.id}
//         />
//         {renderAdIndicators()}
//       </View>
//     </SafeAreaView>
//   );
// }


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//   },
//   mainContent: {
//     flex: 1,
//     padding: 16,
//   },
//   toggleContainer: {
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   toggleTrack: {
//     width: 90,
//     height: 40,
//     borderRadius: 22,
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: 3,
//     justifyContent: 'space-between',
//     position: 'relative',
//   },
//   toggleOn: {
//     backgroundColor: '#4CAF50',
//   },
//   toggleOff: {
//     backgroundColor: '#FF5252',
//   },
//   toggleCircle: {
//     width: 32,
//     height: 32,
//     borderRadius: 16,
//     position: 'absolute',
//   },
//   toggleCircleOn: {
//     backgroundColor: 'white',
//   },
//   toggleCircleOff: {
//     backgroundColor: 'white',
//   },
//   toggleText: {
//     fontSize: 15,
//     fontWeight: 'bold',
//     marginHorizontal: 5,
//   },
//   toggleTextOn: {
//     color: 'white',
//     marginLeft: 8,
    
//   },
//   toggleTextOff: {
//     color: 'white',
//     marginRight: 8,
//      left: 35, 
//   },
//   toggleLabel: {
//     marginTop: 8,
//     fontSize: 14,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   driverCard: {
//     borderRadius: 15,
//     padding: 20,
//     marginHorizontal: 4,
//     elevation: 3,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//   },
//   greeting: {
//     color: 'white',
//     fontSize: 24,
//     fontWeight: '600',
//     marginBottom: 8,
//   },
//   name: {
//     color: 'white',
//     fontSize: 28,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   infoRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 12,
//   },
//   infoText: {
//     color: 'white',
//     fontSize: 16,
//     marginLeft: 10,
//   },
//   startButton: {
//     backgroundColor: 'white',
//     padding: 15,
//     borderRadius: 25,
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   startButtonText: {
//     color: '#192f6a',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
//   adBanner: {
//     borderRadius: 15,
//     padding: 10,
//     marginHorizontal: 4,
//   },
//   adGradient: {
//     borderRadius: 15,
//     padding: 30,
//     elevation: 4,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 3 },
//     shadowOpacity: 0.3,
//     shadowRadius: 4.65,
//   },
//   adTitle: {
//     color: 'white',
//     fontSize: 22,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   adText: {
//     color: 'white',
//     fontSize: 15,
//     lineHeight: 22,
//     marginBottom: 16,
//   },
//   adButton: {
//     backgroundColor: 'white',
//     paddingVertical: 12,
//     paddingHorizontal: 24,
//     borderRadius: 25,
//     alignSelf: 'center',
//   },
//   adButtonText: {
//     color: '#FF6F00',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
//   adContainer: {
//     marginBottom: 8,
//     paddingHorizontal: 16,
//   },
//   adSlide: {
//     marginRight: 16,
//   },
//   indicatorContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginTop: 10,
//   },
//   indicator: {
//     width: 8,
//     height: 8,
//     borderRadius: 4,
//     marginHorizontal: 4,
//   },
//   activeIndicator: {
//     backgroundColor: '#4c669f',
//     width: 12,
//   },
//   inactiveIndicator: {
//     backgroundColor: '#ccc',
//   },
// });


import React, { useState , useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Animated,
  Alert,
 Image
  
} from 'react-native';
import { MaterialIcons, Ionicons, FontAwesome5, MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';


import GoToAreaScreen from './GoToAreaScreen';


export default function HomeScreen() {
  const [isOnDuty, setIsOnDuty] = useState(false);
  const [notificationCount, setNotificationCount] = useState(35);
  const [greeting, setGreeting] = useState('');
  const toggleAnim = useState(new Animated.Value(0))[0];
    const navigation = useNavigation();

 

   

  useEffect(() => {
    updateGreeting();
  }, []);

   const circleTranslateX = toggleAnim.interpolate({
    inputRange: [0, 1],
     outputRange: [0, 90],
   });


  const updateGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('Good Morning Captain 🌤');
    else if (hour < 17) setGreeting('Good Afternoon Captain 🌤');
    else setGreeting('Good Evening Captain 🌤');
  };

  const toggleDuty = () => {
    const toValue = isOnDuty ? 0 : 1;
    Animated.timing(toggleAnim, {
      toValue,
      duration: 300,
      useNativeDriver: true,
    }).start();
    setIsOnDuty(!isOnDuty);
  };




  const onHeartPress = () => {
    
     navigation.navigate("GoToAreaScreen")
    
  };

  const onBellPress = () => {
    Alert.alert('Notifications pressed');
    setNotificationCount(0);
  };

  

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity  onPress={() => navigation.openDrawer()} style={styles.iconButton}>
          {/* <Ionicons name="menu" size={28} color="black" /> */}
           <Image
        source={require('../assets/menu.png')} 
        style={styles.menuIcon}
      />
        </TouchableOpacity>

        {/* <View style={styles.switchContainer}> */}
          {/* <Text style={[styles.switchLabel, !isOnDuty && styles.inactiveText]}>OFF DUTY</Text> */}
         
           <View style={styles.toggleContainer}>
           <TouchableOpacity 
             style={[styles.toggleTrack, isOnDuty ? styles.toggleOn : styles.toggleOff]}
             onPress={toggleDuty}
             activeOpacity={0.8}
>
             <Animated.View 
               style={[
                 styles.toggleCircle,
                 isOnDuty ? styles.toggleCircleOn :  styles.toggleCircleOff,
                 { transform: [{ translateX: circleTranslateX }] }
               ]}
             />

             <Text style={[styles.toggleText, isOnDuty ? styles.toggleTextOn : styles.toggleTextOff]}>
               {isOnDuty ? 'ON DUTY' : 'OFF DUTY'}
             </Text>
           </TouchableOpacity>
           
           
         </View>

        {/* </View> */}

         <TouchableOpacity onPress={onHeartPress} style={styles.iconHeart}>
           {/* <MaterialCommunityIcons name="heart-outline" size={20} color="black" /> */}
               <Ionicons name="location-outline" size={22} />
         </TouchableOpacity>

        <TouchableOpacity onPress={onBellPress} style={styles.iconButton}>
          <View>
             <Ionicons name="notifications-outline" size={20} color="black" />
             {notificationCount > 0 && (
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{notificationCount}</Text>
              </View>
            )}
          </View>
        </TouchableOpacity>
      </View>


   {/* Earnings Section */}
       {/* <View style={styles.earningsSection}>
         <Text style={styles.earningsText}>Today's Earnings</Text>
         <Text style={styles.earningsAmount}>₹0</Text>
         <MaterialIcons name="keyboard-arrow-down" size={24} />
       </View> */}
 {/* Orders Progress */}

  

       {/* Main Content */}
     {/* <View style={styles.mainContent}> */}
     <View style={styles.centerContent}>
         {/* Driver Info Card */}
         {/* <LinearGradient
           colors={['#FF7F7F', '#3b5998', '#192f6a']}
                   style={styles.driverCard}
        > */}
           <Text style={styles.greeting}>{greeting}</Text>
            <Image source={require('../assets/bank.png')} style={styles.image} />
            
           {/* <Text style={styles.name}>{driverInfo.name}</Text> */}
           {/* <View style={styles.infoRow}>
             <MaterialIcons name="directions-car" size={20} color="white" />
             <Text style={styles.infoText}>{driverInfo.vehicleType}</Text>
           </View> */}
           {/* <View style={styles.infoRow}>
             <FontAwesome5 name="license-plate" size={20} color="white" />
             <Text style={styles.infoText}>{driverInfo.numberPlate}</Text>
           </View> */}

          {!isOnDuty && (
            <TouchableOpacity style={styles.startButton} onPress={toggleDuty}>
              <Text style={styles.startButtonText}>Go ON DUTY to start earning</Text>
            </TouchableOpacity>
           )}
         {/* </LinearGradient> */}

    {/* <View style={styles.centerContent}>
         <Image source={require('../assets/bank.png')} style={styles.image} />
         <Text style={styles.greeting}>{greeting}</Text>
         <Text style={styles.onDutyPrompt}>Go ON DUTY to start earning</Text>
       </View> */}
       </View>


    

       {/* Ad Banner */}
     
     </SafeAreaView>
   );
 }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  mainContent: {
    flex: 1,
    padding: 16,
  },
  header: {
    paddingTop: 50,
    paddingBottom: 10,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  iconButton: {
    padding: 5,
    
    
  },
  iconHeart: {
    marginLeft:50,
     padding: 5

  },
  
   toggleContainer: {
    alignItems: 'center',
    marginLeft:70
    
   
  },
  toggleTrack: {
    width: 120,
    height: 34,
    borderRadius: 22,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 3,
    justifyContent: 'space-between',
    position: 'relative',
    
  },
  toggleOn: {
    backgroundColor: '#4CAF50',
    
  },
  toggleOff: {
    backgroundColor: '#FF5252',
  },
  toggleCircle: {
    width: 22,
    height: 22,
    borderRadius: 11,
    position: 'absolute',
       elevation: 3,

  },
  toggleCircleOn: {
    backgroundColor: 'white',
    
    
  },
  toggleCircleOff: {
    backgroundColor: 'white',
    left: 5,
  },
  toggleText: {
    fontSize: 15,
    fontWeight: 'bold',
    marginHorizontal: 5,
  },
   toggleTextOn: {
    color: 'white',
    marginLeft: 13,
    
  },
  toggleTextOff: {
    color: 'white',
    marginRight: 8,
     left: 35, 
  },
  toggleLabel: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  inactiveText: {
    color: '#bbb',
  },
  badge: {
    position: 'absolute',
    right: -6,
    top: -4,
    backgroundColor: '#ff3b30',
    borderRadius: 8,
    minWidth: 16,
    paddingHorizontal: 4,
    height: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: 'white',
    fontSize: 8,
    fontWeight: 'bold',
  },
  driverCard: {
    borderRadius: 15,
    padding: 20,
    marginHorizontal: 4,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  // greeting: {
  //   color: 'black',
  //   fontSize: 24,
  //   fontWeight: '600',
  //   marginBottom: 8,
  // },
  name: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  infoText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 10,
  },
  startButton: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 20,
    
  },
  startButtonText: {
    color: '#192f6a',
    fontWeight: 'bold',
    fontSize: 16,
  },
  adBanner: {
    borderRadius: 15,
    padding: 10,
    marginHorizontal: 4,
  },
  adGradient: {
    borderRadius: 15,
    padding: 30,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
  },
  adTitle: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  adText: {
    color: 'white',
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 16,
  },
  adButton: {
    backgroundColor: 'white',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
    alignSelf: 'center',
  },
  adButtonText: {
    color: '#FF6F00',
    fontWeight: 'bold',
    fontSize: 16,
  },
 earningsSection: {
    backgroundColor: '#e6ecfc',
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  earningsText: { flex: 1, fontSize: 16, fontWeight: '500' },
  earningsAmount: { fontSize: 16, fontWeight: 'bold', marginRight: 5 },

 centerContent: {
    alignItems: 'center',
    marginVertical: 20,
  },
  image: { width: 100, height: 100, marginBottom: 10 },
  greeting: { fontSize: 16, color: '#555',
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 8, },

     card: {
    margin: 10,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardLabel: {
    backgroundColor: '#e0e0e0',
    paddingHorizontal: 8,
    borderRadius: 6,
    fontSize: 12,
    color: '#555',
  },
  ordersText: {
    fontSize: 16,
    marginVertical: 8,
  },
  bold: { fontWeight: 'bold' },
  knowMore: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
  knowMoreText: {
    marginRight: 4,
    color: '#000'},
     menuIcon: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
  }
});



