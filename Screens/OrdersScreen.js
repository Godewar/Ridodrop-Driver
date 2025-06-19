// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';

// export default function OrdersScreen() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>1 Order</Text>

//       <View style={styles.card}>
//         <View style={styles.headerRow}>
//           <Text style={styles.bikeLabel}>🏍️ Bike</Text>
//           <Text style={styles.price}>
//             ₹25 <Text style={styles.cash}>+ ₹12 (Cash)</Text>
//           </Text>
//         </View>

//         <View style={styles.locationBlock}>
//           <View style={styles.locationItem}>
//             <View style={styles.locationMarker} />
//             <Text style={styles.km}>1.4 Km</Text>
//             <View style={styles.locationContent}>
//               <Text style={styles.placeTitle}>Whitefield Sri Sathya Sai Hospital</Text>
//               <Text style={styles.address}>Gate 1, Forum Shantiniketan Mall, NEXUS SHANTINIKETAN, Whitefield Main Road, Thigalarapalya</Text>
//             </View>
//           </View>

//           <View style={styles.divider} />

//           <View style={styles.locationItem}>
//             <Ionicons name="location" size={16} color="#E53935" style={styles.destinationIcon} />
//             <Text style={styles.km}>2 Km</Text>
//             <View style={styles.locationContent}>
//               <Text style={styles.placeTitle}>Whitefield</Text>
//               <Text style={styles.address}>Gopalan International School, Seetharampalya - Hoodi Road, Shivaji Nagar, Hoodi</Text>
//             </View>
//           </View>
//         </View>

//         <View style={styles.buttonRow}>
//           <TouchableOpacity style={styles.rejectBtn}>
//             <Ionicons name="close" size={20} color="#fff" />
//             <Text style={styles.rejectText}>Reject</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.acceptBtn}>
//             <Ionicons name="checkmark" size={20} color="#fff" />
//             <Text style={styles.acceptText}>Accept</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#F5F7FA',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: '800',
//     marginBottom: 16,
//     color: '#2C3E50',
//   },
//   card: {
//     backgroundColor: '#fff',
//     borderRadius: 16,
//     padding: 20,
//     shadowColor: '#1A237E',
//     shadowOpacity: 0.1,
//     shadowRadius: 10,
//     shadowOffset: { width: 0, height: 4 },
//     elevation: 6,
//   },
//   headerRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 12,
//     paddingBottom: 12,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ECEFF1',
//   },
//   bikeLabel: {
//     backgroundColor: '#E3F2FD',
//     paddingVertical: 6,
//     paddingHorizontal: 12,
//     borderRadius: 12,
//     fontWeight: '600',
//     color: '#1976D2',
//     fontSize: 14,
//   },
//   price: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#2E7D32',
//   },
//   cash: {
//     color: '#43A047',
//     fontSize: 14,
//   },
//   locationBlock: {
//     marginTop: 8,
//   },
//   locationItem: {
//     flexDirection: 'row',
//     marginBottom: 12,
//   },
//   locationMarker: {
//     width: 10,
//     height: 10,
//     borderRadius: 5,
//     backgroundColor: '#1976D2',
//     marginRight: 12,
//     marginTop: 6,
//   },
//   destinationIcon: {
//     marginRight: 8,
//     marginTop: 4,
//   },
//   km: {
//     fontSize: 14,
//     fontWeight: '600',
//     color: '#546E7A',
//     marginRight: 12,
//     minWidth: 40,
//   },
//   locationContent: {
//     flex: 1,
//   },
//   placeTitle: {
//     fontWeight: '700',
//     fontSize: 16,
//     color: '#263238',
//     marginBottom: 4,
//   },
//   address: {
//     fontSize: 13,
//     color: '#607D8B',
//     lineHeight: 18,
//   },
//   divider: {
//     height: 1,
//     backgroundColor: '#ECEFF1',
//     marginVertical: 12,
//     marginLeft: 22,
//   },
//   buttonRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   rejectBtn: {
//     backgroundColor: '#E53935',
//     borderRadius: 24,
//     paddingVertical: 12,
//     paddingHorizontal: 24,
//     flexDirection: 'row',
//     alignItems: 'center',
//     flex: 1,
//     marginRight: 12,
//     justifyContent: 'center',
//   },
//   rejectText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: '700',
//     marginLeft: 8,
//   },
//   acceptBtn: {
//     backgroundColor: '#43A047',
//     borderRadius: 24,
//     paddingVertical: 12,
//     paddingHorizontal: 24,
//     flexDirection: 'row',
//     alignItems: 'center',
//     flex: 1,
//     justifyContent: 'center',
//   },
//   acceptText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: '700',
//     marginLeft: 8,
//   },
// });


import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function OrdersScreen() {
  const [showOrder, setShowOrder] = useState(true);
  const navigation = useNavigation();

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowOrder(false);
  //   // }, 5000); // 5 seconds
  //   },)

  //   return () => clearTimeout(timer); // Cleanup on unmount
  // }, []);

  const handleAccept = () => {
    navigation.navigate('OrderDetailsScreen');
  };

  if (!showOrder) {
    return (
      <View style={styles.container}>
        <Text style={styles.noOrdersText}>No active orders available</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>1 Order</Text>

      <View style={styles.card}>
        <View style={styles.headerRow}>
          <Text style={styles.bikeLabel}>🏍️ Bike</Text>
          <Text style={styles.price}>
            ₹25 <Text style={styles.cash}>+ ₹12 (Cash)</Text>
          </Text>
        </View>

        <View style={styles.locationBlock}>
          <View style={styles.locationItem}>
            <View style={styles.locationMarker} />
            <Text style={styles.km}>1.4 Km</Text>
            <View style={styles.locationContent}>
              <Text style={styles.placeTitle}>Whitefield Sri Sathya Sai Hospital</Text>
              <Text style={styles.address}>Gate 1, Forum Shantiniketan Mall, NEXUS SHANTINIKETAN, Whitefield Main Road, Thigalarapalya</Text>
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.locationItem}>
            <Ionicons name="location" size={16} color="#E53935" style={styles.destinationIcon} />
            <Text style={styles.km}>2 Km</Text>
            <View style={styles.locationContent}>
              <Text style={styles.placeTitle}>Whitefield</Text>
              <Text style={styles.address}>Gopalan International School, Seetharampalya - Hoodi Road, Shivaji Nagar, Hoodi</Text>
            </View>
          </View>
        </View>

        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.rejectBtn} onPress={() => setShowOrder(false)}>
            <Ionicons name="close" size={20} color="#fff" />
            <Text style={styles.rejectText}>Reject</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.acceptBtn} onPress={handleAccept}>
            <Ionicons name="checkmark" size={20} color="#fff" />
            <Text style={styles.acceptText}>Accept</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F7FA',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    marginBottom: 16,
    color: '#2C3E50',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#1A237E',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 6,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ECEFF1',
  },
  bikeLabel: {
    backgroundColor: '#E3F2FD',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 12,
    fontWeight: '600',
    color: '#1976D2',
    fontSize: 14,
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2E7D32',
  },
  cash: {
    color: '#43A047',
    fontSize: 14,
  },
  locationBlock: {
    marginTop: 8,
  },
  locationItem: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  locationMarker: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#1976D2',
    marginRight: 12,
    marginTop: 6,
  },
  destinationIcon: {
    marginRight: 8,
    marginTop: 4,
  },
  km: {
    fontSize: 14,
    fontWeight: '600',
    color: '#546E7A',
    marginRight: 12,
    minWidth: 40,
  },
  locationContent: {
    flex: 1,
  },
  placeTitle: {
    fontWeight: '700',
    fontSize: 16,
    color: '#263238',
    marginBottom: 4,
  },
  address: {
    fontSize: 13,
    color: '#607D8B',
    lineHeight: 18,
  },
  divider: {
    height: 1,
    backgroundColor: '#ECEFF1',
    marginVertical: 12,
    marginLeft: 22,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  rejectBtn: {
    backgroundColor: '#E53935',
    borderRadius: 24,
    paddingVertical: 12,
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginRight: 12,
    justifyContent: 'center',
  },
  rejectText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    marginLeft: 8,
  },
  acceptBtn: {
    backgroundColor: '#43A047',
    borderRadius: 24,
    paddingVertical: 12,
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  acceptText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    marginLeft: 8,
  },
  noOrdersText: {
    fontSize: 18,
    color: '#607D8B',
    textAlign: 'center',
    fontWeight: '600',
  },
});








