import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const OrderFareCheckoutScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="checkmark-circle" size={28} color="#EC4D4A" />
        <Text style={styles.headerTitle}>Order Checkout</Text>
      </View>

      {/* Fare Card */}
      <View style={styles.card}>
        <Text style={styles.label}>Fare</Text>
        <Text style={styles.value}>₹350</Text>
        <View style={styles.divider} />
        <Text style={styles.label}>Total to be collect cash</Text>
        <Text style={styles.value}>₹350</Text>
      </View>

      {/* Done Button */}
      <TouchableOpacity style={styles.doneButton} onPress={() => navigation.navigate('OrderDetailsScreen')}>
        <Text style={styles.doneButtonText}>Done</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#EC4D4A',
    marginLeft: 12,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 28,
    alignItems: 'center',
    marginBottom: 40,
    width: '100%',
    shadowColor: '#EC4D4A',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  label: {
    fontSize: 16,
    color: '#EC4D4A',
    fontWeight: '600',
    marginBottom: 6,
  },
  value: {
    fontSize: 28,
    color: '#1f2937',
    fontWeight: '700',
    marginBottom: 16,
  },
  divider: {
    height: 1,
    backgroundColor: '#eee',
    width: '80%',
    marginVertical: 12,
  },
  doneButton: {
    backgroundColor: '#EC4D4A',
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 60,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
  },
  doneButtonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 18,
  },
});

export default OrderFareCheckoutScreen; 