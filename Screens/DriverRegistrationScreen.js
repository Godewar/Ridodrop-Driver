import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert,
  StyleSheet,
  Image,
  TextInput
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const DriverRegistrationScreen = () => {
  const [name, setName] = useState('');
  const [aadhaarFront, setAadhaarFront] = useState(null);
  const [aadhaarBack, setAadhaarBack] = useState(null);
  const [panCard, setPanCard] = useState(null);
  const [selfie, setSelfie] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [currentUploadType, setCurrentUploadType] = useState('');
  const navigation = useNavigation();

  const handleUpload = async (type) => {
    setCurrentUploadType(type);
    
    // For selfie, only allow camera
    if (type === 'selfie') {
      await openCamera();
      return;
    }

    Alert.alert(
      'Upload Option',
      'Choose an option',
      [
        { text: 'Camera', onPress: () => openCamera() },
        { text: 'Gallery', onPress: () => pickFromGallery() },
        { text: 'Cancel', style: 'cancel' },
      ]
    );
  };

  const pickFromGallery = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permission.granted) {
      Alert.alert('Permission required', 'Please allow media access.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.8,
      allowsEditing: true,
      aspect: [4, 3],
    });

    if (!result.canceled) {
      handleImageResult(result);
    }
  };

  const openCamera = async () => {
    const permission = await ImagePicker.requestCameraPermissionsAsync();
    if (!permission.granted) {
      Alert.alert('Permission required', 'Please allow camera access.');
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.8,
      allowsEditing: true,
      aspect: [4, 3],
      cameraType: currentUploadType === 'selfie' ? 'front' : 'back', // 👈 Force front camera for selfie
    });

    if (!result.canceled) {
      handleImageResult(result);
    }
  };

  const handleImageResult = (result) => {
    const file = result.assets[0];
    const imageFile = {
      uri: file.uri,
      name: file.fileName || `image_${Date.now()}.jpg`,
      type: file.type || 'image/jpeg',
    };

    setPreviewImage(imageFile);
  };

  const confirmImage = () => {
    switch (currentUploadType) {
      case 'aadhaarFront':
        setAadhaarFront(previewImage);
        break;
      case 'aadhaarBack':
        setAadhaarBack(previewImage);
        break;
      case 'panCard':
        setPanCard(previewImage);
        break;
      case 'selfie':
        setSelfie(previewImage);
        break;
    }
    setPreviewImage(null);
    setCurrentUploadType('');
  };

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
          <Ionicons name="close-circle" size={20} color="#EC4D4A" />
        </TouchableOpacity>
      )}
    </View>
  );

  const handleSubmit = () => {
    navigation.navigate('Vehicle Register');
  };

  if (previewImage) {
    return (
      <View style={styles.previewContainer}>
        <Image
          source={{ uri: previewImage.uri }}
          style={styles.previewImage}
          resizeMode="contain"
        />
        <View style={styles.previewButtons}>
          <TouchableOpacity
            style={[styles.button, styles.retakeButton]}
            onPress={() => setPreviewImage(null)}
          >
            <Text style={styles.buttonText}>Retake</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.confirmButton]}
            onPress={confirmImage}
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
        <Text style={styles.attractiveHeaderText}>Owner Details</Text>
        <Text style={styles.attractiveHeaderSubText}>Enter your details to get started</Text>
      </View>

      <ScrollView contentContainerStyle={styles.attractiveScrollContent}>
        <View style={styles.cardSection}>
          <Text style={styles.inputLabel}>Full Name</Text>
          <View style={styles.inputWrapper}>
            <Ionicons name="person-outline" size={24} color="#EC4A4D" style={styles.inputIcon} />
            <TextInput
              style={styles.inputField}
              placeholder="Enter your full name"
              placeholderTextColor="#94a3b8"
              value={name}
              onChangeText={setName}
              autoCapitalize="words"
            />
          </View>
        </View>
        
        {/* Aadhaar Card Section */}
        <View style={styles.section}>
          <Text style={styles.label}>Aadhaar Card</Text>
          <View style={styles.uploadRow}>
            <DocumentButton
              type="aadhaarFront"
              icon="camera"
              label="Upload Front"
              uploaded={!!aadhaarFront}
              image={aadhaarFront}
            />
            <DocumentButton
              type="aadhaarBack"
              icon="camera"
              label="Upload Back"
              uploaded={!!aadhaarBack}
              image={aadhaarBack}
            />
          </View>
        </View>

        {/* PAN Card Section */}
        <View style={styles.section}>
          <Text style={styles.label}>PAN Card</Text>
          <DocumentButton
            type="panCard"
            icon="camera"
            label="Upload PAN"
            uploaded={!!panCard}
            image={panCard}
          />
        </View>

        {/* Selfie Section */}
        <View style={styles.section}>
          <Text style={styles.label}>Owner Selfie</Text>
          <DocumentButton
            type="selfie"
            icon="camera"
            label="Take Selfie"
            uploaded={!!selfie}
            image={selfie}
          />
        </View>

        <TouchableOpacity
          style={styles.submitButton}
          onPress={handleSubmit}
        >
          <Text style={styles.submitText}>Submit Documents</Text>
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
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f8fafc',
    marginTop:20
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#1e293b',
    marginTop:15
  },
  section: {
    marginBottom: 25,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
    color: '#334155',
  },
  inputLabel:{
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
    color: '#334155',
  },
  uploadRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  uploadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eff6ff',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#dbeafe',
    flex: 1,
    marginHorizontal: 5,
    justifyContent: 'center',
  },
  uploadText: {
    marginLeft: 8,
    color: '#EC4A4D',
    fontWeight: '500',
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
  previewContainer: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  previewImage: {
    width: '100%',
    height: '80%',
  },
  previewButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    padding: 20,
  },
  button: {
    padding: 15,
    borderRadius: 8,
    width: '45%',
    alignItems: 'center',
  },
  retakeButton: {
    backgroundColor: '#ef4444',
  },
  confirmButton: {
    backgroundColor: '#10b981',
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
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
  uploadButtonContainer: {
    flex: 1,
    marginHorizontal: 5,
    position: 'relative',
  },
  uploadedButton: {
    backgroundColor: '#FEF2F2',
    borderColor: '#EC4A4D',
  },
  uploadedText: {
    color: '#EC4A4D',
  },
  removeButton: {
    position: 'absolute',
    right: 5,
    top: 5,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 2,
  }
});

export default DriverRegistrationScreen;

