
// import React, { useState } from 'react';
// import { useNavigation } from '@react-navigation/native';
// import {
//   View,
//   Text,
//   TextInput,
//   Image,
//   TouchableOpacity,
//   StyleSheet,
//   SafeAreaView,
// } from 'react-native';

// const MobileNumberScreen = () => {
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const navigation = useNavigation();

//   const handleContinue = () => {
//     navigation.replace('Otp');
//     console.log('Continue with:', phoneNumber);
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       {/* Top-right logo */}
//       <View style={styles.topRightLogoContainer}>
//         <Image
//           source={require('../assets/AA.png')} // Replace with your top-right logo
//           style={styles.topRightLogo}
//         />
//       </View>

//       <Image
//         source={require('../assets/pngwing.com.png')} // Main logo or illustration
//         style={styles.image}
//         resizeMode="contain"
//       />

//       <View style={styles.card}>
//         <Text style={styles.logo}> India's #1 Fast{"\n"}Logistics App</Text>
    

//         {/* Divider with text */}
//         <View style={styles.dividerContainer}>
//           <View style={styles.line} />
//           <Text style={styles.dividerText}>Log in or sign up</Text>
//           <View style={styles.line} />
//         </View>

//         <View style={styles.inputRow}>
//           <View style={styles.countryCode}>
//             <Text style={{ fontSize: 20 }}>🇮🇳</Text>
//             {/* <Text style={styles.codeText}>+91</Text> */}
//           </View>

//           <TextInput
//             style={styles.input}
//             placeholder="Mobile Number"
//             keyboardType="phone-pad"
//             maxLength={10}
//             value={phoneNumber}
//             onChangeText={setPhoneNumber}
//           />
//         </View>

//         <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
//           <Text style={styles.continueText}>Continue</Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default MobileNumberScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F5F6FA',
//     alignItems: 'center',
//     marginTop:120,
//     fontFamily:'League Spartan'
//   },
//   topRightLogoContainer: {
//     position: 'absolute',
//     top: 40,
//     right: 20,
//     zIndex: 1,
//   },
//   topRightLogo: {
//     width: 40,
//     height: 40,
    
//   },
//   image: {
//     width: '90%',
//     height: 250,
//     marginTop: 80,
//   },
//   card: {
//     width: '100%',
//     backgroundColor: '#fff',
//     borderTopLeftRadius: 30,
//     borderTopRightRadius: 30,
//     padding: 20,
//     alignItems: 'center',
//   },
//   logo: {
//     fontSize: 28,
//     fontFamily: 'League Spartan',
//     fontWeight:'bold',
//       textAlign: 'center',
     
//     color: '#000000',
//     marginTop: 20,
//     marginBottom: 10,
//   },
//   dividerContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginVertical: 20,
//     fontWeight:'bold',
    
//   },
//   line: {
//     flex: 1,
//     height: 1,
//     backgroundColor: '#ccc',
//   },
//   dividerText: {
//     marginHorizontal: 10,
//     fontSize: 18,
//     color: '#999',
//     fontWeight:'bold',

//   },
//   inputRow: {
//     flexDirection: 'row',
//     marginTop: 10,
//     alignItems: 'center',
//     width: '100%',
//   },
//   countryCode: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#eee',
//     paddingHorizontal: 12,
//     paddingVertical: 10,
//     borderRadius: 8,
//     marginRight: 10,
//   },
//   codeText: {
//     marginLeft: 5,
//     fontSize: 16,
//   },
//   input: {
//     flex: 1,
//     backgroundColor: '#eee',
//     borderRadius: 8,
//     paddingHorizontal: 14,
//     paddingVertical: 10,
//     fontSize: 16,
//   },
//   continueButton: {
//     // marginTop: 30,
//     // backgroundColor: '#0057FF',
//     // paddingVertical: 14,
//     // paddingHorizontal: 80,
//     // borderRadius: 30,
//     //  width: '80%', 
//      backgroundColor: '#FF6B6B', // Example color (change as needed)
//     paddingVertical: 15,       // Increase for taller button
//     paddingHorizontal: 30,     // Increase for wider button
//     borderRadius: 25,          // Adjust for rounded corners
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: '80%',             // Set a specific width (or use fixed pixels)
//     marginVertical: 10, 
     
//   },
//   continueText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: '600',
//      },
  
// });

// import React, { useState } from 'react';
// import { useNavigation } from '@react-navigation/native';
// // import CheckBox from '@react-native-community/checkbox'; 
// import {
//   View,
//   Text,
//   TextInput,
//   Image,
//   TouchableOpacity,
//   StyleSheet,
//   SafeAreaView,
//   Linking,
// } from 'react-native';

// const MobileNumberScreen = () => {
//   const [phoneNumber, setPhoneNumber] = useState('');
// const [termsChecked, setTermsChecked] = useState(false);
//   const [privacyChecked, setPrivacyChecked] = useState(false);
//   const navigation = useNavigation();

//   const handleContinue = () => {
//   //  if (!termsChecked || !privacyChecked) {
//   //     alert('Please agree to both Terms & Conditions and Privacy Policy');
//   //     return;
//   //   }
//     navigation.replace('Otp');
//     console.log('Continue with:', phoneNumber);
//   };

//    const openLink = (url) => {
//     Linking.openURL(url);
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       {/* Top-right logo (optional) */}
//       <View style={styles.topRightLogoContainer}>
//         {/* Uncomment and add logo if needed */}
//         <Image source={require('../assets/Ridodrop.png')} style={styles.topRightLogo} />
//       </View>

//       {/* Main image/logo */}
//       {/* <Image
//         source={require('../assets/pngwing.com.png')}
//         style={styles.image}
//         resizeMode="contain"
//       /> */}

//       {/* Bottom card */}
//       <View style={styles.card}>
//         {/* <Text style={styles.logo}>India's #1 Fast{"\n"}Logistics App</Text> */}

//         {/* <View style={styles.dividerContainer}> */}
//           <View style={styles.line} />
//           {/* <Text style={styles.dividerText}>Log in or sign up</Text> */}
//           <View style={styles.line} />
//         {/* </View> */}

//         {/* Phone input row */}
//         <View style={styles.inputRow}>
//           {/* <View style={styles.countryCode}>
//             <Text style={styles.flagText}>🇮🇳</Text>
//             <Text style={styles.codeText}>+91</Text>
//           </View> */}
//            <View style={styles.countryCode}>
//     <Text style={styles.flagText}>🇮🇳</Text>
//     <View style={styles.verticalLine} />
//     <Text style={styles.codeText}>+91</Text>
//      {/* This is the line after +91 */}
//   </View>
//           <TextInput
//             style={styles.mobileInput}
//             placeholder="Enter Mobile Number"
//             keyboardType="phone-pad"
//             maxLength={10}
//             value={phoneNumber}
//             onChangeText={setPhoneNumber}
//           />
//         </View>


         
//   {/* <TouchableOpacity style={styles.checkboxRow} onPress={() => setTermsChecked(!termsChecked)}>
//         <Text style={styles.checkbox}>{termsChecked ? '✅' : '⬜️'}</Text>
//         <Text style={styles.label}>I agree to the Terms & Conditions</Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.checkboxRow} onPress={() => setPrivacyChecked(!privacyChecked)}>
//         <Text style={styles.checkbox}>{privacyChecked ? '✅' : '⬜️'}</Text>
//         <Text style={styles.label}>I agree to the Privacy Policy</Text>
//       </TouchableOpacity> */}


//         {/* Continue button */}
//         <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
//           <Text style={styles.continueText}>Continue</Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default MobileNumberScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F5F6FA',
//     alignItems: 'center',
//     marginTop: 130,
//   },
//   topRightLogoContainer: {
//     position: 'absolute',
//     top: 40,
//     right: 20,
//     zIndex: 1,
//   },
//   topRightLogo: {
//     width: 40,
//     height: 40,
//   },
//   image: {
//     width: '90%',
//     height: 250,
//     marginTop: 80,
//   },
//   card: {
//     width: '100%',
//     backgroundColor: '#fff',
//     borderTopLeftRadius: 30,
//     borderTopRightRadius: 30,
//     padding: 20,
//     alignItems: 'center',
//   },
//   logo: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     color: '#000',
//     marginTop: 20,
//     marginBottom: 10,
//   },
//   dividerContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginVertical: 20,
//   },
//   line: {
//     flex: 1,
//     height: 1,
//     backgroundColor: '#ccc',
//   },
//   dividerText: {
//     marginHorizontal: 10,
//     fontSize: 18,
//     color: '#999',
//     fontWeight: 'bold',
//   },
//   inputRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     borderRadius: 8,
//     paddingHorizontal: 12,
//     height: 50,
//     width: '80%',
//     marginTop: 10,
//     borderWidth: 1,
//     borderColor: '#ccc',
//   },
//   countryCode: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginRight: 10,
//   },
//   flagText: {
//     fontSize: 20,
//     marginRight: 5,
//   },
//   codeText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   mobileInput: {
//     flex: 1,
//     fontSize: 16,
//     fontWeight :"bold"
//   },
  
//   continueButton: {
//     backgroundColor: 'red',
//     paddingVertical: 15,
//     paddingHorizontal: 30,
//     borderRadius: 10,
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: '80%',
//     marginVertical: 20,
//   },
//   continueText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: '600',
//   },
//   verticalLine: {
//   height: 25,
//   width: 2,
//   backgroundColor: 'black',
//   marginLeft: 10,
//   marginRight: 10,
// },
//  checkboxRow: {
//     flexDirection: 'row',
//     alignItems: 'flex-start',
//     marginVertical: 4,
//   },
//   checkbox: {
//     fontSize: 16,
//     marginRight: 10,
    
//   },
//   label: {
//     fontSize: 16,
//     color: '#333',
//   },
//   checkboxContainer: {
//   flexDirection: 'row',
//   alignItems: 'flex-start',
//   marginBottom: 4, // reduced from 10 to 4
// },
// });


import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Linking,
  ScrollView,
} from 'react-native';

const MobileNumberScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [termsChecked, setTermsChecked] = useState(false);
  const [privacyChecked, setPrivacyChecked] = useState(false);
  const navigation = useNavigation();

  const handleContinue = () => {
    // if (!termsChecked || !privacyChecked) {
    //   alert('Please agree to both Terms & Conditions and Privacy Policy');
    //   return;
    // }
    navigation.replace('Otp');
    console.log('Continue with:', phoneNumber);
  };

  const openLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Top-left logo with gap */}
      <View style={styles.topLeftLogoContainer}>
        <Image 
          source={require('../assets/Ridodrop.png')} 
          style={styles.topLeftLogo} 
        />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Phone input section */}
        <View style={styles.card}>
         

          {/* Image below mobile number */}
          <Image
            source={require('../assets/pngwing.com.png')}
            style={styles.image}
            resizeMode="contain"
          />

           <View style={styles.inputRow}>
            <View style={styles.countryCode}>
              <Text style={styles.flagText}>🇮🇳</Text>
              <View style={styles.verticalLine} />
              <Text style={styles.codeText}>+91</Text>
            </View>
            <TextInput
              style={styles.mobileInput}
              placeholder="Enter Mobile Number"
              placeholderTextColor="#999"
              keyboardType="phone-pad"
              maxLength={10}
              value={phoneNumber}
              onChangeText={setPhoneNumber}
            />
          </View>

          {/* Checkboxes section */}
          <View style={styles.checkboxesContainer}>
            <TouchableOpacity 
              style={styles.checkboxRow}
              onPress={() => setTermsChecked(!termsChecked)}
            >
              <View style={[styles.checkbox, termsChecked && styles.checkedBox]}>
                {termsChecked && <Text style={styles.checkmark}>✓</Text>}
              </View>
              <Text style={styles.label}>
                I have read and agreed to {' '}
                <Text 
                  style={styles.linkText}
                  onPress={() => openLink('https://example.com/terms')}
                >
                  Terms & Conditions
                </Text> and <Text 
                  style={styles.linkText}
                  onPress={() => openLink('https://example.com/terms')}
                >
                  Privacy Policy 
                </Text>
              </Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.checkboxRow}
              onPress={() => setPrivacyChecked(!privacyChecked)}
            >
              {/* <View style={[styles.checkbox, privacyChecked && styles.checkedBox]}>
                {privacyChecked && <Text style={styles.checkmark}>✓</Text>}
              </View> */}
              {/* <Text style={styles.label}>
                I have read and hereby provide my consent on the {' '}
                <Text 
                  style={styles.linkText}
                  onPress={() => openLink('https://example.com/privacy')}
                >
                  TDS Declaration
                </Text>
              </Text> */}
            </TouchableOpacity>
          </View>

          {/* Continue button */}
          <TouchableOpacity 
            style={styles.continueButton} 
            onPress={handleContinue}
          >
            <Text style={styles.continueText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6FA',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  topLeftLogoContainer: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 1,
  },
  topLeftLogo: {
    width: 120,
    height: 40,
    resizeMode: 'contain',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 25,
    marginHorizontal: 20,
    marginTop: 100,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 15,
    height: 56,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    marginBottom: 30,
  },
  countryCode: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  flagText: {
    fontSize: 20,
  },
  codeText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  verticalLine: {
    height: 25,
    width: 1,
    backgroundColor: '#999',
    marginHorizontal: 10,
  },
  mobileInput: {
    flex: 1,
    fontSize: 13,
    fontWeight: 'bold',
    color: '#333',
  },
  image: {
    width: '100%',
    height: 180,
    marginBottom: 25,
  },
  checkboxesContainer: {
    marginBottom: 25,
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#999',
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkedBox: {
    backgroundColor: 'red',
    borderColor: 'red',
  },
  checkmark: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  label: {
    fontSize: 14,
    color: '#555',
    flex: 1,
  },
  linkText: {
    color: 'red',
    textDecorationLine: 'none',
  },
  continueButton: {
    backgroundColor: 'red',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
   
  },
  continueText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default MobileNumberScreen;