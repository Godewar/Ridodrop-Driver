import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const HelpAndSupportScreen = () => {
  const handleChatSupport = () => {
    // Replace with your chatbot screen navigation or SDK integration
    Alert.alert('Chatbot', 'Launching chatbot...');
    // navigation.navigate('ChatBotScreen') // if using chatbot screen
  };

  const handleCallSupport = () => {
    Linking.openURL('tel:1800123456'); // replace with your customer care number
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Help & Support</Text>

      <TouchableOpacity style={styles.card} onPress={handleChatSupport}>
        <Ionicons name="chatbubble-ellipses-outline" size={28} color="#0066FF" />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Chat with Support</Text>
          <Text style={styles.subtitle}>Get instant help through our chatbot</Text>
        </View>
        <Ionicons name="chevron-forward-outline" size={20} color="#999" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={handleCallSupport}>
        <Ionicons name="call-outline" size={28} color="#0066FF" />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Call Customer Care</Text>
          <Text style={styles.subtitle}>We're available 24/7 to assist you</Text>
        </View>
        <Ionicons name="chevron-forward-outline" size={20} color="#999" />
      </TouchableOpacity>
    </View>
  );
};

export default HelpAndSupportScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
    marginTop:15
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 24,
    color: '#333',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 16,
    elevation: 1,
  },
  textContainer: {
    flex: 1,
    marginLeft: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#222',
  },
  subtitle: {
    fontSize: 13,
    color: '#777',
    marginTop: 4,
  },
});
