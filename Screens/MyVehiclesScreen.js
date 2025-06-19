import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Platform, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const MyVehiclesScreen = () => {
  const navigation = useNavigation();

  const handleSubmit = () => {
    navigation.replace('Driver Checkout');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <View style={styles.headerIconContainer}>
            <Ionicons name="car-sport" size={28} color="#fff" />
          </View>
          <View style={styles.headerTextContainer}>
            <Text style={styles.headerTitle}>My Vehicles</Text>
            <Text style={styles.headerSubtitle}>Manage your registered vehicles</Text>
          </View>
        </View>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Alert Banner */}
        <View style={styles.alertBanner}>
          <Ionicons name="alert-circle" size={24} color="#fff" />
          <View style={styles.alertTextContainer}>
            <Text style={styles.alertText}>
              After paying joining fees, <Text style={styles.boldText}>document verification</Text> might take up to <Text style={styles.boldText}>2 DAYS!</Text>
          </Text>
          </View>
        </View>

        {/* Vehicle Card */}
        <View style={styles.vehicleCard}>
          <View style={styles.vehicleCardHeader}>
            <View style={styles.vehicleIconContainer}>
              <Ionicons name="car" size={24} color="#EC4D4A" />
            </View>
            <View style={styles.vehicleInfoContainer}>
          <Text style={styles.vehicleNumber}>Ka-01-je-0958</Text>
              <View style={styles.statusBadge}>
                <Ionicons name="checkmark-circle" size={14} color="#10B981" />
                <Text style={styles.statusText}>Active</Text>
              </View>
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.driverInfoSection}>
            <View style={styles.infoRow}>
              <View style={styles.infoIconContainer}>
                <Ionicons name="person" size={20} color="#EC4D4A" />
              </View>
              <Text style={styles.infoText}>Mohammed Nihaz</Text>
            </View>
            <View style={styles.infoRow}>
              <View style={styles.infoIconContainer}>
                <Ionicons name="call" size={20} color="#EC4D4A" />
              </View>
              <Text style={styles.infoText}>8892486679</Text>
            </View>
          </View>

          {/* <View style={styles.earningsSection}>
            <View style={styles.earningsContainer}>
              <View style={styles.earningsIconContainer}>
                <Ionicons name="cash" size={20} color="#10B981" />
              </View>
              <Text style={styles.earningsText}>Upto Rs.25000 monthly earnings</Text>
            </View>
          </View> */}
        </View>

        {/* Verification Status Section */}
        <View style={styles.verificationSection}>
          <View style={styles.verificationHeader}>
            <Ionicons name="shield-checkmark" size={24} color="#EC4D4A" />
            <Text style={styles.verificationTitle}>Verification Status</Text>
          </View>
          
          <View style={styles.verificationList}>
            <View style={styles.verificationItem}>
              <View style={styles.verificationInfo}>
                <View style={styles.verificationIconContainer}>
                  <Ionicons name="id-card" size={24} color="#EC4D4A" />
                </View>
                <Text style={styles.verificationText}>ID Information</Text>
              </View>
              <View style={[styles.statusContainer, styles.approvedContainer]}>
                <Ionicons name="checkmark-circle" size={18} color="#EC4D4A" />
                <Text style={styles.statusText}>Approved</Text>
              </View>
            </View>

            <View style={styles.verificationItem}>
              <View style={styles.verificationInfo}>
                <View style={styles.verificationIconContainer}>
                  <Ionicons name="car" size={24} color="#EC4D4A" />
                </View>
                <Text style={styles.verificationText}>Vehicle Information</Text>
              </View>
              <View style={[styles.statusContainer, styles.approvedContainer]}>
                <Ionicons name="checkmark-circle" size={18} color="#EC4D4A" />
                <Text style={styles.statusText}>Approved</Text>
              </View>
            </View>

            <View style={styles.verificationItem}>
              <View style={styles.verificationInfo}>
                <View style={styles.verificationIconContainer}>
                  <Ionicons name="person" size={24} color="#EC4D4A" />
                </View>
                <Text style={styles.verificationText}>Driver Details</Text>
              </View>
              <View style={[styles.statusContainer, styles.pendingContainer]}>
                <Ionicons name="time" size={18} color="#F59E0B" />
                <Text style={[styles.statusText, styles.pendingText]}>Pending</Text>
              </View>
            </View>

            <View style={styles.verificationItem}>
              <View style={styles.verificationInfo}>
                <View style={styles.verificationIconContainer}>
                  <Ionicons name="camera" size={24} color="#EC4D4A" />
                </View>
                <Text style={styles.verificationText}>Vehicle Photos</Text>
              </View>
              <View style={[styles.statusContainer, styles.pendingContainer]}>
                <Ionicons name="time" size={18} color="#F59E0B" />
                <Text style={[styles.statusText, styles.pendingText]}>Pending</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Training Videos Button */}
        <View style={styles.trainingSection}>
          <View style={styles.trainingCard}>
            <View style={styles.trainingHeader}>
              <View style={styles.trainingIconContainer}>
                <Ionicons name="play-circle" size={24} color="#EC4D4A" />
              </View>
              <View style={styles.trainingTextContainer}>
                <Text style={styles.trainingTitle}>Training Videos</Text>
                <Text style={styles.trainingSubtitle}>15 videos series to get started</Text>
              </View>
              <View style={[styles.statusContainer, styles.pendingContainer]}>
                <Ionicons name="time" size={18} color="#F59E0B" />
                <Text style={[styles.statusText, styles.pendingText]}>Pending</Text>
              </View>
            </View>
            <TouchableOpacity 
              style={styles.trainingButton}
              onPress={() => navigation.replace('TrainingVideos')}
              activeOpacity={0.8}
            >
              <Text style={styles.trainingButtonText}>Start Training</Text>
              <Ionicons name="arrow-forward" size={20} color="#fff" style={styles.buttonIcon} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Footer Note */}
        <View style={styles.footerNoteContainer}>
        <Text style={styles.footerNote}>
          One time fees per vehicle for adding. If unable to onboard, you get full refund
        </Text>
      </View>
      </ScrollView>

      {/* Bottom Action Button */}
      <View style={styles.bottomContainer}>
        <TouchableOpacity 
          style={styles.actionButton} 
          onPress={handleSubmit}
          activeOpacity={0.8}
        >
          <View style={styles.buttonContent}>
            <Text style={styles.buttonText}>Pay Fees | ₹29</Text>
          <Ionicons name="arrow-forward" size={20} color="white" style={styles.buttonIcon} />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    backgroundColor: '#EC4D4A',
    paddingTop: Platform.OS === 'ios' ? 0 : 20,
    paddingBottom: 24,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    shadowColor: '#EC4D4A',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  headerIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  headerTextContainer: {
    flex: 1,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.9)',
  },
  alertBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EC4D4A',
    padding: 16,
    borderRadius: 12,
    margin: 16,
    marginTop: 20,
    elevation: 2,
    shadowColor: '#EC4D4A',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  alertTextContainer: {
    flex: 1,
    marginLeft: 12,
  },
  alertText: {
    color: '#fff',
    fontSize: 14,
    lineHeight: 20,
  },
  boldText: {
    fontWeight: 'bold',
  },
  vehicleCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    margin: 16,
    marginTop: 0,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  vehicleCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  vehicleIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#FEF2F2',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  vehicleInfoContainer: {
    flex: 1,
  },
  vehicleNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 4,
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0FDF4',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  statusText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#10B981',
    marginLeft: 4,
  },
  divider: {
    height: 1,
    backgroundColor: '#e5e7eb',
    marginVertical: 16,
  },
  driverInfoSection: {
    marginBottom: 16,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  infoIconContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#FEF2F2',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  infoText: {
    fontSize: 16,
    color: '#4b5563',
  },
  earningsSection: {
    backgroundColor: '#F0FDF4',
    borderRadius: 12,
    padding: 16,
  },
  earningsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  earningsIconContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#DCFCE7',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  earningsText: {
    fontSize: 16,
    color: '#388E3C',
    fontWeight: '500',
  },
  verificationSection: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    margin: 16,
    marginTop: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  verificationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  verificationTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
    marginLeft: 12,
  },
  verificationList: {
    gap: 16,
  },
  verificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#f1f5f9',
  },
  verificationInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  verificationIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FEF2F2',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  verificationText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#4b5563',
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  approvedContainer: {
    backgroundColor: '#FEF2F2',
  },
  pendingContainer: {
    backgroundColor: '#FFFBEB',
  },
  pendingText: {
    color: '#F59E0B',
  },
  footerNoteContainer: {
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
    margin: 16,
    marginTop: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  footerNote: {
    fontSize: 14,
    color: '#6b7280',
    textAlign: 'center',
    lineHeight: 20,
  },
  bottomContainer: {
    padding: 16,
    paddingBottom: Platform.OS === 'ios' ? 30 : 16,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#f1f5f9',
  },
  actionButton: {
    backgroundColor: '#EC4D4A',
    borderRadius: 12,
    elevation: 3,
    shadowColor: '#EC4D4A',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  buttonIcon: {
    marginLeft: 8,
  },
  trainingSection: {
    padding: 16,
    paddingTop: 0,
  },
  trainingCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  trainingHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  trainingIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FEF2F2',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  trainingTextContainer: {
    flex: 1,
  },
  trainingTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 2,
  },
  trainingSubtitle: {
    fontSize: 13,
    color: '#6b7280',
  },
  trainingButton: {
    backgroundColor: '#3B82F6',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
  },
  trainingButtonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
    marginRight: 8,
  },
});

export default MyVehiclesScreen;