// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Switch, Alert } from 'react-native';
// import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
// import { useNavigation } from '@react-navigation/native';
// // import CheckBox from '@react-native-community/checkbox';

// const GoToAreaScreen = () => {
//   const navigation = useNavigation();
//   const [areas, setAreas] = useState([
//     { id: 1, name: 'Someshwara Nagar, Jayanagar', enabled: false },
//     { id: 2, name: 'Kothanur, Bengaluru', enabled: false },
//     { id: 3, name: 'HBR Layout, Bengaluru', enabled: false },
//     { id: 4, name: 'Whitefield, Bengaluru', enabled: false },
//   ]);

 

//   const [isGoToAreaOn, setIsGoToAreaOn] = useState(false);
// const [checked, setChecked] = useState(false);

//   const handleDelete = (id) => {
//     Alert.alert(
//       'Delete Area',
//       'Are you sure you want to delete this area',
//       [
//         { text: 'Cancel', style: 'cancel' },
//         { text: 'Delete', style: 'destructive', onPress: () => setAreas(areas.filter((a) => a.id !== id)) }
//       ]
//     );
//   };

// const handleToggle = (id) => {
//   const updated = areas.map((area) =>
//     area.id === id
//       ? { ...area, enabled: !area.enabled }
//       : { ...area, enabled: false }
//   );

//   const wasTurnedOn = !areas.find(area => area.id === id).enabled;

//   setAreas(updated);
//   setIsGoToAreaOn(updated.some((a) => a.enabled));

//   if (wasTurnedOn) {
//     Alert.alert('Go To Area is Turned On');
//   }
// };



//   return (
//     <View style={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.goBack()}>
//           <Ionicons name="arrow-back" size={24} color="#333" />
//         </TouchableOpacity>
//         <Text style={styles.headerTitle}>Go to Area</Text>
//       </View>

//       {/* Banner */}
//       <View style={styles.banner}>
//         <Text style={styles.bannerText}>
//           Get orders to your home{"\n"}or anywhere you want to go
//         </Text>
//         <MaterialCommunityIcons name="map-marker-heart" size={40} color="#ff4d6d" style={styles.bannerIcon} />
//         <TouchableOpacity>
//           <Text style={styles.knowMore}>Know more</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Saved areas */}
//       <Text style={styles.subTitle}>Saved drop areas (Switch ON up to 1 areas)</Text>

//       <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
//         {areas.map((area) => (
//           <View key={area.id} style={[styles.areaCard, area.enabled && styles.cardActive]}>
//             <View style={styles.areaTop}>
//               <Text numberOfLines={1} style={styles.areaName}>{area.name}</Text>
//               <Switch
//                 trackColor={{ false: '#ccc', true: '#90ee90' }}
//                 thumbColor={area.enabled ? '#4caf50' : '#f4f3f4'}
//                 onValueChange={() => handleToggle(area.id)}
//                 value={area.enabled}
//               />
//             </View>
//             <TouchableOpacity onPress={() => handleDelete(area.id)}>
//               <Text style={styles.deleteText}>🗑️ Delete</Text>
//             </TouchableOpacity>
//           </View>
//         ))}

//       </ScrollView>

      
//   {isGoToAreaOn && (
//  <TouchableOpacity
//   style={styles.checkboxContainer}
//   onPress={() => setChecked(!checked)}
// >
//   <Ionicons
//     name={checked ? 'checkbox-outline' : 'square-outline'}
//     size={24}
//     color="#4caf50"
//   />
//   <Text style={styles.checkboxLabel}>See only Go To Area Orders</Text>
// </TouchableOpacity>
// )}

   

      

//       {/* Add new area button */}
//       <TouchableOpacity style={styles.fabButton}>
//         <Ionicons name="add-circle" size={28} color="#fff" />
//         <Text style={styles.fabButtonText}>Add new area</Text>
//       </TouchableOpacity>
//     </View>

    
//   );
// };

// export default GoToAreaScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     paddingHorizontal: 15,
//     marginTop:15
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 18,
//   },
//   headerTitle: {
//     fontSize: 18,
//     fontWeight: '600',
//     marginLeft: 10,
//     color: '#333',
//   },
//   banner: {
//     backgroundColor: '#fff0f0',
//     borderRadius: 12,
//     padding: 16,
//     position: 'relative',
//     marginBottom: 12,
//     borderWidth: 1,
//     borderColor: '#ffc0cb',
//   },
//   bannerText: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#333',
//   },
//   bannerIcon: {
//     position: 'absolute',
//     right: 20,
//     top: 20,
//   },
//   knowMore: {
//     color: '#ff4d6d',
//     fontSize: 14,
//     marginTop: 10,
//     fontWeight: '500',
//   },
//   subTitle: {
//     fontSize: 14,
//     fontWeight: '600',
//     color: '#555',
//     marginBottom: 8,
//   },
//   areaCard: {
//     borderWidth: 0.5,
//     borderColor: '#000000',
//     borderRadius: 10,
//     padding: 14,
//     marginBottom: 14,
//     backgroundColor: '#f9f9f9',
//   },
//   cardActive: {
//     borderColor: '#4caf50',
//     backgroundColor: '#eaffea',
//   },
//   areaTop: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   areaName: {
//     fontSize: 16,
//     fontWeight: '500',
//     flex: 1,
//     marginRight: 10,
//     color: '#333',
//   },
//   deleteText: {
//     marginTop: 8,
//     color: '#d9534f',
//     fontSize: 14,
//     fontWeight: '500',
//   },
//   fabButton: {
//     position: 'absolute',
//     bottom: 20,
//     left: 15,
//     right: 15,
//     backgroundColor: '#EC4D4A',
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingVertical: 14,
//     borderRadius: 30,
//     shadowColor: '#000',
//     shadowOpacity: 0.15,
//     shadowRadius: 8,
//     elevation: 4,
//   },
//   fabButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: '600',
//     marginLeft: 8,
//   },

// checkboxContainer: {
//   flexDirection: 'row',
//   alignItems: 'center',
//   marginTop: 10,
// },
// checkboxLabel: {
//   marginLeft: 10,
//   fontSize: 16,
//   color: '#333',
// }

// });


import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  ScrollView, 
  Switch, 
  Alert,
  Dimensions,
  Animated,
  Easing
} from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const GoToAreaScreen = () => {
  const navigation = useNavigation();
  const [areas, setAreas] = useState([
    { id: 1, name: 'Someshwara Nagar, Jayanagar', enabled: false },
    { id: 2, name: 'Kothanur, Bengaluru', enabled: false },
    { id: 3, name: 'HBR Layout, Bengaluru', enabled: false },
    { id: 4, name: 'Whitefield, Bengaluru', enabled: false },
  ]);

  const [isGoToAreaOn, setIsGoToAreaOn] = useState(false);
  const [checked, setChecked] = useState(false);
  const [scaleValue] = useState(new Animated.Value(1));

  const handleAddNewArea = () => {
  const newId = areas.length > 0 ? areas[areas.length - 1].id + 1 : 1;

  // You can also show a prompt or modal to ask user for input
  const newArea = {
    id: newId,
    name: `New Area ${newId}`,
    enabled: false,
  };

  setAreas([...areas, newArea]);
};

  const handleDelete = (id) => {
    Alert.alert(
      'Delete Area',
      'Are you sure you want to delete this area?',
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Delete', 
          style: 'destructive', 
          onPress: () => {
            setAreas(areas.filter((a) => a.id !== id));
            if (areas.find(a => a.id === id)?.enabled) {
              setIsGoToAreaOn(false);
            }
          }
        }
      ]
    );
  };

  const animateButton = () => {
    Animated.sequence([
      Animated.timing(scaleValue, {
        toValue: 0.95,
        duration: 100,
        easing: Easing.ease,
        useNativeDriver: true
      }),
      Animated.timing(scaleValue, {
        toValue: 1,
        duration: 100,
        easing: Easing.ease,
        useNativeDriver: true
      })
    ]).start();
  };

  const handleToggle = (id) => {
    animateButton();
    
    const updated = areas.map((area) =>
      area.id === id
        ? { ...area, enabled: !area.enabled }
        : { ...area, enabled: false }
    );

    const wasTurnedOn = !areas.find(area => area.id === id).enabled;

    setAreas(updated);
    setIsGoToAreaOn(updated.some((a) => a.enabled));

    if (wasTurnedOn) {
      Alert.alert(
        'Go To Area Activated',
        `You'll now receive orders for ${areas.find(a => a.id === id).name}`,
        [{ text: 'OK' }]
      );
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Go to Area</Text>
      </View>

      {/* Banner */}
      <Animated.View style={[styles.banner, { transform: [{ scale: scaleValue }] }]}>
        <View style={styles.bannerContent}>
          <Text style={styles.bannerText}>
            Get orders to your home{"\n"}or anywhere you want to go
          </Text>
          <MaterialCommunityIcons 
            name="map-marker-heart" 
            size={width * 0.1} 
            color="#ff4d6d" 
            style={styles.bannerIcon} 
          />
        </View>
        <TouchableOpacity style={styles.knowMoreButton}>
          <Text style={styles.knowMoreText}>Know more →</Text>
        </TouchableOpacity>
      </Animated.View>

        {/* {isGoToAreaOn && (
          <Animated.View 
            style={[
              styles.checkboxContainer,
              { transform: [{ scale: scaleValue }] }
            ]}
          >
            <TouchableOpacity
              style={styles.checkboxButton}
              onPress={() => setChecked(!checked)}
              activeOpacity={0.7}
            >
              <Ionicons
                name={checked ? 'checkbox' : 'square-outline'}
                size={24}
                color={checked ? '#4CAF50' : '#666'}
              />
              <Text style={styles.checkboxLabel}>See only Go To Area Orders</Text>
            </TouchableOpacity>
          </Animated.View>
        )} */}

      {/* Saved areas */}
      <Text style={styles.subTitle}>SAVED DROP AREAS</Text>
      <Text style={styles.subTitleNote}>Switch ON up to 1 area</Text>

      <ScrollView 
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        {areas.map((area) => (
          <Animated.View 
            key={area.id} 
            style={[
              styles.areaCard, 
              area.enabled && styles.cardActive,
              { transform: [{ scale: scaleValue }] }
            ]}
          >
            <View style={styles.areaTop}>
              <View style={styles.locationIcon}>
                <Ionicons 
                  name="location-sharp" 
                  size={20} 
                  color={area.enabled ? '#4CAF50' : '#666'} 
                />
              </View>
              <Text 
                numberOfLines={2} 
                style={[
                  styles.areaName,
                  area.enabled && styles.areaNameActive
                ]}
              >
                {area.name}
              </Text>
              <Switch
                trackColor={{ false: '#e0e0e0', true: '#C8E6C9' }}
                thumbColor={area.enabled ? '#4CAF50' : '#f4f3f4'}
                ios_backgroundColor="#e0e0e0"
                onValueChange={() => handleToggle(area.id)}
                value={area.enabled}
              />
            </View>
            <TouchableOpacity 
              style={styles.deleteButton}
              onPress={() => handleDelete(area.id)}
            >
              <Ionicons name="trash-outline" size={18} color="#d9534f" />
              <Text style={styles.deleteText}>Delete</Text>
            </TouchableOpacity>
          </Animated.View>
        ))}

      
      </ScrollView>

      {/* Add new area button */}
      <TouchableOpacity 
        style={styles.fabButton}
        activeOpacity={0.8}   onPress={handleAddNewArea}
      >
        <Ionicons name="add" size={24} color="#fff" />
        <Text style={styles.fabButtonText} >Add new area</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    paddingHorizontal: width * 0.05,
    marginTop:20
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: height * 0.02,
    marginBottom: height * 0.01,
  },
  backButton: {
    //  padding: 8,
    marginRight: 10,
  },
  headerTitle: {
    fontSize: width * 0.06,
    fontWeight: '700',
    color: '#2c3e50',
    marginLeft: width * 0.02,
  },
  banner: {
    backgroundColor: '#fff0f3',
    borderRadius: 16,
    padding: width * 0.05,
    marginBottom: height * 0.02,
    borderWidth: 1,
    borderColor: '#ffccd5',
    shadowColor: '#ff4d6d',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  bannerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bannerText: {
    fontSize: width * 0.045,
    fontWeight: '600',
    color: '#2c3e50',
    lineHeight: height * 0.03,
    flex: 1,
  },
  bannerIcon: {
    marginLeft: width * 0.03,
  },
  knowMoreButton: {
    alignSelf: 'flex-start',
    marginTop: height * 0.01,
  },
  knowMoreText: {
    color: '#ff4d6d',
    fontSize: width * 0.035,
    fontWeight: '600',
  },
  subTitle: {
    fontSize: width * 0.035,
    fontWeight: '700',
    color: '#4a5568',
    marginBottom: height * 0.005,
    letterSpacing: 0.5,
  },
  subTitleNote: {
    fontSize: width * 0.03,
    color: '#718096',
    marginBottom: height * 0.02,
  },
  scrollContainer: {
    paddingBottom: height * 0.1,
  },
  areaCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: width * 0.04,
    marginBottom: height * 0.015,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  cardActive: {
    borderColor: '#4CAF50',
    backgroundColor: '#f1f8e9',
    shadowColor: '#4CAF50',
    shadowOpacity: 0.1,
  },
  areaTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: height * 0.01,
  },
  locationIcon: {
    marginRight: width * 0.03,
  },
  areaName: {
    fontSize: width * 0.04,
    fontWeight: '500',
    flex: 1,
    color: '#4a5568',
    marginRight: width * 0.03,
  },
  areaNameActive: {
    color: '#2e7d32',
    fontWeight: '600',
  },
  deleteButton: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
    paddingVertical: height * 0.005,
  },
  deleteText: {
    color: '#d9534f',
    fontSize: width * 0.035,
    fontWeight: '500',
    marginLeft: width * 0.01,
  },
  checkboxContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: width * 0.04,
    marginTop: height * 0.01,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  checkboxButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxLabel: {
    marginLeft: width * 0.03,
    fontSize: width * 0.038,
    color: '#4a5568',
    fontWeight: '500',
  },
  fabButton: {
    position: 'absolute',
    bottom: height * 0.03,
    left: width * 0.05,
    right: width * 0.05,
    backgroundColor: '#EC4D4A',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: height * 0.018,
    borderRadius: 30,
    shadowColor: '#EC4D4A',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  fabButtonText: {
    color: '#fff',
    fontSize: width * 0.04,
    fontWeight: '600',
    marginLeft: width * 0.02,
  },
});

export default GoToAreaScreen;