import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

export default function PrivacyPolicyScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Privacy Policy</Text>

      <Text style={styles.sectionTitle}>1. Introduction</Text>
      <Text style={styles.text}>
        We are committed to protecting your personal information and your right to privacy. This policy outlines how we collect, use, and safeguard your data.
      </Text>

      <Text style={styles.sectionTitle}>2. Information We Collect</Text>
      <Text style={styles.text}>
        We may collect personal information such as your name, phone number, email, location, vehicle details, and any documents uploaded for verification.
      </Text>

      <Text style={styles.sectionTitle}>3. How We Use Your Information</Text>
      <Text style={styles.text}>
        We use your data to:
        {"\n"}• Verify identity
        {"\n"}• Manage driver accounts
        {"\n"}• Process payouts
        {"\n"}• Improve our services and ensure safety
      </Text>

      <Text style={styles.sectionTitle}>4. Sharing of Information</Text>
      <Text style={styles.text}>
        Your data is never sold. It may be shared with trusted third parties like payment processors or legal authorities if required.
      </Text>

      <Text style={styles.sectionTitle}>5. Data Security</Text>
      <Text style={styles.text}>
        We implement appropriate security measures to protect your information from unauthorized access.
      </Text>

      <Text style={styles.sectionTitle}>6. Your Rights</Text>
      <Text style={styles.text}>
        You have the right to access, correct, or delete your personal data. You can also request data export or restrict processing.
      </Text>

      <Text style={styles.sectionTitle}>7. Contact Us</Text>
      <Text style={styles.text}>
        If you have any questions about this privacy policy, contact us at: support@driverapp.com
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fdfdfd',
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 20,
    textAlign: 'center',
    color: '#14519c',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 16,
    marginBottom: 6,
    color: '#333',
  },
  text: {
    fontSize: 15,
    lineHeight: 22,
    color: '#555',
  },
});
