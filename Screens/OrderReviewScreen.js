import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, TextInput, Dimensions, Image, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

const compliments = [
  { line1: 'Delivery', line2: 'Time', icon: require('../assets/box-icon1.png') },
  { line1: 'Social', line2: 'Distancing', icon: require('../assets/box-icon1.png') },
  { line1: 'Professional', line2: 'Exec.', icon: require('../assets/box-icon1.png') },
  { line1: 'Location', line2: 'Delivery', icon: require('../assets/box-icon1.png') },
];

const OrderReviewScreen = () => {
  const navigation = useNavigation();
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [selectedCompliment, setSelectedCompliment] = useState(null);
  const checkAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(checkAnim, {
      toValue: 1,
      friction: 4,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {/* Top Card: Trip Completed with Gradient */}
      <LinearGradient
        colors={["#fff0f0", "#fff"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.topCard}
      >
        <Animated.View
          style={[
            styles.checkCircle,
            { transform: [{ scale: checkAnim }] },
          ]}
        >
          <Ionicons name="checkmark-done" size={40} color="#fff" />
        </Animated.View>
        <Text style={styles.completedText}>Trip Completed!</Text>
        <Text style={styles.thankYouText}>Thank you for your service</Text>
      </LinearGradient>

      {/* Bottom Review Section (Bottom Sheet Style) */}
      <View style={styles.bottomSheet}>
        <View style={styles.dragIndicator} />
        <Text style={styles.label}>Rate your trip</Text>
        <View style={styles.starsRow}>
          {[1,2,3,4,5].map(i => (
            <TouchableOpacity key={i} onPress={() => setRating(i)} activeOpacity={0.7}>
              <Ionicons
                name={rating >= i ? 'star' : 'star-outline'}
                size={36}
                color={rating >= i ? '#EC4D4A' : '#ddd'}
                style={{ marginHorizontal: 6 }}
              />
            </TouchableOpacity>
          ))}
        </View>
        {/* Compliments */}
        <Text style={styles.complimentLabel}>Give a compliment</Text>
        <View style={styles.complimentRow}>
          {compliments.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.complimentItem,
                selectedCompliment === index && styles.complimentItemActive,
              ]}
              onPress={() => setSelectedCompliment(index)}
              activeOpacity={0.8}
            >
              <Image source={item.icon} style={styles.complimentIcon} />
              <View>
                <Text
                  style={[
                    styles.complimentText,
                    selectedCompliment === index && styles.complimentTextActive,
                  ]}
                >
                  {item.line1}
                </Text>
                <Text
                  style={[
                    styles.complimentText,
                    selectedCompliment === index && styles.complimentTextActive,
                  ]}
                >
                  {item.line2}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
        <TextInput
          style={styles.input}
          placeholder="Leave a comment (optional)"
          value={comment}
          onChangeText={setComment}
          multiline
          placeholderTextColor="#aaa"
        />
        <TouchableOpacity style={styles.submitButton} onPress={() => navigation.navigate('Home')} activeOpacity={0.85}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  topCard: {
    width: width * 0.92,
    backgroundColor: '#fff',
    borderRadius: 24,
    alignItems: 'center',
    paddingVertical: 44,
    paddingHorizontal: 20,
    marginTop: 36,
    marginBottom: 0,
    shadowColor: '#EC4D4A',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 10,
    elevation: 5,
  },
  checkCircle: {
    backgroundColor: '#EC4D4A',
    width: 76,
    height: 76,
    borderRadius: 38,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 18,
    shadowColor: '#EC4D4A',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.18,
    shadowRadius: 8,
    elevation: 4,
  },
  completedText: {
    fontSize: 24,
    fontWeight: '800',
    color: '#EC4D4A',
    marginBottom: 6,
    letterSpacing: 0.2,
  },
  thankYouText: {
    fontSize: 16,
    color: '#1f2937',
    marginBottom: 0,
    opacity: 0.85,
  },
  bottomSheet: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    padding: 30,
    shadowColor: '#EC4D4A',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.13,
    shadowRadius: 12,
    elevation: 12,
    alignItems: 'center',
  },
  dragIndicator: {
    width: 48,
    height: 5,
    borderRadius: 3,
    backgroundColor: '#e5e7eb',
    alignSelf: 'center',
    marginBottom: 18,
    opacity: 0.7,
  },
  label: {
    fontSize: 17,
    color: '#EC4D4A',
    fontWeight: '700',
    marginBottom: 18,
    letterSpacing: 0.1,
  },
  starsRow: {
    flexDirection: 'row',
    marginBottom: 22,
    justifyContent: 'center',
  },
  complimentLabel: {
    marginHorizontal: 16,
    marginTop: 18,
    fontSize: 15,
    fontWeight: '600',
    color: '#1f2937',
    alignSelf: 'flex-start',
    marginBottom: 6,
  },
  complimentRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 8,
    marginBottom: 18,
    paddingHorizontal: 4,
    width: '100%',
  },
  complimentItem: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 82,
    height: 82,
    borderRadius: 41,
    borderWidth: 1.5,
    borderColor: '#eee',
    backgroundColor: '#fff',
    marginHorizontal: 2,
    shadowColor: '#EC4D4A',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 2,
    elevation: 1,
    transform: [{ scale: 1 }],
  },
  complimentItemActive: {
    backgroundColor: '#FEE2E2',
    borderColor: '#EC4D4A',
    shadowOpacity: 0.12,
    transform: [{ scale: 1.08 }],
  },
  complimentIcon: {
    width: 34,
    height: 34,
    marginBottom: 3,
  },
  complimentText: {
    fontSize: 12,
    textAlign: 'center',
    color: '#444',
    fontWeight: '500',
    lineHeight: 15,
  },
  complimentTextActive: {
    fontWeight: 'bold',
    color: '#EC4D4A',
  },
  input: {
    borderWidth: 1,
    borderColor: '#EC4D4A',
    borderRadius: 12,
    padding: 14,
    minHeight: 60,
    width: '100%',
    marginBottom: 22,
    fontSize: 15,
    backgroundColor: '#fff',
    color: '#1f2937',
  },
  submitButton: {
    backgroundColor: '#EC4D4A',
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    width: '100%',
    marginTop: 6,
  },
  submitButtonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 18,
    letterSpacing: 0.2,
  },
});

export default OrderReviewScreen; 