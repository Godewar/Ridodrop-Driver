import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

const ReferralBikeScreen = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Gradient Header */}
      <LinearGradient
        colors={['#00C853', '#64DD17']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.header}
      >
        <TouchableOpacity style={styles.backButton}>
          <Icon name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.title}>Refer & Earn</Text>
        <TouchableOpacity style={styles.termsButton}>
          <Text style={styles.termsText}>VIEW T&C</Text>
        </TouchableOpacity>
      </LinearGradient>

      {/* Main Content */}
      <View style={styles.content}>
        {/* Earnings Banner */}
        <View style={styles.earnCard}>
          <LinearGradient
            colors={['#E8F5E9', '#C8E6C9']}
            style={styles.earnGradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <Icon name="monetization-on" size={28} color="#00C853" style={styles.moneyIcon} />
            <Text style={styles.earnText}>Earn up to ₹1500 per Referral</Text>
            <Text style={styles.dateRange}>May 8 - May 31</Text>
          </LinearGradient>
        </View>

        {/* How it Works Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>How this referral works?</Text>
          <View style={styles.stepsContainer}>
            <View style={styles.step}>
              <View style={styles.stepNumber}>
                <Text style={styles.stepNumberText}>1</Text>
              </View>
              <Text style={styles.stepText}>Send invites to your friends</Text>
            </View>
            <View style={styles.step}>
              <View style={styles.stepNumber}>
                <Text style={styles.stepNumberText}>2</Text>
              </View>
              <Text style={styles.stepText}>Friend gets activated before 31st May</Text>
            </View>
            <View style={styles.step}>
              <View style={styles.stepNumber}>
                <Text style={styles.stepNumberText}>3</Text>
              </View>
              <Text style={styles.stepText}>Earn rewards when they complete rides</Text>
            </View>
          </View>
        </View>

        {/* Referral Milestones */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Your Earnings Potential</Text>
          
          <View style={styles.milestoneContainer}>
            {/* Activation Milestone */}
            <View style={styles.milestoneCard}>
              <View style={styles.milestoneHeader}>
                <Icon name="person-outline" size={24} color="#00C853" />
                <Text style={styles.milestoneTitle}>Friend Activation</Text>
              </View>
              <Text style={styles.milestoneText}>Friend must activate before 31st May 2025</Text>
              <View style={styles.rewardContainer}>
                <Text style={styles.rewardAmount}>₹0</Text>
                <Text style={styles.rewardLabel}>Instant Reward</Text>
              </View>
            </View>

            {/* Ride Completion Milestones */}
            {[
              { rides: 10, days: 3, amount: 250 },
              { rides: 25, days: 6, amount: 350 },
              { rides: 50, days: 10, amount: 400 },
              { rides: 75, days: 13, amount: 500 },
            ].map((item, index) => (
              <View key={index} style={styles.milestoneCard}>
                <View style={styles.milestoneHeader}>
                  <Icon name="emoji-events" size={24} color="#FFC107" />
                  <Text style={styles.milestoneTitle}>{item.rides} Rides Bonus</Text>
                </View>
                <Text style={styles.milestoneText}>
                  Complete {item.rides} rides in {item.days} days
                </Text>
                <View style={styles.rewardContainer}>
                  <Text style={styles.rewardAmount}>₹{item.amount}</Text>
                  <Text style={styles.rewardLabel}>Bonus Reward</Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* CTA Button */}
        <TouchableOpacity style={styles.referButton}>
          <Text style={styles.referButtonText}>Start Referring Now</Text>
          <Icon name="arrow-forward" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9f9f9',
    flex: 1,
  },
  header: {
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  backButton: {
    padding: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
    flex: 1,
    textAlign: 'center',
  },
  termsButton: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 16,
  },
  termsText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#fff',
  },
  content: {
    paddingHorizontal: 16,
    paddingBottom: 30,
  },
  earnCard: {
    marginTop: 20,
    marginBottom: 25,
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  earnGradient: {
    padding: 20,
    alignItems: 'center',
  },
  moneyIcon: {
    marginBottom: 10,
  },
  earnText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#00C853',
    textAlign: 'center',
  },
  dateRange: {
    fontSize: 14,
    color: '#388E3C',
    fontWeight: '600',
    marginTop: 6,
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
    marginBottom: 15,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  stepsContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  step: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 15,
  },
  stepNumber: {
    backgroundColor: '#00C853',
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  stepNumberText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  stepText: {
    fontSize: 14,
    color: '#444',
    flex: 1,
    marginTop: 2,
  },
  milestoneContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  milestoneCard: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  milestoneHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  milestoneTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginLeft: 10,
  },
  milestoneText: {
    fontSize: 13,
    color: '#666',
    marginLeft: 34, // Align with icon + margin
    marginBottom: 12,
  },
  rewardContainer: {
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 34,
  },
  rewardAmount: {
    fontSize: 18,
    fontWeight: '700',
    color: '#00C853',
  },
  rewardLabel: {
    fontSize: 12,
    color: '#666',
    fontWeight: '500',
  },
  referButton: {
    backgroundColor: '#00C853',
    paddingVertical: 16,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    elevation: 5,
    shadowColor: '#00C853',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  referButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    marginRight: 8,
  },
});

export default ReferralBikeScreen;