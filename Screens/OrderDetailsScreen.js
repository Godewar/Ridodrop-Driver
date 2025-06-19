import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Platform, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const reasons = [
  'Customer not available',
  'Wrong address',
  'Vehicle issue',
  'Personal emergency',
  'Order assigned by mistake',
  'Other',
];

const OrderDetailsScreen = () => {
  const navigation = useNavigation();
  const [selectedReason, setSelectedReason] = useState(null);
  const [showReasons, setShowReasons] = useState(false);
  const [otherReason, setOtherReason] = useState('');
  const [showSupportOptions, setShowSupportOptions] = useState(false);
  const [progressStep, setProgressStep] = useState(0);
  const progressTexts = [
    'Arrived At Pick Up Location',
    'Start',
    'Reached At Drop Location',
    'Collect Cash',
  ];

  useEffect(() => {
    if (progressStep < progressTexts.length - 1) {
      const timer = setTimeout(() => {
        setProgressStep(progressStep + 1);
      }, 15000);
      return () => clearTimeout(timer);
    }
  }, [progressStep]);

  useEffect(() => {
    if (progressStep === progressTexts.length - 1) {
      const timer = setTimeout(() => {
        navigation.navigate('OrderFareCheckout');
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [progressStep]);

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
      {/* Order ID */}
      <View style={styles.orderIdCardCentered}>
        <Text style={styles.orderIdLabel}>Order ID :</Text>
        <Text style={styles.orderIdValue}>1234567891</Text>
      </View>

      {/* Estimated Distance */}
      <View style={styles.estimateCard}>
        <Ionicons name="car-outline" size={22} color="#EC4D4A" style={{ marginRight: 10 }} />
        <Text style={styles.estimateLabel}>Estimated distance :</Text>
        <Text style={styles.estimateValue}>10 km</Text>
      </View>

      {/* Pickup Location Card */}
      <View style={styles.locationCard}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <View style={{ flex: 1, paddingRight: 8 }}>
            <View style={styles.locationHeader}>
              <Ionicons name="arrow-up-circle" size={22} color="#EC4D4A" style={styles.locationIcon} />
              <Text style={styles.locationType}>Pickup Location</Text>
            </View>
            <Text style={styles.customerName}>Customer Name</Text>
            <Text style={styles.customerAddress}>123, Main Street, City, State, 400001</Text>
          </View>
          <View style={styles.locationActionsRow}>
            <TouchableOpacity style={styles.actionButton}>
              <Ionicons name="location" size={20} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Ionicons name="call" size={20} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Drop Location Card */}
      <View style={styles.locationCard}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <View style={{ flex: 1, paddingRight: 8 }}>
            <View style={styles.locationHeader}>
              <Ionicons name="arrow-down-circle" size={22} color="#EC4D4A" style={styles.locationIcon} />
              <Text style={styles.locationType}>Drop Location</Text>
            </View>
            <Text style={styles.customerName}>Customer Name</Text>
            <Text style={styles.customerAddress}>456, Market Road, City, State, 400002</Text>
          </View>
          <View style={styles.locationActionsRow}>
            <TouchableOpacity style={styles.actionButton}>
              <Ionicons name="location" size={20} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Ionicons name="call" size={20} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Progress Card */}
      <View style={styles.progressCard}>
        <Text style={styles.progressCardText}>{progressTexts[progressStep]}</Text>
      </View>

      {/* End Trip Card */}
      <TouchableOpacity
        style={styles.progressCard}
        onPress={() => navigation.navigate('OrderReviewScreen')}
        activeOpacity={0.85}
      >
        {/* <Ionicons name="flag-checkered" size={22} color="#EC4D4A" style={{ marginRight: 10 }} /> */}
        <Text style={styles.endTripText}>End Trip</Text>
      </TouchableOpacity>

      {/* Cancel Button and Reasons */}
      <View style={styles.cancelSection}>
        <TouchableOpacity
          style={[styles.fullWidthButton, { backgroundColor: '#fff', borderWidth: 2, borderColor: '#EC4D4A', marginBottom: 10 }]}
          onPress={() => navigation.navigate('SupportOptionsScreen')}
        >
          <Ionicons name="headset" size={20} color="#EC4D4A" style={{ marginRight: 8 }} />
          <Text style={[styles.fullWidthButtonText, { color: '#EC4D4A' }]}>Support</Text>
        </TouchableOpacity>
                <TouchableOpacity
          style={[styles.fullWidthButton, { backgroundColor: '#fff', borderWidth: 2, borderColor: '#EC4D4A' }]}
          onPress={() => navigation.navigate('CancelReasonsScreen')}
        >
          <Ionicons name="close-circle" size={20} color="#EC4D4A" style={{ marginRight: 8 }} />
          <Text style={[styles.fullWidthButtonText, { color: '#EC4D4A' }]}>Cancel Order</Text>
                </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
    padding: 16,
  },
  orderIdCardCentered: {
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    shadowColor: '#EC4D4A',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  orderIdLabel: {
    fontSize: 16,
    color: '#EC4D4A',
    fontWeight: '700',
    marginRight: 8,
  },
  orderIdValue: {
    fontSize: 16,
    color: '#1f2937',
    fontWeight: '600',
  },
  estimateCard: {
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
    shadowColor: '#EC4D4A',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  estimateLabel: {
    fontSize: 15,
    color: '#EC4D4A',
    fontWeight: '600',
    marginRight: 6,
  },
  estimateValue: {
    fontSize: 15,
    color: '#1f2937',
    fontWeight: '600',
  },
  locationCard: {
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 18,
    marginBottom: 18,
    shadowColor: '#EC4D4A',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  locationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  locationIcon: {
    marginRight: 8,
  },
  locationType: {
    fontSize: 15,
    color: '#EC4D4A',
    fontWeight: '700',
  },
  customerName: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 2,
  },
  customerAddress: {
    fontSize: 13,
    color: '#6b7280',
    marginBottom: 10,
  },
  locationActionsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  actionButton: {
    backgroundColor: '#EC4D4A',
    borderRadius: 8,
    padding: 10,
    marginLeft: 8,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
  },
  cancelSection: {
    marginTop: 18,
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 18,
    shadowColor: '#EC4D4A',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  fullWidthButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EC4D4A',
    borderRadius: 12,
    paddingVertical: 16,
    marginBottom: 0,
    marginTop: 0,
    width: '100%',
    alignSelf: 'center',
    elevation: 2,
  },
  fullWidthButtonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
  reasonTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#EC4D4A',
    marginBottom: 10,
    marginTop: 6,
  },
  reasonsList: {
    gap: 10,
  },
  reasonItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8fafc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 6,
    borderWidth: 1,
    borderColor: '#eee',
  },
  reasonItemSelected: {
    backgroundColor: '#FEF2F2',
    borderColor: '#EC4D4A',
  },
  reasonText: {
    fontSize: 14,
    color: '#1f2937',
  },
  reasonTextSelected: {
    color: '#EC4D4A',
    fontWeight: '700',
  },
  otherReasonInput: {
    borderWidth: 1,
    borderColor: '#EC4D4A',
    borderRadius: 8,
    padding: 10,
    marginTop: 8,
    marginBottom: 8,
    minHeight: 40,
    fontSize: 14,
    backgroundColor: '#fff',
    color: '#1f2937',
  },
  supportOptionsContainer: {
    marginBottom: 10,
    marginTop: 0,
  },
  supportOptionButton: {
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#EC4D4A',
    borderRadius: 12,
    paddingVertical: 12,
    marginBottom: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    alignSelf: 'center',
    elevation: 2,
  },
  supportOptionText: {
    color: '#EC4D4A',
    fontWeight: '700',
    fontSize: 15,
  },
  progressCard: {
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 18,
    marginBottom: 18,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#EC4D4A',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  progressCardText: {
    fontSize: 16,
    color: '#EC4D4A',
    fontWeight: '700',
  },
  endTripText: {
    fontSize: 16,
    color: '#EC4D4A',
    fontWeight: '700',
  },
});

export default OrderDetailsScreen; 