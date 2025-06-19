// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   Image,
//   Share,
//   Dimensions,
// } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import { LinearGradient } from 'expo-linear-gradient'; // ensure expo-linear-gradient is installed

// const { width } = Dimensions.get('window');

// const ReferAndEarnScreen = () => {
//   const referralCode = 'RIDODROP123';
//   const [referralCount, setReferralCount] = useState(12); // static for now, can be dynamic via API

//   const handleShare = async () => {
//     try {
//       const result = await Share.share({
//         message: `Use my referral code ${referralCode} to get rewards! 🚚💰 Download the app now.`,
//       });

//       if (result.action === Share.sharedAction) {
//         if (!result.activityType) {
//           setReferralCount(referralCount + 1); // increase share count
//         }
//       }
//     } catch (error) {
//       alert(error.message);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Image
//         source={require('../assets/Rafer.png')}
//         style={styles.banner}
//         resizeMode="contain"
//       />

//       <Text style={styles.title}>Refer and Earn</Text>
//       <Text style={styles.subtitle}>Invite friends and earn rewards for every referral!</Text>

//       <View style={styles.referralCard}>
//         <Text style={styles.codeLabel}>Your Referral Code</Text>
//         <Text style={styles.code}>{referralCode}</Text>

//         <TouchableOpacity onPress={handleShare}>
//           <LinearGradient
//             colors={['#ff512f', '#dd2476']}
//             start={{ x: 0, y: 0 }}
//             end={{ x: 1, y: 0 }}
//             style={styles.shareButton}
//           >
//             <Ionicons name="share-social-outline" size={20} color="white" />
//             <Text style={styles.shareText}>Share Code</Text>
//           </LinearGradient>
//         </TouchableOpacity>
//       </View>

//       <View style={styles.statsBox}>
//         <Ionicons name="people" size={22} color="#333" />
//         <Text style={styles.statsText}>{referralCount} people used your code</Text>
//       </View>

//       <View style={styles.howItWorks}>
//         <Text style={styles.howTitle}>How It Works</Text>
//         <Text style={styles.howItem}>• Share your referral code</Text>
//         <Text style={styles.howItem}>• Friends get discounts on their first booking</Text>
       
//       </View>
//     </View>
//   );
// };

// export default ReferAndEarnScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fefefe',
//     paddingHorizontal: 20,
//     paddingTop: 10,
//   },
//   banner: {
//     width: '100%',
//     height: 180,
//     marginBottom: 10,
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: '800',
//     textAlign: 'center',
//     color: '#222',
//   },
//   subtitle: {
//     fontSize: 16,
//     textAlign: 'center',
//     color: '#666',
//     marginVertical: 10,
//   },
//   referralCard: {
//     backgroundColor: '#fff',
//     borderRadius: 16,
//     padding: 20,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOpacity: 0.05,
//     shadowRadius: 10,
//     elevation: 3,
//     marginVertical: 20,
//   },
//   codeLabel: {
//     fontSize: 14,
//     color: '#999',
//     marginBottom: 5,
//   },
//   code: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     letterSpacing: 2,
//     marginBottom: 20,
//     color: '#222',
//   },
//   shareButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 12,
//     paddingHorizontal: 25,
//     borderRadius: 30,
//   },
//   shareText: {
//     color: '#fff',
//     fontWeight: 'bold',
//     fontSize: 16,
//     marginLeft: 8,
//   },
//   statsBox: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#e6f3ff',
//     padding: 14,
//     borderRadius: 12,
//     marginBottom: 25,
//   },
//   statsText: {
//     marginLeft: 10,
//     fontSize: 16,
//     color: '#333',
//     fontWeight: '500',
//   },
//   howItWorks: {
//     backgroundColor: '#fff',
//     borderRadius: 12,
//     padding: 20,
//     shadowColor: '#000',
//     shadowOpacity: 0.04,
//     shadowRadius: 8,
//     elevation: 2,
//   },
//   howTitle: {
//     fontSize: 18,
//     fontWeight: '700',
//     marginBottom: 10,
//     color: '#222',
//   },
//   howItem: {
//     fontSize: 15,
//     color: '#555',
//     marginBottom: 8,
//   },
// });


// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';
// import { Ionicons, MaterialIcons } from '@expo/vector-icons';

// const ReferAndEarnScreen = () => {
//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         <Ionicons name="arrow-back" size={24} />
//         <Text style={styles.headerTitle}>Refer & Earn</Text>
//         <TouchableOpacity>
//           <Ionicons name="help-circle-outline" size={24} />
//         </TouchableOpacity>
//       </View>

//       {/* Illustration */}
//       <Image
//         source={require('../assets/Rafer.png')} // Replace with your actual illustration asset
//         style={styles.illustration}
//         resizeMode="contain"
//       />
//       <Text style={styles.mainTitle}>Refer and Earn</Text>

//       {/* Total Earnings */}
//       <TouchableOpacity style={styles.earningsCard}>
//         <View style={styles.earningsIcon}>
//           <MaterialIcons name="payments" size={20} color="#00C853" />
//         </View>
//         <Text style={styles.earningsText}>Total Earnings:</Text>
//         <Text style={styles.earningsAmount}>₹0</Text>
//       </TouchableOpacity>

//       {/* Active Campaigns */}
//       <Text style={styles.sectionTitle}>Active Campaigns</Text>

//       <View style={styles.campaignRow}>
//         <Image source={require('../assets/bike.png')} style={styles.vehicleIcon} />
//         <Text style={styles.campaignText}>2 Wheeler Referral = ₹600</Text>
//         <TouchableOpacity><Text style={styles.linkText}>Know more</Text></TouchableOpacity>
//       </View>

//       <View style={styles.campaignRow}>
//         <Image source={require('../assets/Auto.png')} style={styles.vehicleIcon} />
//         <Text style={styles.campaignText}>3 Wheeler Referral = ₹1200</Text>
//         <TouchableOpacity><Text style={styles.linkText}>Know more</Text></TouchableOpacity>
//       </View>

      
//        <View style={styles.campaignRow}>
//         <Image source={require('../assets/truck.png')} style={styles.vehicleIcon} />
//         <Text style={styles.campaignText}>1 Truck Referral = ₹1600</Text>
//         <TouchableOpacity><Text style={styles.linkText}>Know more</Text></TouchableOpacity>
//       </View>

//       {/* Referral Code */}
//       <View style={styles.referralCard}>
//         <Text style={styles.referralLabel}>Your referral code is</Text>
//         <View style={styles.codeRow}>
//           <Text style={styles.codeText}>RH21OI9</Text>
//           <TouchableOpacity>
//             <Text style={styles.copyText}>Copy Link</Text>
//           </TouchableOpacity>
//         </View>
//       </View>

//       {/* Refer Friends Button */}
//       <TouchableOpacity style={styles.referButton}>
//         <Text style={styles.referButtonText}>Refer Friends</Text>
//       </TouchableOpacity>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 16,
//     backgroundColor: '#fff',
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   headerTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   illustration: {
//     height: 160,
//     width: '100%',
//     marginVertical: 20,
//   },
//   mainTitle: {
//     textAlign: 'center',
//     fontSize: 18,
//     fontWeight: '600',
//     marginBottom: 16,
//   },
//   earningsCard: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#F1F1F1',
//     padding: 16,
//     borderRadius: 10,
//     marginBottom: 20,
//   },
//   earningsIcon: {
//     marginRight: 10,
//   },
//   earningsText: {
//     fontSize: 16,
//     fontWeight: '500',
//   },
//   earningsAmount: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#00C853',
//     marginLeft: 6,
//   },
//   sectionTitle: {
//     fontWeight: 'bold',
//     fontSize: 16,
//     marginBottom: 12,
//   },
//   campaignRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   vehicleIcon: {
//     height: 24,
//     width: 24,
//     marginRight: 10,
//   },
//   campaignText: {
//     flex: 1,
//     fontSize: 15,
//   },
//   linkText: {
//     color: '#2979FF',
//     fontWeight: '500',
//   },
//   referralCard: {
//     backgroundColor: '#7C4DFF',
//     padding: 16,
//     borderRadius: 10,
//     marginVertical: 20,
//   },
//   referralLabel: {
//     color: '#fff',
//     fontSize: 14,
//     marginBottom: 6,
//   },
//   codeRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   codeText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   copyText: {
//     color: '#fff',
//     textDecorationLine: 'underline',
//     fontSize: 14,
//   },
//   referButton: {
//     backgroundColor: '#FFD600',
//     paddingVertical: 14,
//     borderRadius: 10,
//     alignItems: 'center',
//     marginBottom: 30,
//   },
//   referButtonText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#000',
//   },
// });

// export default ReferAndEarnScreen;


import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

 

const ReferAndEarnScreen = () => {

  const navigation = useNavigation();

 const handleBike = () => {
    
     navigation.navigate("ReferralBikeScreen")
    
  };
  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header with Gradient Background */}
      <LinearGradient
        colors={['#7C4DFF', '#B388FF']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.header}
      >
        <TouchableOpacity style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Refer & Earn</Text>
        <TouchableOpacity style={styles.helpButton}>
          <Ionicons name="help-circle-outline" size={24} color="#fff" />
        </TouchableOpacity>
      </LinearGradient>

      {/* Main Content */}
      <View style={styles.content}>
        {/* Illustration with Floating Effect */}
        <View style={styles.illustrationContainer}>
          <Image
            source={require('../assets/Rafer.png')}
            style={styles.illustration}
            resizeMode="contain"
          />
        </View>

        <Text style={styles.mainTitle}>Invite Friends & Earn Money</Text>
        <Text style={styles.subTitle}>Share your referral code and earn when they join</Text>

        {/* Earnings Card with Shadow */}
        <View style={styles.earningsCard}>
          <View style={styles.earningsContent}>
            <View style={styles.earningsIcon}>
              <MaterialIcons name="payments" size={24} color="#4CAF50" />
            </View>
            <View>
              <Text style={styles.earningsLabel}>Total Earnings</Text>
              <Text style={styles.earningsAmount}>₹2,400</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.historyButton}>
            <Text style={styles.historyButtonText}>View History</Text>
          </TouchableOpacity>
        </View>

        {/* Active Campaigns Section */}
        <Text style={styles.sectionTitle}>Active Campaigns</Text>

        <View style={styles.campaignCard}>
          <View style={styles.campaignItem}>
            <Image source={require('../assets/bike.png')} style={styles.vehicleIcon} />
            <View style={styles.campaignDetails}>
              <Text style={styles.campaignText}>2 Wheeler Referral</Text>
              <Text style={styles.campaignAmount}>₹600 per referral</Text>
            </View>
            <TouchableOpacity style={styles.knowMoreButton} onPress={handleBike}>
              <Text style={styles.knowMoreText}>Know more</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.divider} />

          <View style={styles.campaignItem}>
            <Image source={require('../assets/Auto.png')} style={styles.vehicleIcon} />
            <View style={styles.campaignDetails}>
              <Text style={styles.campaignText}>3 Wheeler Referral</Text>
              <Text style={styles.campaignAmount}>₹1200 per referral</Text>
            </View>
            <TouchableOpacity style={styles.knowMoreButton}>
              <Text style={styles.knowMoreText}>Know more</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.divider} />

          <View style={styles.campaignItem}>
            <Image source={require('../assets/truck.png')} style={styles.vehicleIcon} />
            <View style={styles.campaignDetails}>
              <Text style={styles.campaignText}>Truck Referral</Text>
              <Text style={styles.campaignAmount}>₹1600 per referral</Text>
            </View>
            <TouchableOpacity style={styles.knowMoreButton} >
              <Text style={styles.knowMoreText}>Know more</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Referral Code Section */}
        <LinearGradient
          colors={['#7C4DFF', '#B388FF']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.referralCard}
        >
          <Text style={styles.referralLabel}>Your unique referral code</Text>
          <View style={styles.codeContainer}>
            <Text style={styles.codeText}>RIDODROP123</Text>
            <TouchableOpacity style={styles.copyButton}>
              <FontAwesome name="copy" size={16} color="#7C4DFF" />
              <Text style={styles.copyText}>Copy</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.referralNote}>Share this code with friends or copy the referral link</Text>
        </LinearGradient>

        {/* Social Sharing Options */}
        <View style={styles.sharingOptions}>
          <Text style={styles.sharingTitle}>Share via</Text>
          <View style={styles.sharingIcons}>
            <TouchableOpacity style={[styles.shareButton, { backgroundColor: '#25D366' }]}>
              <Ionicons name="logo-whatsapp" size={24} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.shareButton, { backgroundColor: '#1877F2' }]}>
              <Ionicons name="logo-facebook" size={24} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.shareButton, { backgroundColor: '#1DA1F2' }]}>
              <Ionicons name="logo-twitter" size={24} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.shareButton, { backgroundColor: '#FF4500' }]}>
              <Ionicons name="logo-reddit" size={24} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Main CTA Button */}
        <TouchableOpacity style={styles.referButton}>
          <Text style={styles.referButtonText}>Invite Friends Now</Text>
          <MaterialIcons name="arrow-forward" size={20} color="#fff" style={styles.buttonIcon} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F8F9FA',
    flexGrow: 1,
  },
  header: {
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  backButton: {
    padding: 5,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  helpButton: {
    padding: 5,
  },
  content: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  illustrationContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  illustration: {
    height: 180,
    width: width * 0.8,
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    marginBottom: 8,
  },
  subTitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 25,
  },
  earningsCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    marginBottom: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  earningsContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  earningsIcon: {
    backgroundColor: '#E8F5E9',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  earningsLabel: {
    fontSize: 14,
    color: '#666',
  },
  earningsAmount: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  historyButton: {
    // backgroundColor: '#F1F8E9',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 15,
  },
  historyButtonText: {
    color: '#4CAF50',
    fontSize: 12,
    fontWeight: '500',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  campaignCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    paddingHorizontal: 15,
    marginBottom: 25,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  campaignItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
  },
  vehicleIcon: {
    width: 40,
    height: 40,
    marginRight: 15,
  },
  campaignDetails: {
    flex: 1,
  },
  campaignText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  campaignAmount: {
    fontSize: 14,
    color: '#4CAF50',
    fontWeight: 'bold',
    marginTop: 3,
  },
  knowMoreButton: {
    // backgroundColor: '#E3F2FD',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 15,
  },
  knowMoreText: {
    color: '#1976D2',
    fontSize: 12,
    fontWeight: '500',
  },
  divider: {
    height: 1,
    backgroundColor: '#eee',
  },
  referralCard: {
    borderRadius: 15,
    padding: 20,
    marginBottom: 25,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  referralLabel: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 5,
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  codeText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  copyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  copyText: {
    color: '#7C4DFF',
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  referralNote: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 12,
  },
  sharingOptions: {
    marginBottom: 25,
  },
  sharingTitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
    textAlign: 'center',
  },
  sharingIcons: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  shareButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
    elevation: 3,
  },
  referButton: {
    // backgroundColor: '#FF9800',
      backgroundColor: '#EC4D4A',
    paddingVertical: 16,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#FF9800',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  referButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonIcon: {
    marginLeft: 10,
  },
});

export default ReferAndEarnScreen;