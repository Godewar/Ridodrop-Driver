// import React from 'react';
// import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
// import { MaterialIcons, Ionicons, FontAwesome } from '@expo/vector-icons';

// export default function ProfileScreen() {
//   const driver = {
//     name: 'Lokesh Godewar',
//     phone: '+91 98765 43210',
//     email: 'lokesh@example.com',
//     vehicleType: 'SUV',
//     numberPlate: 'XYZ 1234',
//     avatar: 'https://i.pravatar.cc/150?img=3', // Placeholder profile image
//   };

//   const handleLogout = () => {
//     Alert.alert('Logout', 'Are you sure you want to log out?', [
//       { text: 'Cancel', style: 'cancel' },
//       { text: 'Logout', onPress: () => console.log('Logged out') },
//     ]);
//   };

//   return (
//     <ScrollView style={styles.container}>
//       <View style={styles.header}>
//         <Image source={{ uri: driver.avatar }} style={styles.avatar} />
//         <Text style={styles.name}>{driver.name}</Text>
//         <Text style={styles.phone}>{driver.phone}</Text>
//       </View>

//       <View style={styles.infoCard}>
//         <Text style={styles.sectionTitle}>Vehicle Info</Text>
//         <View style={styles.infoRow}>
//           <Ionicons name="car-outline" size={20} color="#666" />
//           <Text style={styles.infoText}>{driver.vehicleType}</Text>
//         </View>
//         <View style={styles.infoRow}>
//           <FontAwesome name="id-card" size={20} color="#666" />
//           <Text style={styles.infoText}>{driver.numberPlate}</Text>
//         </View>
//       </View>

//       <View style={styles.infoCard}>
//         <Text style={styles.sectionTitle}>Contact Info</Text>
//         <View style={styles.infoRow}>
//           <MaterialIcons name="email" size={20} color="#666" />
//           <Text style={styles.infoText}>{driver.email}</Text>
//         </View>
//       </View>

//       <View style={styles.actionList}>
//         <TouchableOpacity style={styles.actionItem}>
//           <Ionicons name="create-outline" size={22} color="#4c669f" />
//           <Text style={styles.actionText}>Edit Profile</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.actionItem}>
//           <Ionicons name="help-circle-outline" size={22} color="#4c669f" />
//           <Text style={styles.actionText}>Support</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.actionItem} onPress={handleLogout}>
//           <MaterialIcons name="logout" size={22} color="red" />
//           <Text style={[styles.actionText, { color: 'red' }]}>Logout</Text>
//         </TouchableOpacity>
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//   },
//   header: {
//     alignItems: 'center',
//     paddingVertical: 24,
//     backgroundColor: 'white',
//     marginBottom: 10,
//   },
//   avatar: {
//     width: 90,
//     height: 90,
//     borderRadius: 45,
//     marginBottom: 10,
//   },
//   name: {
//     fontSize: 22,
//     fontWeight: 'bold',
//   },
//   phone: {
//     fontSize: 16,
//     color: '#666',
//   },
//   infoCard: {
//     backgroundColor: 'white',
//     marginHorizontal: 16,
//     marginVertical: 10,
//     padding: 16,
//     borderRadius: 10,
//     elevation: 1,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: '600',
//     marginBottom: 10,
//   },
//   infoRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 8,
//   },
//   infoText: {
//     marginLeft: 10,
//     fontSize: 16,
//     color: '#333',
//   },
//   actionList: {
//     marginTop: 20,
//     paddingHorizontal: 16,
//   },
//   actionItem: {
//     backgroundColor: 'white',
//     padding: 16,
//     borderRadius: 10,
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   actionText: {
//     marginLeft: 12,
//     fontSize: 16,
//     color: '#4c669f',
//     fontWeight: '500',
//   },
// });

// import React from 'react';
// import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
// import { MaterialIcons, Ionicons, FontAwesome, Entypo } from '@expo/vector-icons';

// export default function ProfileScreen() {
//   const driver = {
//     name: 'Lokesh Godewar',
//     phone: '+91 98765 43210',
//     email: 'lokesh@example.com',
//     address: '123 Main Street, City, State - 400001',
//     vehicleType: 'SUV',
//     vehicleModel: 'Toyota Fortuner',
//     numberPlate: 'XYZ 1234',
//     insuranceExpiry: '15/05/2025',
//     bankName: 'State Bank of India',
//     accountNumber: 'XXXXXX7890',
//     ifscCode: 'SBIN0001234',
//     avatar: 'https://i.pravatar.cc/150?img=3',
//   };

//   const handleLogout = () => {
//     Alert.alert('Logout', 'Are you sure you want to log out?', [
//       { text: 'Cancel', style: 'cancel' },
//       { text: 'Logout', onPress: () => console.log('Logged out') },
//     ]);
//   };

//   const handleEdit = (section) => {
//     Alert.alert('Edit', `Edit ${section} details`, [
//       { text: 'Cancel', style: 'cancel' },
//       { text: 'Continue', onPress: () => console.log(`Editing ${section}`) },
//     ]);
//   };

//   return (
//     <ScrollView style={styles.container}>
//       <View style={styles.header}>
//         <Image source={{ uri: driver.avatar }} style={styles.avatar} />
//         <Text style={styles.name}>{driver.name}</Text>
//         <Text style={styles.phone}>{driver.phone}</Text>
//       </View>

//       {/* Personal Details Section */}
//       <View style={styles.infoCard}>
//         <View style={styles.sectionHeader}>
//           <Text style={styles.sectionTitle}>Personal Details</Text>
//           <TouchableOpacity onPress={() => handleEdit('personal')}>
//             <Ionicons name="create-outline" size={20} color="#4c669f" />
//           </TouchableOpacity>
//         </View>
//         <View style={styles.infoRow}>
//           <MaterialIcons name="email" size={20} color="#666" />
//           <Text style={styles.infoText}>{driver.email}</Text>
//         </View>
//         <View style={styles.infoRow}>
//           <Entypo name="location-pin" size={20} color="#666" />
//           <Text style={styles.infoText}>{driver.address}</Text>
//         </View>
//       </View>

//       {/* Vehicle Details Section */}
//       <View style={styles.infoCard}>
//         <View style={styles.sectionHeader}>
//           <Text style={styles.sectionTitle}>Vehicle Info</Text>
//           <TouchableOpacity onPress={() => handleEdit('vehicle')}>
//             <Ionicons name="create-outline" size={20} color="#4c669f" />
//           </TouchableOpacity>
//         </View>
//         <View style={styles.infoRow}>
//           <Ionicons name="car-outline" size={20} color="#666" />
//           <Text style={styles.infoText}>{driver.vehicleType} ({driver.vehicleModel})</Text>
//         </View>
//         <View style={styles.infoRow}>
//           <FontAwesome name="id-card" size={20} color="#666" />
//           <Text style={styles.infoText}>{driver.numberPlate}</Text>
//         </View>
//         <View style={styles.infoRow}>
//           <MaterialIcons name="date-range" size={20} color="#666" />
//           <Text style={styles.infoText}>Insurance expires on: {driver.insuranceExpiry}</Text>
//         </View>
//       </View>

//       {/* Bank Details Section */}
//       <View style={styles.infoCard}>
//         <View style={styles.sectionHeader}>
//           <Text style={styles.sectionTitle}>Bank Details</Text>
//           <TouchableOpacity onPress={() => handleEdit('bank')}>
//             <Ionicons name="create-outline" size={20} color="#4c669f" />
//           </TouchableOpacity>
//         </View>
//         <View style={styles.infoRow}>
//           <FontAwesome name="bank" size={20} color="#666" />
//           <Text style={styles.infoText}>{driver.bankName}</Text>
//         </View>
//         <View style={styles.infoRow}>
//           <MaterialIcons name="credit-card" size={20} color="#666" />
//           <Text style={styles.infoText}>Account: {driver.accountNumber}</Text>
//         </View>
//         <View style={styles.infoRow}>
//           <MaterialIcons name="code" size={20} color="#666" />
//           <Text style={styles.infoText}>IFSC: {driver.ifscCode}</Text>
//         </View>
//       </View>

//       {/* Action Items */}
//       <View style={styles.actionList}>
//         <TouchableOpacity 
//           style={styles.actionItem}
//           onPress={() => handleEdit('profile')}
//         >
//           <Ionicons name="create-outline" size={22} color="#4c669f" />
//           <Text style={styles.actionText}>Edit Profile</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.actionItem}>
//           <Ionicons name="document-text-outline" size={22} color="#4c669f" />
//           <Text style={styles.actionText}>Documents</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.actionItem}>
//           <Ionicons name="help-circle-outline" size={22} color="#4c669f" />
//           <Text style={styles.actionText}>Support</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.actionItem} onPress={handleLogout}>
//           <MaterialIcons name="logout" size={22} color="red" />
//           <Text style={[styles.actionText, { color: 'red' }]}>Logout</Text>
//         </TouchableOpacity>
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//   },
//   header: {
//     alignItems: 'center',
//     paddingVertical: 24,
//     backgroundColor: 'white',
//     marginBottom: 10,
//   },
//   avatar: {
//     width: 90,
//     height: 90,
//     borderRadius: 45,
//     marginBottom: 10,
//   },
//   name: {
//     fontSize: 22,
//     fontWeight: 'bold',
//   },
//   phone: {
//     fontSize: 16,
//     color: '#666',
//   },
//   infoCard: {
//     backgroundColor: 'white',
//     marginHorizontal: 16,
//     marginVertical: 10,
//     padding: 16,
//     borderRadius: 10,
//     elevation: 1,
//   },
//   sectionHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: '600',
//   },
//   infoRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 8,
//   },
//   infoText: {
//     marginLeft: 10,
//     fontSize: 16,
//     color: '#333',
//     flex: 1,
//   },
//   actionList: {
//     marginTop: 10,
//     paddingHorizontal: 16,
//     marginBottom: 20,
//   },
//   actionItem: {
//     backgroundColor: 'white',
//     padding: 16,
//     borderRadius: 10,
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   actionText: {
//     marginLeft: 12,
//     fontSize: 16,
//     color: '#4c669f',
//     fontWeight: '500',
//   },
// });

import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function ProfileScreen() {
  const [user, setUser] = useState({
    name: 'Lokesh Godewar',
    phone: '+91 98765 43210',
    gender: 'Male',
    dob: '10/02/1992',
    language: 'Hindi',
    emergencyContact: '+91 99999 88888',
    accountNumber: 'XXXXXX7890',
    ifscCode: 'SBIN0001234',
    bankName: 'State Bank of India',
    rating: 4.8,
    orders: 256,
    months: 14,
    vehicleType: 'SUV',
    rcNumber: 'RC123456',
    dlNumber: 'DL987654',
    aadhar: 'AADHAR1234',
    pan: 'PANAB1234C',
    avatar: 'https://i.pravatar.cc/100?img=12',
  });

  const handleEdit = (field) => {
    Alert.alert('Edit', `Edit ${field} not implemented in demo.`);
  };

  const handleLogout = () => {
    Alert.alert('Logout', 'Are you sure you want to logout?', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Logout', onPress: () => console.log('Logged out') },
    ]);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Profile Header */}
      <View style={styles.header}>
        <Image source={{ uri: user.avatar }} style={styles.avatar} />
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.phone}>{user.phone}</Text>
      </View>

      {/* Profile Info */}
      <Section title="Profile Info" onEdit={() => handleEdit('Profile Info')}>
        <Item label="Gender" value={user.gender} />
        <Item label="DOB" value={user.dob} />
        <Item label="Language" value={user.language} />
        <Item label="Emergency Contact" value={user.emergencyContact} />
      </Section>

      {/* Bank Details */}
      <Section title="Bank Details" onEdit={() => handleEdit('Bank Details')}>
        <Item label="A/c No." value={user.accountNumber} />
        <Item label="IFSC No." value={user.ifscCode} />
        <Item label="Bank Name" value={user.bankName} />
      </Section>

      {/* Performance */}
      <Section title="Performance">
        <Item label="Rating" value={user.rating} />
        <Item label="Orders" value={user.orders} />
        <Item label="Months" value={user.months} />
      </Section>

      {/* Vehicle Info */}
      <Section title="Vehicle Info" onEdit={() => handleEdit('Vehicle Info')}>
        <Item label="Type" value={user.vehicleType} />
        <Item label="RC" value={user.rcNumber} />
        <Item label="DL" value={user.dlNumber} />
        <Item label="Aadhaar" value={user.aadhar} />
        <Item label="PAN" value={user.pan} />
      </Section>

      {/* Language Selector */}
      <Section title="Language Selector" onEdit={() => handleEdit('Language')}>
        <Item label="Preferred Language" value={user.language} />
      </Section>

      {/* Logout */}
      <View style={styles.logoutWrapper}>
        <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
          <MaterialIcons name="logout" size={20} color="red" />
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const Section = ({ title, children, onEdit }) => (
  <View style={styles.section}>
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {onEdit && (
        <TouchableOpacity onPress={onEdit}>
          <Ionicons name="create-outline" size={20} color="#007bff" />
        </TouchableOpacity>
      )}
    </View>
    {children}
  </View>
);

const Item = ({ label, value }) => (
  <View style={styles.item}>
    <Text style={styles.label}>{label}:</Text>
    <Text style={styles.value}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    marginTop:15
  },
  header: {
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  phone: {
    fontSize: 14,
    color: '#666',
  },
  section: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 4,
  },
  label: {
    fontWeight: '500',
    color: '#333',
  },
  value: {
    color: '#555',
  },
  logoutWrapper: {
    alignItems: 'center',
    marginVertical: 20,
  },
  logoutBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  logoutText: {
    fontSize: 16,
    color: 'red',
  },
});
