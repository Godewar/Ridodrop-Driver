import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  StyleSheet,
  Image,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';

const VehicleRegistrationScreen = () => {
    const [vehicleNumber, setVehicleNumber] = useState('');
  const [rcFrontFile, setRcFrontFile] = useState(null);
  const [rcBackFile, setRcBackFile] = useState(null);
  const [insuranceFile, setInsuranceFile] = useState(null);
  const [vehicleFrontImage, setVehicleFrontImage] = useState(null);
  const [vehicleBackImage, setVehicleBackImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [currentSetFile, setCurrentSetFile] = useState(null);
  const [selectedCity, setSelectedCity] = useState('');
  const [vehicleType, setVehicleType] = useState('');
  const [vehicleSubType, setVehicleSubType] = useState('');
  const [fuelType, setFuelType] = useState('');
  const [truckSize, setTruckSize] = useState('');
  const [threeWType, setThreeWType] = useState('');
  const [truckBodyType, setTruckBodyType] = useState('');
  const navigation = useNavigation();

  const UploadField = ({ label, file, onUpload }) => (
    <View style={styles.uploadField}>
      <View>
        <Text style={styles.label}>{label}</Text>
        {file && <Text style={styles.fileName}>{file.name}</Text>}
      </View>
      <TouchableOpacity style={styles.uploadButton} onPress={onUpload}>
        <Ionicons name="camera-outline" size={20} color="#dc2626" />
        <Text style={styles.uploadText}>Upload</Text>
      </TouchableOpacity>
    </View>
  );

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
      case 'vehicleFront':
        setVehicleFrontImage(null);
        break;
      case 'vehicleBack':
        setVehicleBackImage(null);
        break;
      case 'rcFront':
        setRcFrontFile(null);
        break;
      case 'rcBack':
        setRcBackFile(null);
        break;
      case 'insurance':
        setInsuranceFile(null);
        break;
    }
  };

    const DocumentButton = ({ type, icon, label, uploaded, image, onPress }) => (
    <View style={styles.uploadButtonContainer}>
      <TouchableOpacity
        style={[styles.uploadButton, uploaded && styles.uploadedButton]}
        onPress={onPress}
      >
        <Ionicons name={icon} size={24} color="#EC4A4D" />
        <Text style={[styles.uploadText, uploaded && styles.uploadedText]}>
          {uploaded ? label.replace('Upload', 'Uploaded ✓') : label}
        </Text>
      </TouchableOpacity>
      {uploaded && (
        <TouchableOpacity 
          style={styles.removeButton}
          onPress={() => {
            if (type === 'rcFront') setRcFrontFile(null);
            else if (type === 'rcBack') setRcBackFile(null);
            else if (type === 'insurance') setInsuranceFile(null);
          }}
        >
          <Ionicons name="close-circle" size={20} color="#EF4444" />
        </TouchableOpacity>
      )}
    </View>
  );

  const handleSubmit = () => {
    navigation.navigate('Driver Details');
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
      setFile({
        uri: file.uri,
        name: file.fileName || file.uri.split('/').pop(),
        type: file.type || 'image/jpeg',
      });
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

  const handleUpload = (setFile) => {
    Alert.alert('Upload Option', 'Choose an option', [
      { text: 'Camera', onPress: () => openCamera(setFile) },
      { text: 'Gallery', onPress: () => pickFromGallery(setFile) },
      { text: 'Cancel', style: 'cancel' },
    ]);
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
            style={[styles.submitButton, styles.submitInactive, { paddingHorizontal: 32 }]}
            onPress={() => {
              setPreviewImage(null);
              setCurrentSetFile(null);
            }}
          >
            <Text style={styles.submitTextInactive}>Retake</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.submitButton, styles.submitActive, { paddingHorizontal: 32 }]}
            onPress={() => {
              if (currentSetFile) {
                currentSetFile(previewImage);
                setPreviewImage(null);
                setCurrentSetFile(null);
              }
            }}
          >
            <Text style={styles.submitTextActive}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.attractiveContainer}>
      <View style={styles.attractiveHeader}>
        <View style={styles.headerIconCircle}>
          <Ionicons name="car-sport" size={32} color="#fff" />
        </View>
        <Text style={styles.attractiveHeaderText}>Vehicle Registration</Text>
        <Text style={styles.attractiveHeaderSubText}>Enter your vehicle details to get started</Text>
      </View>

      <ScrollView contentContainerStyle={styles.attractiveScrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.cardSection}>
        <Text style={styles.inputLabel}>
          Vehicle Registration Number <Text style={styles.required}>*</Text>
        </Text>
        <TextInput
            style={styles.attractiveInput}
          placeholder="Enter vehicle number"
          value={vehicleNumber}
          onChangeText={setVehicleNumber}
            placeholderTextColor="#94a3b8"
        />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Vehicle RC</Text>
          <View style={styles.uploadRow}>
            <DocumentButton
              type="rcFront"
              icon="camera"
              label="Upload Front"
              uploaded={!!rcFrontFile}
              image={rcFrontFile}
              onPress={() => handleUpload(setRcFrontFile)}
            />
            <DocumentButton
              type="rcBack"
              icon="camera"
              label="Upload Back"
              uploaded={!!rcBackFile}
              image={rcBackFile}
              onPress={() => handleUpload(setRcBackFile)}
            />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Vehicle Images</Text>
          <View style={styles.uploadRow}>
            <DocumentButton
              type="vehicleFront"
              icon="camera"
              label="Upload Front"
              uploaded={!!vehicleFrontImage}
              image={vehicleFrontImage}
              onPress={() => handleUpload(setVehicleFrontImage)}
            />
            <DocumentButton
              type="vehicleBack"
              icon="camera"
              label="Upload Back"
              uploaded={!!vehicleBackImage}
              image={vehicleBackImage}
              onPress={() => handleUpload(setVehicleBackImage)}
            />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Vehicle Insurance</Text>
          <DocumentButton
            type="insurance"
            icon="camera"
            label="Upload Insurance"
            uploaded={!!insuranceFile}
            image={insuranceFile}
            onPress={() => handleUpload(setInsuranceFile)}
            fullWidth
          />
        </View>
 
        <View style={styles.cardSection}>
        <Text style={styles.inputLabel}>
          Select Your City <Text style={styles.required}>*</Text>
        </Text>
          <View style={styles.attractivePickerWrapper}>
            <Picker selectedValue={selectedCity} onValueChange={setSelectedCity} style={styles.attractivePicker}>
            <Picker.Item label="-- Select City --" value="" />
            <Picker.Item label="Bangalore" value="Bangalore" />
             <Picker.Item label="Hydrabad" value="Hydrabad" />
            <Picker.Item label="Mumbai" value="Mumbai" />
            <Picker.Item label="Delhi" value="Delhi" />
            <Picker.Item label="Chennai" value="Chennai" />
             <Picker.Item label="Ahemdabad" value="Ahemdabad" />
              <Picker.Item label="Pune" value="Pune" />
          </Picker>
          </View>
        </View>

        <View style={styles.cardSection}>
        <Text style={styles.inputLabel}>
          Type of Vehicle <Text style={styles.required}>*</Text>
        </Text>
          <View style={styles.attractivePickerWrapper}>
            <Picker selectedValue={vehicleType} onValueChange={setVehicleType} style={styles.attractivePicker}>
            <Picker.Item label="-- Select Vehicle Type --" value="" />
            <Picker.Item label="2W" value="2W" />
            <Picker.Item label="3W" value="3W" />
            <Picker.Item label="Truck" value="Truck" />
          </Picker>
          </View>
        </View>

        {vehicleType === '2W' && (
          <View style={styles.cardSection}>
            <Text style={styles.inputLabel}>Select Vehicle Body Type</Text>
            <View style={styles.attractivePickerWrapper}>
              <Picker
                selectedValue={vehicleSubType}
                onValueChange={(value) => {
                  setVehicleSubType(value);
                  setFuelType('');
                }}
                style={styles.attractivePicker}
              >
                <Picker.Item label="-- Select Type --" value="" />
                <Picker.Item label="Scooter" value="Scooter" />
                <Picker.Item label="Bike" value="Bike" />
              </Picker>
            </View>

            {vehicleSubType !== '' && (
              <>
                <Text style={styles.inputLabel}>Select Fuel Type</Text>
                <View style={styles.attractivePickerWrapper}>
                  <Picker selectedValue={fuelType} onValueChange={setFuelType} style={styles.attractivePicker}>
                    <Picker.Item label="-- Select Fuel Type --" value="" />
                    <Picker.Item label="EV" value="EV" />
                    <Picker.Item label="Petrol" value="Petrol" />
                  </Picker>
                </View>
              </>
            )}
          </View>
        )}

       {vehicleType === 'Truck' && (
          <View style={styles.cardSection}>
    <Text style={styles.inputLabel}>Select Vehicle Body Details</Text>
            <View style={styles.attractivePickerWrapper}>
      <Picker selectedValue={truckSize} onValueChange={(value) => {
        setTruckSize(value);
        setTruckBodyType('');
        setFuelType('');
              }} style={styles.attractivePicker}>
        <Picker.Item label="-- Select Size --" value="" />
        <Picker.Item label="17 feet" value="17ft" />
        <Picker.Item label="7 feet" value="7ft" />
        <Picker.Item label="10 feet" value="10ft" />
        <Picker.Item label="14 feet" value="14ft" />
        <Picker.Item label="9 feet" value="9ft" />
      </Picker>
    </View>

    {truckSize === '14ft' && (
      <>
        <Text style={styles.inputLabel}>Select Vehicle Body Type</Text>
                <View style={styles.attractivePickerWrapper}>
          <Picker selectedValue={truckBodyType} onValueChange={(value) => {
            setTruckBodyType(value);
            setFuelType('');
                  }} style={styles.attractivePicker}>
            <Picker.Item label="-- Select Body Type --" value="" />
            <Picker.Item label="Open Body Truck" value="open" />
            <Picker.Item label="Close Body Truck" value="close" />
          </Picker>
        </View>
      </>
    )}

    {truckSize === '14ft' && truckBodyType !== '' && (
      <>
        <Text style={styles.inputLabel}>Select Fuel Type</Text>
                <View style={styles.attractivePickerWrapper}>
                  <Picker selectedValue={fuelType} onValueChange={setFuelType} style={styles.attractivePicker}>
            <Picker.Item label="-- Select Fuel Type --" value="" />
            <Picker.Item label="Diesel" value="Diesel" />
            <Picker.Item label="CNG" value="CNG" />
            <Picker.Item label="EV" value="EV" />
          </Picker>
        </View>
      </>
    )}
          </View>
)}

        {vehicleType === '3W' && (
          <View style={styles.cardSection}>
            <Text style={styles.inputLabel}>Select Vehicle Body Details</Text>
            <View style={styles.attractivePickerWrapper}>
              <Picker selectedValue={threeWType} onValueChange={setThreeWType} style={styles.attractivePicker}>
                <Picker.Item label="-- Select 3W Type --" value="" />
                <Picker.Item label="3 Wheeler" value="3wheeler" />
                <Picker.Item label="Electric 3 Wheeler" value="electric3w" />
                <Picker.Item label="E Loader" value="eloader" />
              </Picker>
            </View>
          </View>
        )}

        {/* <View style={styles.attractiveSubmitContainer}>
        <TouchableOpacity
            style={styles.attractiveSubmitButton}
          onPress={handleSubmit}
        >
            <Text style={styles.attractiveSubmitText}>Submit</Text>
        </TouchableOpacity>
      </View> */}
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
  attractiveInput: {
    backgroundColor: '#f8fafc',
    // borderColor: '#EC4D4A',
    // borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 14,
    marginTop: 8,
    color: '#1e293b',
    fontSize: 16,
  },
  attractivePickerWrapper: {
    backgroundColor: '#f8fafc',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#EC4D4A',
    marginTop: 8,
    marginBottom: 0,
    overflow: 'hidden',
  },
  attractivePicker: {
    paddingHorizontal: 12,
    paddingVertical: 14,
    color: '#1e293b',
  },
  attractiveSubmitContainer: {
    marginTop: 24,
    marginBottom: 30,
    alignItems: 'center',
  },
  attractiveSubmitButton: {
    backgroundColor: '#EC4D4A',
    paddingVertical: 16,
    paddingHorizontal: 60,
    borderRadius: 30,
    shadowColor: '#EC4D4A',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.18,
    shadowRadius: 8,
    elevation: 4,
  },
  attractiveSubmitText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    letterSpacing: 1,
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
  sectionTitle: {
     fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
    // color: '#334155',
    color: '#1f2937',
  },
  uploadRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  uploadField: {
    flexDirection: 'row',
    alignItems: 'center',
      backgroundColor: '#eff6ff',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#dbeafe',
    flex: 1,
    marginHorizontal: 5,
  },
  inputLabel: {
    color: '#1f2937',
    fontWeight: '600',
    fontSize: 16
  },
  fileName: {
    fontSize: 12,
    color: '#6b7280',
    marginTop: 4,
  },
  uploadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eff6ff',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#dbeafe',
    justifyContent: 'center',
  },
  uploadedButton: {
    backgroundColor: '#FEF2F2',
    borderColor: '#EC4A4D',
  },
  uploadText: {
    marginLeft: 8,
    color: '#EC4A4D',
    fontWeight: '500',
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
  },
  submitButton: {
    // backgroundColor: '#EC4D4A',
    // padding: 15,
    // borderRadius: 12,
    // alignItems: 'center',
    backgroundColor: '#EC4A4D',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20,
  },
  // submitInactive: {
  //   backgroundColor: '#CBD5E1',
  // },
  submitActive: {
    backgroundColor: '#10B981',
  },
  submitText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  // submitTextInactive: {
  //   color: '#6b7280',
  // },
  submitTextActive: {
    color: '#fff',
  },
  uploadButtonContainer: {
    flex: 1,
    marginHorizontal: 5,
    position: 'relative',
  },
});

export default VehicleRegistrationScreen;


