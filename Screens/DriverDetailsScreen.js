import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Platform,
  Alert,
  ScrollView,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const DriverDetailsScreen = () => {
  const navigation = useNavigation();

  const [drivingSelf, setDrivingSelf] = useState(null);
  const [driverName, setDriverName] = useState('');
  const [driverMobile, setDriverMobile] = useState('');
  const [licenseFront, setLicenseFront] = useState(null);
  const [licenseBack, setLicenseBack] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [currentSetFile, setCurrentSetFile] = useState(null);

  const removeImage = (type) => {
    switch (type) {
      case 'aadhaarFront':
        setAadhaarFront(null);
        break;
      case 'aadhaarBack':
        setAadhaarBack(null);
        break;
      case 'panCard':
        setPanCard(null);
        break;
      case 'selfie':
        setSelfie(null);
        break;
    }
  };

  const DocumentButton = ({ type, icon, label, uploaded, image }) => (
      <View style={styles.uploadButtonContainer}>
        <TouchableOpacity
          style={[styles.uploadButton, uploaded && styles.uploadedButton]}
          onPress={() => handleUpload(type)}
        >
          <Ionicons name={icon} size={24} color={uploaded ? "#EC4A4D" : "#EC4A4D"} />
          <Text style={[styles.uploadText, uploaded && styles.uploadedText]}>
            {uploaded ? label.replace('Upload', 'Uploaded') : label}
          </Text>
        </TouchableOpacity>
        {uploaded && (
          <TouchableOpacity 
            style={styles.removeButton}
            onPress={() => removeImage(type)}
          >
            <Ionicons name="close-circle" size={20} color="#EF4A4D" />
          </TouchableOpacity>
        )}
      </View>
    );

  const fetchMyDriverData = () => {
    setDriverName('John Doe');
    setDriverMobile('9876543210');
  };

  const handleSubmit = () => {
    Alert.alert('Success', 'Driver details submitted successfully!');
    navigation.replace('My Vehicle');
  };

  const handleUpload = (setFile) => {
    Alert.alert('Upload Option', 'Choose an option', [
      { text: 'Camera', onPress: () => openCamera(setFile) },
      { text: 'Gallery', onPress: () => pickFromGallery(setFile) },
      { text: 'Cancel', style: 'cancel' },
    ]);
  };

  const pickFromGallery = async (setFile) => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permission.granted) {
      Alert.alert('Permission required', 'Please allow media access.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.7,
    });

    if (!result.canceled) {
      const file = result.assets[0];
      const image = {
        uri: file.uri,
        name: file.fileName || file.uri.split('/').pop(),
        type: file.type || 'image/jpeg',
      };
      setPreviewImage(image);
      setCurrentSetFile(() => setFile);
    }
  };

  const openCamera = async (setFile) => {
    const permission = await ImagePicker.requestCameraPermissionsAsync();
    if (!permission.granted) {
      Alert.alert('Permission required', 'Please allow camera access.');
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.7,
    });

    if (!result.canceled) {
      const file = result.assets[0];
      const image = {
        uri: file.uri,
        name: file.fileName || file.uri.split('/').pop(),
        type: file.type || 'image/jpeg',
      };
      setPreviewImage(image);
      setCurrentSetFile(() => setFile);
    }
  };

  const handleDrivingSelfSelection = (value) => {
    setDrivingSelf(value);
    if (value === true) fetchMyDriverData();
    else {
      setDriverName('');
      setDriverMobile('');
    }
  };

  if (previewImage) {
    return (
      <View style={{ flex: 1, backgroundColor: '#000' }}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Image
            source={{ uri: previewImage.uri }}
            style={{ width: '100%', height: '80%', resizeMode: 'contain' }}
          />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 30 }}>
          <TouchableOpacity
            style={[styles.button, styles.retakeButton]}
            onPress={() => {
              setPreviewImage(null);
              setCurrentSetFile(null);
            }}
          >
            <Text style={styles.buttonText}>Retake</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.confirmButton]}
            onPress={() => {
              if (currentSetFile) {
                currentSetFile(previewImage);
                setPreviewImage(null);
                setCurrentSetFile(null);
              }
            }}
          >
            <Text style={styles.buttonText}>Confirm</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.attractiveContainer}>
      <View style={styles.attractiveHeader}>
        <View style={styles.headerIconCircle}>
          <Ionicons name="person" size={32} color="#fff" />
        </View>
        <Text style={styles.attractiveHeaderText}>Driver Details</Text>
        <Text style={styles.attractiveHeaderSubText}>Enter driver information to get started</Text>
      </View>

      <ScrollView contentContainerStyle={styles.attractiveScrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.cardSection}>
          <Text style={styles.question}>I will be driving this vehicle</Text>
          <View style={styles.checkboxRow}>
            <TouchableOpacity
              style={[styles.checkbox, drivingSelf === true && styles.checked]}
              onPress={() => handleDrivingSelfSelection(true)}
            >
              <Text style={styles.checkboxText}>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.checkbox, drivingSelf === false && styles.checked]}
              onPress={() => handleDrivingSelfSelection(false)}
            >
              <Text style={styles.checkboxText}>No</Text>
            </TouchableOpacity>
          </View>
        </View>

        {drivingSelf !== null && (
          <>
            <View style={styles.cardSection}>
              <Text style={styles.inputLabel}>Driver Name</Text>
              <View style={styles.inputWrapper}>
                <Ionicons name="person-outline" size={24} color="#EC4A4D" style={styles.inputIcon} />
                <TextInput
                  style={styles.inputField}
                  placeholder="Enter driver name"
                  placeholderTextColor="#94a3b8"
                  value={driverName}
                  onChangeText={setDriverName}
                  editable={!drivingSelf}
                />
              </View>
            </View>

            <View style={styles.cardSection}>
              <Text style={styles.inputLabel}>Mobile Number</Text>
              <View style={styles.inputWrapper}>
                <Ionicons name="call-outline" size={24} color="#EC4A4D" style={styles.inputIcon} />
                <TextInput
                  style={styles.inputField}
                  placeholder="Enter mobile number"
                  placeholderTextColor="#94a3b8"
                  value={driverMobile}
                  onChangeText={setDriverMobile}
                  editable={!drivingSelf}
                  keyboardType="numeric"
                />
              </View>
            </View>
          </>
        )}

        {/* Driving License Section with Front/Back Upload */}
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Driving License</Text>
          <View style={styles.uploadRow}>
            <DocumentButton
              icon="camera"
              label={licenseFront ? "Front Uploaded ✓" : "Upload Front"}
              onPress={() => handleUpload(setLicenseFront)}
              uploaded={!!licenseFront}
              image={licenseFront}
            />
            <DocumentButton
              icon="camera"
              label={licenseBack ? "Back Uploaded ✓" : "Upload Back"}
              onPress={() => handleUpload(setLicenseBack)}
              uploaded={!!licenseBack}
              image={licenseBack}
            />
          </View>
        </View>

        <TouchableOpacity
          style={styles.submitButton}
          onPress={handleSubmit}
        >
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  attractiveContainer: {
    flex: 1,
    backgroundColor: '#f1f5f9',
  },
  attractiveHeader: {
    backgroundColor: '#EC4D4A',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingTop: 40,
    paddingBottom: 24,
    alignItems: 'center',
    marginBottom: 10,
    shadowColor: '#EC4D4A',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
  headerIconCircle: {
    backgroundColor: '#D43B38',
    borderRadius: 32,
    width: 64,
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  attractiveHeaderText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  attractiveHeaderSubText: {
    color: '#FFE5E5',
    fontSize: 14,
    marginBottom: 2,
  },
  attractiveScrollContent: {
    padding: 18,
    paddingBottom: 120,
  },
  cardSection: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 18,
    marginBottom: 18,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.07,
    shadowRadius: 6,
    elevation: 2,
  },
  question: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 12,
  },
  checkboxRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  checkbox: {
    flex: 1,
    backgroundColor: '#f8fafc',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 6,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  checked: {
    backgroundColor: '#FEF2F2',
    borderColor: '#EC4A4D',
  },
  checkboxText: {
    fontSize: 16,
    color: '#1f2937',
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 8,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8fafc',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  inputIcon: {
    marginRight: 10,
  },
  inputField: {
    flex: 1,
    fontSize: 16,
    color: '#1E293B',
    paddingVertical: 0,
  },
  submitButton: {
    backgroundColor: '#EC4A4D',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20,
  },
  submitText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
  section: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 1,
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1E293B',
    marginBottom: 12,
  },
  uploadRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  uploadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eff6ff',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#dbeafe',
    flex: 1,
    marginHorizontal: 5,
    justifyContent: 'center',
  },
  uploadedButton: {
    backgroundColor: '#ECFDF5',
    borderColor: '#A7F3D0',
  },
  uploadText: {
    marginLeft: 8,
    color: '#EC4A4D',
    fontWeight: '500',
    fontSize: 14,
  },
  uploadedText: {
    color: '#10B981',
  },
  button: {
    padding: 15,
    borderRadius: 8,
    width: '45%',
    alignItems: 'center',
  },
  retakeButton: {
    backgroundColor: '#EF4444',
  },
  confirmButton: {
    backgroundColor: '#10B981',
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
  },
});

export default DriverDetailsScreen;