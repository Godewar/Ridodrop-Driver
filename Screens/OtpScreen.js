


// import React, { useState, useEffect, useRef } from 'react';
// import { 
//   View, 
//   Text, 
//   TextInput, 
//   TouchableOpacity, 
//   StyleSheet, 
//   SafeAreaView, 
//   Alert,
//   Dimensions,
//   Keyboard
// } from 'react-native';

// const OtpScreen = ({ navigation }) => {
//   // Get dimensions once at component level
//   const { width, height } = Dimensions.get('window');
  
//   const [otp, setOtp] = useState(['', '', '', '']);
//   const [countdown, setCountdown] = useState(30);
//   const [isResendDisabled, setIsResendDisabled] = useState(true);
//   const inputRefs = useRef([]);
//   const correctOTP = '1234'; // Mock OTP - replace with your backend logic

//   // Auto verify when all 4 digits are entered
//   useEffect(() => {
//     if (otp.join('').length === 4) {
//       if (otp.join('') === correctOTP) {
//         Keyboard.dismiss();
//        navigation.replace('DriverRegister');
//       } else {
//         Alert.alert('Invalid OTP', 'Please enter the correct OTP');
//       }
//     }
//   }, [otp, navigation]);

//   // Countdown timer for resend OTP
//   useEffect(() => {
//     let timer;
//     if (countdown > 0) {
//       timer = setTimeout(() => setCountdown(countdown - 1), 1000);
//     } else {
//       setIsResendDisabled(false);
//     }
//     return () => timer && clearTimeout(timer);
//   }, [countdown]);

//   const handleOtpChange = (text, index) => {
//     const newOtp = [...otp];
//     newOtp[index] = text;
//     setOtp(newOtp);

//     // Auto focus to next input
//     if (text && index < 3) {
//       inputRefs.current[index + 1].focus();
//     }
//   };

//   const handleKeyPress = (e, index) => {
//     if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
//       inputRefs.current[index - 1].focus();
//     }
//   };

//   const handleResendOTP = () => {
//     setOtp(['', '', '', '']);
//     setCountdown(30);
//     setIsResendDisabled(true);
//     inputRefs.current[0].focus();
//     Alert.alert('OTP Resent', 'A new OTP has been sent to your mobile number');
//   };

//   // Define styles inside component to access width/height
//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '#F5F6FA',
//     },
//     content: {
//       flex: 1,
//       alignItems: 'center',
//       justifyContent: 'center',
//       padding: width * 0.05,
//     },
//     title: {
//       fontSize: width * 0.06,
//       fontWeight: 'bold',
//       marginBottom: height * 0.01,
//       color: '#333',
//     },
//     subtitle: {
//       color: '#666',
//       marginBottom: height * 0.04,
//       textAlign: 'center',
//       fontSize: width * 0.035,
//       paddingHorizontal: width * 0.1,
//     },
//     otpContainer: {
//       flexDirection: 'row',
//       justifyContent: 'space-between',
//       width: width * 0.7,
//       marginBottom: height * 0.04,
//     },
//     otpInput: {
//       width: width * 0.14,
//       height: width * 0.14,
//       fontSize: width * 0.06,
//       backgroundColor: '#fff',
//       borderRadius: width * 0.03,
//       borderWidth: 1,
//       borderColor: '#ccc',
//       textAlign: 'center',
//       color: '#333',
//     },
//     otpInputFilled: {
//       borderColor: '#EC4D4A',
//     },
//     verifyButton: {
//       backgroundColor: '#EC4D4A',
//       paddingVertical: height * 0.02,
//       borderRadius: width * 0.03,
//       width: width * 0.8,
//       alignItems: 'center',
//       justifyContent: 'center',
//       marginBottom: height * 0.03,
//       elevation: 3,
//       shadowColor: '#000',
//       shadowOffset: { width: 0, height: 2 },
//       shadowOpacity: 0.2,
//       shadowRadius: 4,
//     },
//     disabledButton: {
//       backgroundColor: '#cccccc',
//     },
//     verifyText: {
//       color: 'white',
//       fontSize: width * 0.04,
//       fontWeight: '600',
//     },
//     resendText: {
//       fontSize: width * 0.035,
//       color: '#666',
//     },
//     resendLink: {
//       color: '#EC4D4A',
//       fontWeight: 'bold',
//     },
//     countdownText: {
//       color: '#999',
//     },
//   });

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.content}>
//         <Text style={styles.title}>Enter OTP</Text>
//         <Text style={styles.subtitle}>We've sent an OTP to your mobile number</Text>

//         <View style={styles.otpContainer}>
//           {[0, 1, 2, 3].map((index) => (
//             <TextInput
//               key={index}
//               ref={(ref) => (inputRefs.current[index] = ref)}
//               style={[
//                 styles.otpInput,
//                 otp[index] && styles.otpInputFilled
//               ]}
//               placeholder="•"
//               placeholderTextColor="#999"
//               keyboardType="number-pad"
//               maxLength={1}
//               value={otp[index]}
//               onChangeText={(text) => handleOtpChange(text, index)}
//               onKeyPress={(e) => handleKeyPress(e, index)}
//               textAlign="center"
//               selectionColor="#EC4D4A"
//             />
//           ))}
//         </View>

//         <TouchableOpacity 
//           style={[
//             styles.verifyButton, 
//             otp.join('').length !== 4 && styles.disabledButton
//           ]} 
//           onPress={() => otp.join('') === correctOTP && navigation.replace('AccountScreen')}
//           activeOpacity={0.8}
//           disabled={otp.join('').length !== 4}
//         >
//           <Text style={styles.verifyText}>Verify & Continue</Text>
//         </TouchableOpacity>

//         <Text style={styles.resendText}>
//           Didn't receive code?{' '}
//           {isResendDisabled ? (
//             <Text style={styles.countdownText}>Resend in {countdown}s</Text>
//           ) : (
//             <Text style={styles.resendLink} onPress={handleResendOTP}>
//               Resend
//             </Text>
//           )}
//         </Text>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default OtpScreen;

import React, { useState, useEffect, useRef } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  SafeAreaView, 
  Alert,
  Dimensions,
  Keyboard
} from 'react-native';

const OtpScreen = ({ navigation }) => {
  // Get dimensions once at component level
  const { width, height } = Dimensions.get('window');
  
  const [otp, setOtp] = useState(['', '', '', '']);
  const [countdown, setCountdown] = useState(30);
  const [isResendDisabled, setIsResendDisabled] = useState(true);
  const inputRefs = useRef([]);
  const correctOTP = '1234'; // Mock OTP - replace with your backend logic

  // Auto verify when all 4 digits are entered
  useEffect(() => {
    if (otp.join('').length === 4) {
      if (otp.join('') === correctOTP) {
        Keyboard.dismiss();
        navigation.replace('AccountScreen');
      } else {
        Alert.alert('Invalid OTP', 'Please enter the correct OTP');
      }
    }
  }, [otp, navigation]);

  // Countdown timer for resend OTP
  useEffect(() => {
    let timer;
    if (countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    } else {
      setIsResendDisabled(false);
    }
    return () => timer && clearTimeout(timer);
  }, [countdown]);

  const handleOtpChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    // Auto focus to next input
    if (text && index < 3) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleResendOTP = () => {
    setOtp(['', '', '', '']);
    setCountdown(30);
    setIsResendDisabled(true);
    inputRefs.current[0].focus();
    Alert.alert('OTP Resent', 'A new OTP has been sent to your mobile number');
  };

  // Define styles inside component to access width/height
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5F6FA',
    },
    content: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: width * 0.05,
    },
    title: {
      fontSize: width * 0.06,
      fontWeight: 'bold',
      marginBottom: height * 0.01,
      color: '#333',
    },
    subtitle: {
      color: '#666',
      marginBottom: height * 0.04,
      textAlign: 'center',
      fontSize: width * 0.040,
      paddingHorizontal: width * 0.045,
      fontWeight:'400'
      
    },
    otpContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: width * 0.7,
      marginBottom: height * 0.04,
    },
    otpInput: {
      width: width * 0.14,
      height: width * 0.14,
      fontSize: width * 0.06,
      backgroundColor: '#fff',
      borderRadius: width * 0.03,
      borderWidth: 1,
      borderColor: '#ccc',
      textAlign: 'center',
      color: '#333',
    },
    otpInputFilled: {
      borderColor: '#EC4D4A',
      // backgroundColor:'#EC4D4A',
      // color: '#EC4D4A',
      
    },
    verifyButton: {
      backgroundColor: '#EC4D4A',
      paddingVertical: height * 0.02,
      borderRadius: width * 0.03,
      width: width * 0.8,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: height * 0.03,
      elevation: 3,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
    },
    disabledButton: {
      backgroundColor: '#cccccc',
    },
    verifyText: {
      color: '#fff',
      fontSize: width * 0.04,
      fontWeight: '600',
    },
    resendText: {
      fontSize: width * 0.035,
      color: '#666',
    },
    resendLink: {
      color: '#EC4D4A',
      fontWeight: 'bold',
    },
    countdownText: {
      color: '#999',
    },
    logo : {
      fontSize:25
    }
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.logo}>Ridodrop GIF</Text>
        <Text style={styles.title}>OTP Verification</Text>
        <Text style={styles.subtitle}>We have sent a OTP to <Text style={{fontWeight: 'bold', fontSize: width * 0.050,}}>+91 9578457895</Text> </Text>

        <View style={styles.otpContainer}>
          {[0, 1, 2, 3].map((index) => (
            <TextInput
              key={index}
              ref={(ref) => (inputRefs.current[index] = ref)}
              style={[
                styles.otpInput,
                otp[index] && styles.otpInputFilled
              ]}
              placeholder="•"
              placeholderTextColor="#999"
              keyboardType="number-pad"
              maxLength={1}
              value={otp[index]}
              onChangeText={(text) => handleOtpChange(text, index)}
              onKeyPress={(e) => handleKeyPress(e, index)}
              textAlign="center"
              selectionColor="#EC4D4A"
            />
          ))}
        </View>

        <TouchableOpacity 
          style={[
            styles.verifyButton, 
            otp.join('').length !== 4 && styles.disabledButton
          ]} 
          onPress={() => otp.join('') === correctOTP && navigation.replace('DriverRegister')}
          activeOpacity={0.8}
          disabled={otp.join('').length !== 4}
        >
          <Text style={styles.verifyText}>Verify </Text>
        </TouchableOpacity>

        <Text style={styles.resendText}>
          Didn't receive code?{' '}
          {isResendDisabled ? (
            <Text style={styles.countdownText}>Resend in {countdown}s</Text>
          ) : (
            <Text style={styles.resendLink} onPress={handleResendOTP}>
              Resend
            </Text>
          )}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default OtpScreen;