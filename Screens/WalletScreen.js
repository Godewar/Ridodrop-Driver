// // import React from 'react';
// // import {
// //   View,
// //   Text,
// //   StyleSheet,
// //   Image,
// //   ScrollView,
// //   TouchableOpacity,
// // } from 'react-native';

// // const WalletScreen = () => {
// //   return (
// //     <ScrollView style={styles.container}>
// //       {/* Header Card */}
// //       <View style={styles.card}>
// //         <View style={styles.cardContent}>
// //           <View>
// //             <Text style={styles.coinCount}>0</Text>
// //             <Text style={styles.coinLabel}>Available Balance</Text>
// //           </View>
// //           <Image
// //             source={require('../assets/coin.png')}
// //             style={styles.coinImage}
// //           />
// //         </View>
// //         <TouchableOpacity style={styles.transactionButton}>
// //           <Text style={styles.transactionText}>Balance Transaction History</Text>
// //           <Text style={styles.arrow}>→</Text>
// //         </TouchableOpacity>
// //       </View>

// //       {/* Use Coins Section */}
// //       <Text style={styles.sectionTitle}>Use Your Balance</Text>
// //       <View style={styles.grid}>
// //         <TouchableOpacity style={styles.optionBox}>
// //           <Image
// //             source={require('../assets/wallet.png')}
// //             style={styles.icon}
// //           />
// //           <Text style={styles.optionTitle}>Transfer </Text>
// //           <Text style={styles.optionSubtitle}>Your Earnings</Text>
// //         </TouchableOpacity>

// //         <TouchableOpacity style={styles.optionBox}>
// //           <View style={styles.newBadge}>
          
// //           </View>
// //           <Image
// //             source={require('../assets/bank.png')}
// //             style={styles.icon}
// //           />
// //           <Text style={styles.optionTitle}>Transfer in</Text>
// //           <Text style={styles.optionSubtitle}>Bank Account </Text>
// //         </TouchableOpacity>
// //       </View>

      
    
     
// //     </ScrollView>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     backgroundColor: '#fff',
// //     padding: 16,
// //   },
// //   card: {
// //     backgroundColor: '#383766',
// //     borderRadius: 12,
// //     padding: 16,
// //     marginBottom: 12,
// //   },
// //   cardContent: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //   },
// //   coinCount: {
// //     color: '#fff',
// //     fontSize: 32,
// //     fontWeight: 'bold',
// //   },
// //   coinLabel: {
// //     color: '#e5e5e5',
// //     marginTop: 4,
// //     fontSize: 16,
// //   },
// //   coinImage: {
// //     width: 60,
// //     height: 60,
// //     resizeMode: 'contain',
// //   },
// //   transactionButton: {
// //     marginTop: 12,
// //     backgroundColor: '#fff',
// //     borderRadius: 8,
// //     padding: 12,
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //   },
// //   transactionText: {
// //     fontSize: 16,
// //     color: '#333',
// //   },
// //   arrow: {
// //     fontSize: 18,
// //     color: '#666',
// //   },
// //   sectionTitle: {
// //     fontSize: 18,
// //     fontWeight: '600',
// //     marginVertical: 12,
// //     color: '#111',
// //   },
// //   grid: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     gap: 8,
// //   },
// //   optionBox: {
// //     backgroundColor: '#F9F9F9',
// //     borderRadius: 12,
// //     padding: 12,
// //     flex: 1,
// //     margin: 4,
// //     position: 'relative',
// //     alignItems: 'center',
// //   },
// //   newBadge: {
// //     position: 'absolute',
// //     top: 8,
// //     left: 8,
// //     backgroundColor: '#d1fae5',
// //     borderRadius: 8,
// //     paddingHorizontal: 6,
// //     paddingVertical: 2,
// //   },
// //   newText: {
// //     fontSize: 10,
// //     color: '#065f46',
// //     fontWeight: 'bold',
// //   },
// //   icon: {
// //     width: 50,
// //     height: 50,
// //     marginVertical: 8,
// //   },
// //   optionTitle: {
// //     color: '#555',
// //     fontSize: 14,
// //   },
// //   optionSubtitle: {
// //     color: '#1d4ed8',
// //     fontWeight: '600',
// //   },
// //   infoTitle: {
// //     fontSize: 14,
// //     fontWeight: '600',
// //     color: '#111',
// //     textAlign: 'center',
// //     marginTop: 8,
// //   },
// // });

// // export default WalletScreen;



// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   FlatList,
//   TouchableOpacity,
//   Modal,
//   Pressable,
//   Dimensions,
//   ScrollView,
// } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';

// const { width } = Dimensions.get('window');

// const transactions = [
//   { id: '1', title: 'Ride Payment', amount: -120 },
//   { id: '2', title: 'Top-up', amount: 500 },
//   { id: '3', title: 'Referral Bonus', amount: 100 },
// ];

// const WalletScreen = () => {
//   const [balance, setBalance] = useState(480);
//   const [isModalVisible, setModalVisible] = useState(false);

//   const handleTopUp = (amount) => {
//     setBalance((prev) => prev + amount);
//     transactions.unshift({
//       id: (transactions.length + 1).toString(),
//       title: 'Top-up',
//       amount: amount,
//     });
//     setModalVisible(false);
//   };

//   return (
//     <ScrollView style={styles.container}>
//         <Text style={styles.headerTitle}>Wallet</Text>

//       <View style={styles.card}>
//         <Text style={styles.balanceLabel}>Available Balance</Text>
//         <Text style={styles.balance}>₹{balance}</Text>
//         <TouchableOpacity style={styles.topUpButton} onPress={() => setModalVisible(true)}>
//           <Ionicons name="add-circle-outline" size={20} color="white" />
//           <Text style={styles.topUpText}>Top Up</Text>
//         </TouchableOpacity>
//       </View>

//       <Text style={styles.transactionHeader}>Recent Transactions</Text>
//       <FlatList
//         data={transactions}
//         scrollEnabled={false}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <View style={styles.transactionItem}>
//             <Ionicons
//               name={item.amount > 0 ? 'arrow-down-circle' : 'arrow-up-circle'}
//               size={24}
//               color={item.amount > 0 ? 'green' : '#EC4D4A'}
//               style={{ marginRight: 10 }}
//             />
//             <View style={{ flex: 1 }}>
//               <Text style={styles.transactionTitle}>{item.title}</Text>
//               <Text style={styles.transactionDate}>20 May 2025</Text>
//             </View>
//             <Text
//               style={[
//                 styles.transactionAmount,
//                 { color: item.amount > 0 ? 'green' : '#EC4D4A' },
//               ]}
//             >
//               {item.amount > 0 ? '+' : ''}
//               ₹{item.amount}
//             </Text>
//           </View>
//         )}
//       />

//       {/* Modal for Top-Up Options */}
//       <Modal visible={isModalVisible} animationType="slide" transparent>
//         <View style={styles.modalOverlay}>
//           <View style={styles.modalContainer}>
//             <Text style={styles.modalTitle}>Choose Top-Up Amount</Text>
//             {[200, 300, 500].map((amount) => (
//               <Pressable
//                 key={amount}
//                 style={styles.amountButton}
//                 onPress={() => handleTopUp(amount)}
//               >
//                 <Text style={styles.amountText}>₹{amount}</Text>
//               </Pressable>
//             ))}
//             <Pressable style={styles.closeButton} onPress={() => setModalVisible(false)}>
//               <Text style={styles.closeText}>Cancel</Text>
//             </Pressable>
//           </View>
//         </View>
//       </Modal>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#f9f9f9', padding: 20 , marginTop: 10},
//   headerTitle: { fontSize: 20, fontWeight: '600', marginBottom: 20, color: '#222' },
//   card: {
//     backgroundColor: '#ffffff',
//     padding: 25,
//     borderRadius: 16,
//     shadowColor: '#000',
//     shadowOpacity: 0.08,
//     shadowRadius: 10,
//     elevation: 4,
//     marginBottom: 30,
//     alignItems: 'center',
//   },
//   balanceLabel: { fontSize: 16, color: '#888' },
//   balance: { fontSize: 36, fontWeight: 'bold', marginVertical: 10, color: '#333' },
//   topUpButton: {
//     flexDirection: 'row',
//     backgroundColor: '#EC4D4A',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 10,
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   topUpText: { color: '#fff', fontSize: 16, marginLeft: 8 },
//   transactionHeader: { fontSize: 20, fontWeight: '600', marginBottom: 10, color: '#444' },
//   transactionItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     borderRadius: 12,
//     padding: 16,
//     marginBottom: 10,
//     shadowColor: '#000',
//     shadowOpacity: 0.03,
//     shadowRadius: 5,
//     elevation: 2,
//   },
//   transactionTitle: { fontSize: 16, fontWeight: '500', color: '#333' },
//   transactionDate: { fontSize: 12, color: '#999' },
//   transactionAmount: { fontSize: 16, fontWeight: '600' },

//   modalOverlay: {
//     flex: 1,
//     backgroundColor: 'rgba(0,0,0,0.4)',
//     justifyContent: 'flex-end',
//   },
//   modalContainer: {
//     backgroundColor: '#fff',
//     padding: 25,
//     borderTopLeftRadius: 20,
//     borderTopRightRadius: 20,
//   },
//   modalTitle: {
//     fontSize: 20,
//     fontWeight: '700',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   amountButton: {
//     backgroundColor: '#f0f0f0',
//     paddingVertical: 14,
//     borderRadius: 12,
//     alignItems: 'center',
//     marginBottom: 12,
//   },
//   amountText: { fontSize: 18, fontWeight: '600', color: '#333' },
//   closeButton: {
//     paddingVertical: 12,
//     alignItems: 'center',
//   },
//   closeText: { color: '#EC4D4A', fontSize: 16 },
// });

// export default WalletScreen;


import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Animated,
  Easing,
  Dimensions,
  Modal,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const { width, height } = Dimensions.get('window');
const FONT_SIZE = width * 0.04;
const isSmallDevice = width < 350;

const WalletScreen = () => {
  const [amount, setAmount] = useState('');
  const [balance, setBalance] = useState(480);
  const [popupMessage, setPopupMessage] = useState('');
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const popupAnim = useState(new Animated.Value(0))[0];

  // Sample transactions for demonstration
  const sampleTransactions = [
    {
      id: 'TXN12345678',
      amount: 200,
      type: 'credit',
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      timestamp: new Date().getTime()
    },
    {
      id: 'TXN87654321',
      amount: 400,
      type: 'credit',
      date: new Date(Date.now() - 86400000).toLocaleDateString(), // Yesterday
      time: new Date(Date.now() - 86400000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      timestamp: new Date(Date.now() - 86400000).getTime()
    },
    {
      id: 'TXN19283746',
      amount: 600,
      type: 'credit',
      date: new Date(Date.now() - 604800000).toLocaleDateString(), // 1 week ago
      time: new Date(Date.now() - 604800000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      timestamp: new Date(Date.now() - 604800000).getTime()
    }
  ];

  // Initialize with sample transactions if empty
  if (transactions.length === 0) {
    setTransactions(sampleTransactions);
  }

  const quickAdd = (value) => {
    setAmount((prev) => String(Number(prev || 0) + value));
  };

  const showPopup = (message) => {
    setPopupMessage(message);
    setShowSuccessPopup(true);

    Animated.sequence([
      Animated.timing(popupAnim, {
        toValue: 1,
        duration: 300,
        easing: Easing.out(Easing.quad),
        useNativeDriver: true,
      }),
      Animated.delay(1500),
      Animated.timing(popupAnim, {
        toValue: 0,
        duration: 300,
        easing: Easing.in(Easing.quad),
        useNativeDriver: true,
      }),
    ]).start(() => setShowSuccessPopup(false));
  };

  const generateTransactionId = () => {
    return 'TXN' + Math.random().toString(36).substr(2, 9).toUpperCase();
  };

  const handleAddFunds = () => {
    const fund = Number(amount);
    if (!fund || fund <= 0) return;

    const newBalance = balance + fund;
    setBalance(newBalance);
    
    // Create new transaction
    const now = new Date();
    const newTransaction = {
      id: generateTransactionId(),
      amount: fund,
      type: 'credit',
      date: now.toLocaleDateString(),
      time: now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      timestamp: now.getTime()
    };
    
    setTransactions(prev => [newTransaction, ...prev]);
    showPopup(`₹${fund} added successfully!`);
    setAmount('');
  };

  const popupTranslateY = popupAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [100, 0],
  });

  const formatAmount = (amount) => {
    return amount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const filterTransactions = () => {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const oneWeekAgo = new Date(now.getTime() - 604800000);
    const oneMonthAgo = new Date(now.getFullYear(), now.getMonth() - 1, now.getDate());

    switch (activeFilter) {
      case 'today':
        return transactions.filter(txn => new Date(txn.timestamp) >= today);
      case 'weekly':
        return transactions.filter(txn => new Date(txn.timestamp) >= oneWeekAgo);
      case 'monthly':
        return transactions.filter(txn => new Date(txn.timestamp) >= oneMonthAgo);
      default:
        return transactions;
    }
  };

  const applyFilter = (filterType) => {
    setActiveFilter(filterType);
    setShowFilterModal(false);
  };

  const resetFilter = () => {
    setActiveFilter('all');
    setShowFilterModal(false);
  };

  return (
    <View style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity>
            <Icon name="arrow-back" size={width * 0.06} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Wallet</Text>
          <View style={{ width: width * 0.06 }} /> {/* Spacer for alignment */}
        </View>

        {/* Balance Card */}
        <View style={styles.balanceCard}>
          <View style={styles.balanceRow}>
            <Text style={styles.balanceLabel}>Available Balance</Text>
            <Icon name="info-outline" size={width * 0.04} color="#888" />
          </View>
          <Text style={styles.balanceAmount}>₹{formatAmount(balance)}</Text>
        </View>

        {/* Input Amount */}
        <Text style={styles.label}>Add Amount</Text>
        <TextInput
          value={amount}
          onChangeText={setAmount}
          keyboardType="numeric"
          placeholder="Enter amount"
          style={styles.input}
        />

        {/* Quick Add */}
        {/* <Text style={styles.quickAddLabel}>Quick Add</Text>
        <View style={styles.quickAddContainer}>
          {[200, 400, 600].map((val) => (
            <TouchableOpacity
              key={val}
              style={styles.quickAddButton}
              onPress={() => quickAdd(val)}
            >
              <Text style={styles.quickAddText}>₹{val}</Text>
            </TouchableOpacity>
          ))}
        </View> */}

          <Text style={styles.quickAddLabel}>Quick Add</Text>
        <View style={styles.quickAddContainer}>
          {[200, 400, 600].map((val) => (
            <TouchableOpacity
              key={val}
              style={[styles.quickAddButton, { marginHorizontal: width * 0.01 }]}
              onPress={() => quickAdd(val)}
            >
              <Text style={styles.quickAddText}>₹{val}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Add Button */}
        <TouchableOpacity style={styles.addButton} onPress={handleAddFunds}>
          <Text style={styles.addButtonText}>Add funds</Text>
        </TouchableOpacity>

        {/* Transaction History Header with Filter Button */}
        <View style={styles.transactionHeader}>
          <Text style={[styles.label, { marginTop: height * 0.03 }]}>Transaction History</Text>
          <TouchableOpacity 
            style={styles.filterButton}
            onPress={() => setShowFilterModal(true)}
          >
            <Icon name="filter-list" size={width * 0.05} color="#EC4D4A" />
            <Text style={styles.filterButtonText}>Filter</Text>
          </TouchableOpacity>
        </View>
        
        {filterTransactions().length === 0 ? (
          <View style={styles.noTransactions}>
            <Text style={styles.noTransactionsText}>No transactions found</Text>
          </View>
        ) : (
          <View style={styles.transactionList}>
            {filterTransactions().map((txn) => (
              <View key={txn.id} style={styles.transactionCard}>
                <View style={styles.transactionCardHeader}>
                  <View style={styles.transactionTypeContainer}>
                    <Icon name="account-balance-wallet" size={width * 0.05} color="#4BB543" style={styles.walletIcon} />
                    <Text style={styles.transactionType}>Money added to wallet</Text>
                  </View>
                  <Text style={styles.transactionAmount}>+₹{formatAmount(txn.amount)}</Text>
                </View>
                <View style={styles.transactionCardBody}>
                  <Text style={styles.transactionId}>Transaction ID: {txn.id}</Text>
                  <Text style={styles.transactionDateTime}>
                    {txn.date} • {txn.time}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        )}

        {/* Success Popup */}
        {showSuccessPopup && (
          <Animated.View
            style={[
              styles.popup,
              { transform: [{ translateY: popupTranslateY }] },
            ]}
          >
            <Text style={styles.popupText}>{popupMessage}</Text>
          </Animated.View>
        )}
      </ScrollView>

      {/* Filter Modal */}
      {/* <Modal
        visible={showFilterModal}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setShowFilterModal(false)}
      >
        <TouchableOpacity 
          style={styles.modalOverlay} 
          activeOpacity={1} 
          onPress={() => setShowFilterModal(false)}
        >
          <View style={styles.modalContent}>
            <TouchableOpacity 
              style={styles.filterOption}
              onPress={() => applyFilter('today')}
            >
              <Text style={styles.filterOptionText}>Today</Text>
              {activeFilter === 'today' && <Icon name="check" size={width * 0.05} color="#4BB543" />}
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.filterOption}
              onPress={() => applyFilter('weekly')}
            >
              <Text style={styles.filterOptionText}>Weekly</Text>
              {activeFilter === 'weekly' && <Icon name="check" size={width * 0.05} color="#4BB543" />}
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.filterOption}
              onPress={() => applyFilter('monthly')}
            >
              <Text style={styles.filterOptionText}>Monthly</Text>
              {activeFilter === 'monthly' && <Icon name="check" size={width * 0.05} color="#4BB543" />}
            </TouchableOpacity>
            
          </View>
        </TouchableOpacity>
      </Modal> */}
      {/* Filter Modal - Attractive Design */}
<Modal
  visible={showFilterModal}
  transparent={true}
  animationType="fade"
  onRequestClose={() => setShowFilterModal(false)}
>
  <TouchableOpacity 
    style={styles.modalOverlay} 
    activeOpacity={1} 
    onPress={() => setShowFilterModal(false)}
  >
    <Animated.View style={[styles.modalContent, {
      transform: [{
        translateY: showFilterModal ? 
          new Animated.Value(0) : 
          new Animated.Value(height * 0.5)
      }]
    }]}>
      <View style={styles.modalHeader}>
        <Text style={styles.modalTitle}>Filter Transactions</Text>
        <TouchableOpacity onPress={() => setShowFilterModal(false)}>
          <Icon name="close" size={width * 0.06} color="#666" />
        </TouchableOpacity>
      </View>
      
      <View style={styles.filterOptionsContainer}>
        <TouchableOpacity 
          style={[
            styles.filterOptionCard,
            activeFilter === 'today' && styles.activeFilterOption
          ]}
          onPress={() => applyFilter('today')}
        >
          <Icon 
            name="today" 
            size={width * 0.06} 
            color={activeFilter === 'today' ? '#EC4D4A' : '#666'} 
          />
          <Text style={[
            styles.filterOptionText,
            activeFilter === 'today' && styles.activeFilterText
          ]}>Today</Text>
          {activeFilter === 'today' && (
            <View style={styles.activeIndicator} />
          )}
        </TouchableOpacity>

        <TouchableOpacity 
          style={[
            styles.filterOptionCard,
            activeFilter === 'weekly' && styles.activeFilterOption
          ]}
          onPress={() => applyFilter('weekly')}
        >
          <Icon 
            name="date-range" 
            size={width * 0.06} 
            color={activeFilter === 'weekly' ? '#EC4D4A' : '#666'} 
          />
          <Text style={[
            styles.filterOptionText,
            activeFilter === 'weekly' && styles.activeFilterText
          ]}>This Week</Text>
          {activeFilter === 'weekly' && (
            <View style={styles.activeIndicator} />
          )}
        </TouchableOpacity>

        <TouchableOpacity 
          style={[
            styles.filterOptionCard,
            activeFilter === 'monthly' && styles.activeFilterOption
          ]}
          onPress={() => applyFilter('monthly')}
        >
          <Icon 
            name="calendar-today" 
            size={width * 0.06} 
            color={activeFilter === 'monthly' ? '#EC4D4A' : '#666'} 
          />
          <Text style={[
            styles.filterOptionText,
            activeFilter === 'monthly' && styles.activeFilterText
          ]}>This Month</Text>
          {activeFilter === 'monthly' && (
            <View style={styles.activeIndicator} />
          )}
        </TouchableOpacity>

        {/* <TouchableOpacity 
          style={[
            styles.filterOptionCard,
            activeFilter === 'all' && styles.activeFilterOption
          ]}
          onPress={resetFilter}
        >
          <Icon 
            name="autorenew" 
            size={width * 0.06} 
            color={activeFilter === 'all' ? '#EC4D4A' : '#666'} 
          />
          <Text style={[
            styles.filterOptionText,
            activeFilter === 'all' && styles.activeFilterText
          ]}>Reset Filter</Text>
          {activeFilter === 'all' && (
            <View style={styles.activeIndicator} />
          )}
        </TouchableOpacity> */}
      </View>

      <TouchableOpacity 
        style={styles.applyButton}
        onPress={() => setShowFilterModal(false)}
      >
        <Text style={styles.applyButtonText}>Apply Filter</Text>
      </TouchableOpacity>
    </Animated.View>
  </TouchableOpacity>
</Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    padding: width * 0.05,
    backgroundColor: '#fff',
    flexGrow: 1,
    paddingBottom: height * 0.05,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: height * 0.02,
    marginTop: height * 0.02,
  },
  headerTitle: {
    fontSize: FONT_SIZE + 4,
    fontWeight: 'bold',
  },
  balanceCard: {
    backgroundColor: '#fff4f0',
    borderRadius: width * 0.03,
    padding: width * 0.04,
    marginBottom: height * 0.02,
    elevation: 2,
  },
  balanceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  balanceLabel: {
    fontSize: FONT_SIZE - 1,
    color: '#666',
  },
  balanceAmount: {
    fontSize: FONT_SIZE + 8,
    fontWeight: 'bold',
    color: '#EC4D4A',
    marginTop: height * 0.005,
  },
  label: {
    fontSize: FONT_SIZE - 1,
    color: '#444',
    marginBottom: height * 0.01,
    fontWeight: '500',
  },
  input: {
    borderWidth: 1,
    borderColor: '#EC4D4A',
    borderRadius: width * 0.02,
    padding: width * 0.03,
    fontSize: FONT_SIZE,
    marginBottom: height * 0.02,
  },
  quickAddLabel: {
    fontSize: FONT_SIZE,
    color: '#EC4D4A',
    marginBottom: height * 0.01,
    fontWeight: '500',
  },
  quickAddContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: height * 0.03,
    paddingHorizontal: width * 0.01, // Reduced padding
  },
  quickAddButton: {
    borderWidth: 1,
    borderColor: '#eee',
    paddingVertical: height * 0.01,
    paddingHorizontal: width * 0.03, // Reduced padding
    borderRadius: width * 0.02,
    backgroundColor: '#fff',
    elevation: 2,
    flex: 1, // Equal width for all buttons
    marginHorizontal: width * 0.005, // Reduced margin
    alignItems: 'center',
  },
  quickAddText: {
    fontSize: FONT_SIZE,
    color: '#000',
  },
  addButton: {
    backgroundColor: '#EC4D4A',
    paddingVertical: height * 0.02,
    borderRadius: width * 0.02,
    alignItems: 'center',
    elevation: 2,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: FONT_SIZE,
  },
  popup: {
    position: 'absolute',
    bottom: height * 0.05,
    left: width * 0.1,
    right: width * 0.1,
    padding: width * 0.04,
    backgroundColor: '#4BB543',
    borderRadius: width * 0.02,
    alignItems: 'center',
    elevation: 6,
  },
  popupText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: FONT_SIZE,
  },
  noTransactions: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: height * 0.05,
  },
  noTransactionsText: {
    fontSize: FONT_SIZE,
    color: '#888',
  },
  transactionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: height * 0.03,
    marginBottom: height * 0.01,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: width * 0.02,
  },
  filterButtonText: {
    fontSize: FONT_SIZE - 1,
    color: '#EC4D4A',
    marginLeft: width * 0.01,
  },
  transactionList: {
    marginTop: height * 0.01,
  },
  transactionCard: {
    backgroundColor: '#fff',
    borderRadius: width * 0.02,
    padding: width * 0.03,
    marginBottom: height * 0.01,
    elevation: 1,
    borderLeftWidth: 2,
    borderLeftColor: '#4BB543',
  },
  transactionCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: height * 0.005,
  },
  transactionTypeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  walletIcon: {
    marginRight: width * 0.02,
  },
  transactionType: {
    fontSize: FONT_SIZE - 1,
    fontWeight: '500',
    color: '#333',
  },
  transactionAmount: {
    fontSize: FONT_SIZE - 1,
    fontWeight: 'bold',
    color: '#4BB543',
  },
  transactionCardBody: {
    marginTop: height * 0.003,
  },
  transactionId: {
    fontSize: FONT_SIZE - 2,
    color: '#666',
    marginBottom: height * 0.003,
  },
  transactionDateTime: {
    fontSize: FONT_SIZE - 2,
    color: '#888',
  },
 modalOverlay: {
  flex: 1,
  backgroundColor: 'rgba(0,0,0,0.5)',
  justifyContent: 'flex-end',
},
modalContent: {
  backgroundColor: '#fff',
  borderTopLeftRadius: width * 0.06,
  borderTopRightRadius: width * 0.06,
  padding: width * 0.05,
  paddingBottom: height * 0.03,
  maxHeight: height * 0.5,
},
modalHeader: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: height * 0.03,
},
modalTitle: {
  fontSize: FONT_SIZE + 2,
  fontWeight: 'bold',
  color: '#333',
},
filterOptionsContainer: {
  marginBottom: height * 0.03,
},
filterOptionCard: {
  flexDirection: 'row',
  alignItems: 'center',
  paddingVertical: height * 0.02,
  paddingHorizontal: width * 0.04,
  borderRadius: width * 0.02,
  backgroundColor: '#f9f9f9',
  marginBottom: height * 0.015,
  borderWidth: 1,
  borderColor: '#eee',
},
activeFilterOption: {
  backgroundColor: '#fff4f0',
  borderColor: '#EC4D4A',
},
filterOptionText: {
  fontSize: FONT_SIZE,
  color: '#666',
  marginLeft: width * 0.04,
  flex: 1,
},
activeFilterText: {
  color: '#EC4D4A',
  fontWeight: '500',
},
activeIndicator: {
  width: width * 0.04,
  height: width * 0.04,
  borderRadius: width * 0.02,
  backgroundColor: '#EC4D4A',
},
applyButton: {
  backgroundColor: '#EC4D4A',
  paddingVertical: height * 0.02,
  borderRadius: width * 0.02,
  alignItems: 'center',
  elevation: 2,
},
applyButtonText: {
  color: '#fff',
  fontWeight: 'bold',
  fontSize: FONT_SIZE,
},
});

export default WalletScreen;