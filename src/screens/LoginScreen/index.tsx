import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import PhoneInput from 'react-native-phone-number-input';

import { AppImages, AppStrings } from '../../utils';
import { useAppNavigation } from '../../hooks';
import { styles } from './styles';

const LoginScreen = () => {
  const navigation = useAppNavigation('OTPVerificationScreen');

  const [phoneNumber, setPhoneNumber] = useState('');
  const [remember, setRemember] = useState(false);

  const isSignInEnabled = phoneNumber.trim().length > 0 && remember;

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={[styles.flexContainer, { flex: 1 }]}>
          <View style={[styles.card, { flex: 1, justifyContent: 'space-between' }]}>

            {/* ---------------- TITLE ---------------- */}
            <View>
              <Text style={styles.title}>{AppStrings.login}</Text>

              {/* ---------------- PHONE INPUT ---------------- */}
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
                onChangeFormattedText={text => setPhoneNumber(text)}
              />

              {/* --------------- REMEMBER ME --------------- */}
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

              {/* --------------- SIGN IN BUTTON --------------- */}
              <TouchableOpacity
                style={[
                  styles.signInBtn,
                  !isSignInEnabled && { backgroundColor: '#CCC' },
                ]}
                disabled={!isSignInEnabled}
                onPress={() =>
                  navigation.navigate('OTPVerificationScreen', { phoneNumber })
                }
              >
                <Text style={styles.signInText}>{AppStrings.sign_in}</Text>
              </TouchableOpacity>

              {/* --------------- DIVIDER --------------- */}
              <View style={styles.dividerRow}>
                <View style={styles.line} />
                <Text style={styles.orText}>{AppStrings.or_sign_in_with}</Text>
                <View style={styles.line} />
              </View>

              {/* --------------- SOCIAL LOGIN BUTTONS --------------- */}
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
            </View>

            {/* --------------- REGISTER TEXT AT BOTTOM --------------- */}
            <Text style={[styles.footerText, { marginBottom: 20 }]}>
              {AppStrings.dont_have_an_account}{' '}
              <Text
                style={styles.registerText}
                onPress={() => navigation.navigate('RegistrationScreen')}
              >
                {AppStrings.register}
              </Text>
            </Text>

          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default LoginScreen;
