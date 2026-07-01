import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import PhoneInput from 'react-native-phone-number-input';

import { AppImages, AppStrings } from '../../utils';
import { useAppNavigation } from '../../hooks';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';

const RegistrationScreen = () => {
  const navigation = useAppNavigation('LoginScreen');
    const navigate= useAppNavigation('OTPVerificationScreen');
  

  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [remember, setRemember] = useState(false);

  // ENABLE only when all fields + checkbox are true
  const isRegisterEnabled =
    phoneNumber.trim().length > 0 &&
    email.trim().length > 0 &&
    fullName.trim().length > 0 &&
    remember;

  return (
    <SafeAreaView style={[styles.flexContainer]}>
      <View style={styles.card}>
        <Text style={styles.title}>{AppStrings.registration}</Text>

        {/* Country Code + Phone Input */}
        <PhoneInput
          flagButtonStyle={{ paddingLeft: 60 }}
          placeholder="00 0000 0000"
          defaultCode="IN"
          layout="first"
          withShadow
          autoFocus
          containerStyle={[styles.textContainer]}
          codeTextStyle={[styles.codeText]}
          textContainerStyle={[styles.box]}
          textInputStyle={styles.inputText}
          onChangeFormattedText={text => {
            setPhoneNumber(text);
          }}
        />

        {/* Email */}
        <View style={[styles.inputContainerStyle]}>
          <TextInput
            placeholder={AppStrings.email}
            style={[styles.inputStyle]}
            value={email}
            onChangeText={setEmail}
          />
        </View>

        {/* Full Name */}
        <View style={[styles.inputContainerStyle]}>
          <TextInput
            placeholder={AppStrings.full_name}
            style={[styles.inputStyle]}
            value={fullName}
            onChangeText={setFullName}
          />
        </View>

        {/* Remember Me */}
        <TouchableOpacity
          style={styles.rememberRow}
          onPress={() => setRemember(!remember)}
        >
          <View style={[styles.checkbox, remember && styles.checkboxChecked]}>
            {remember && (
              <Image
                source={AppImages.TICK}
                style={styles.tickIcon}
                resizeMode="contain"
              />
            )}
          </View>
          <Text style={styles.rememberText}>{AppStrings.remember_me}</Text>
        </TouchableOpacity>

        {/* Register Button */}
        <TouchableOpacity
          style={[
            styles.signInBtn,
            !isRegisterEnabled && { backgroundColor: '#ccc' },
          ]} onPress={()=>navigate.navigate('OTPVerificationScreen')}
          disabled={!isRegisterEnabled}
        >
          <Text style={styles.signInText}>{AppStrings.register}</Text>
        </TouchableOpacity>

        {/* Divider */}
        <View style={styles.dividerRow}>
          <View style={styles.line} />
          <Text style={styles.orText}>{AppStrings.or_sign_in_with}</Text>
          <View style={styles.line} />
        </View>

        {/* Social Icons */}
        <View style={styles.socialRow}>
          <TouchableOpacity style={[styles.googleBox]}>
            <Image source={AppImages.GOOGLE_LOGO} style={styles.googleIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.facebookBox]}>
            <Image
              source={AppImages.FACEBOOK_LOGO}
              style={styles.facebookIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.appleBox]}>
            <Image source={AppImages.APPLE_LOGO} style={styles.appleIcon} />
          </TouchableOpacity>
        </View>

        {/* Register Link */}
        <Text style={styles.footerText}>
          {AppStrings.dont_have_an_account}{' '}
          <TouchableOpacity onPress={()=>navigation.navigate('LoginScreen')}>
            <Text style={styles.registerText}>Sign In</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default RegistrationScreen;
