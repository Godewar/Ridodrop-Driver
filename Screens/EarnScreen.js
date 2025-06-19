// import React from 'react';
// import { View, Text, StyleSheet, FlatList } from 'react-native';
// import { MaterialIcons, Ionicons } from '@expo/vector-icons';

// const weeklyEarnings = [
//   { id: '1', day: 'Monday', amount: 520 },
//   { id: '2', day: 'Tuesday', amount: 450 },
//   { id: '3', day: 'Wednesday', amount: 620 },
//   { id: '4', day: 'Thursday', amount: 700 },
//   { id: '5', day: 'Friday', amount: 810 },
//   { id: '6', day: 'Saturday', amount: 920 },
//   { id: '7', day: 'Sunday', amount: 580 },
// ];

// export default function EarnScreen() {
//   const totalEarnings = weeklyEarnings.reduce((sum, item) => sum + item.amount, 0);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Earnings Summary</Text>

//       <View style={styles.card}>
//         <Text style={styles.totalLabel}>This Week</Text>
//         <Text style={styles.totalAmount}>₹{totalEarnings}</Text>
//       </View>

//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>Daily Earnings</Text>
//         <FlatList
//           data={weeklyEarnings}
//           keyExtractor={item => item.id}
//           renderItem={({ item }) => (
//             <View style={styles.earningItem}>
//               <Text style={styles.day}>{item.day}</Text>
//               <Text style={styles.amount}>₹{item.amount}</Text>
//             </View>
//           )}
//         />
//       </View>

//       <View style={styles.summaryRow}>
//         <View style={styles.summaryBox}>
//           <Ionicons name="checkmark-done-circle" size={28} color="#4caf50" />
//           <Text style={styles.summaryLabel}>Completed</Text>
//           <Text style={styles.summaryValue}>42 Orders</Text>
//         </View>
//         <View style={styles.summaryBox}>
//           <MaterialIcons name="emoji-events" size={28} color="#ff9800" />
//           <Text style={styles.summaryLabel}>Bonuses</Text>
//           <Text style={styles.summaryValue}>₹850</Text>
//         </View>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f4f4f4',
//     padding: 16,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: '700',
//     marginBottom: 16,
//     textAlign: 'center',
//     color: '#333',
//   },
//   card: {
//     backgroundColor: '#4caf50',
//     borderRadius: 12,
//     padding: 20,
//     alignItems: 'center',
//     marginBottom: 24,
//   },
//   totalLabel: {
//     color: 'white',
//     fontSize: 16,
//   },
//   totalAmount: {
//     fontSize: 32,
//     fontWeight: 'bold',
//     color: 'white',
//   },
//   section: {
//     marginBottom: 24,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: '600',
//     marginBottom: 8,
//     color: '#555',
//   },
//   earningItem: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     paddingVertical: 10,
//     borderBottomColor: '#ddd',
//     borderBottomWidth: 1,
//   },
//   day: {
//     fontSize: 16,
//     color: '#333',
//   },
//   amount: {
//     fontSize: 16,
//     fontWeight: '500',
//     color: '#333',
//   },
//   summaryRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   summaryBox: {
//     flex: 1,
//     backgroundColor: '#fff',
//     padding: 16,
//     marginHorizontal: 4,
//     borderRadius: 12,
//     alignItems: 'center',
//     elevation: 3,
//   },
//   summaryLabel: {
//     marginTop: 8,
//     fontSize: 14,
//     color: '#666',
//   },
//   summaryValue: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#333',
//   },
// });


import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';

const weeklyEarnings = [
  { id: '1', day: 'Mon', amount: 520 },
  { id: '2', day: 'Tue', amount: 450 },
  { id: '3', day: 'Wed', amount: 620 },
  { id: '4', day: 'Thu', amount: 700 },
  { id: '5', day: 'Fri', amount: 810 },
  { id: '6', day: 'Sat', amount: 920 },
  { id: '7', day: 'Sun', amount: 580 },
];

const monthlyEarnings = [
  { id: '1', week: 'Week 1', amount: 3100 },
  { id: '2', week: 'Week 2', amount: 2750 },
  { id: '3', week: 'Week 3', amount: 2980 },
  { id: '4', week: 'Week 4', amount: 3320 },
];

export default function EarnScreen() {
  const [view, setView] = useState('weekly');

  const currentData = view === 'weekly' ? weeklyEarnings : monthlyEarnings;
  const totalEarnings = currentData.reduce((sum, item) => sum + item.amount, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Earnings</Text>

      {/* Toggle Buttons */}
      <View style={styles.toggleRow}>
        <TouchableOpacity
          style={[styles.toggleButton, view === 'weekly' && styles.activeButton]}
          onPress={() => setView('weekly')}
        >
          <Text style={[styles.toggleText, view === 'weekly' && styles.activeText]}>Weekly</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.toggleButton, view === 'monthly' && styles.activeButton]}
          onPress={() => setView('monthly')}
        >
          <Text style={[styles.toggleText, view === 'monthly' && styles.activeText]}>Monthly</Text>
        </TouchableOpacity>
      </View>

      {/* Total Card */}
      <View style={styles.card}>
        <Text style={styles.totalLabel}>Total {view === 'weekly' ? 'This Week' : 'This Month'}</Text>
        <Text style={styles.totalAmount}>₹{totalEarnings}</Text>
      </View>

      {/* Earnings List */}
      <FlatList
        data={currentData}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.earningItem}>
            <Text style={styles.day}>{view === 'weekly' ? item.day : item.week}</Text>
            <Text style={styles.amount}>₹{item.amount}</Text>
          </View>
        )}
        ListHeaderComponent={<Text style={styles.sectionTitle}>{view === 'weekly' ? 'Daily Earnings' : 'Weekly Breakdown'}</Text>}
      />

      {/* Summary */}
      <View style={styles.summaryRow}>
        <View style={styles.summaryBox}>
          <Ionicons name="checkmark-done-circle" size={28} color="#4caf50" />
          <Text style={styles.summaryLabel}>Completed</Text>
          <Text style={styles.summaryValue}>42 Orders</Text>
        </View>
        <View style={styles.summaryBox}>
          <MaterialIcons name="emoji-events" size={28} color="#ff9800" />
          <Text style={styles.summaryLabel}>Bonuses</Text>
          <Text style={styles.summaryValue}>₹850</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    padding: 16,
    marginTop:15
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 16,
    textAlign: 'center',
    color: '#333',
  },
  toggleRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 16,
  },
  toggleButton: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    backgroundColor: '#ddd',
    marginHorizontal: 8,
    borderRadius: 20,
  },
  toggleText: {
    fontSize: 14,
    color: '#333',
  },
  activeButton: {
    backgroundColor: '#4caf50',
  },
  activeText: {
    color: 'white',
    fontWeight: '600',
  },
  card: {
    backgroundColor: '#4caf50',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  totalLabel: {
    color: 'white',
    fontSize: 16,
  },
  totalAmount: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
    color: '#555',
  },
  earningItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },
  day: {
    fontSize: 16,
    color: '#333',
  },
  amount: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
  },
  summaryBox: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
    marginHorizontal: 4,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 3,
  },
  summaryLabel: {
    marginTop: 8,
    fontSize: 14,
    color: '#666',
  },
  summaryValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
});
