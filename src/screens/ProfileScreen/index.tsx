import React, { useState } from 'react';
import { useRoute } from '@react-navigation/native';
import RNPickerSelect from 'react-native-picker-select';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  Platform,
  StatusBar,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from "react-native-vector-icons/Feather";
import { launchImageLibrary } from 'react-native-image-picker';
import { styles } from './styles';
import { useAppNavigation } from '../../hooks';
import { AppImages } from '../../utils';

const ProfileScreen = () => {
  const navigation = useAppNavigation("FaceScreen");

  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);

  const [profileImage, setProfileImage] = useState(AppImages.AVTAR);

  const route = useRoute();

  const handleDateChange = (_event: any, selectedDate: any) => {
    setShowDatePicker(false);
    if (selectedDate) {
      const formatted = selectedDate.toLocaleDateString('en-GB');
      setDob(formatted);
    }
  };

  const openGallery = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        quality: 1,
      },
      response => {
        if (response.didCancel) return;

        if (response.assets && response.assets.length > 0) {
          const selected = response.assets[0].uri;
          setProfileImage({ uri: selected });
        }
      }
    );
  };

  return (
    <SafeAreaView
      style={[
        styles.screen,
        {
          paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        },
      ]}
    >
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* ---------------- BACK BUTTON ---------------- */}
        <TouchableOpacity
          style={{
            width: 42,
            height: 42,
            borderRadius: 21,
            backgroundColor: "#fff",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: 15,
            marginTop: 10,
            elevation: 4,
            shadowColor: "#000",
            shadowRadius: 4,
            shadowOpacity: 0.15,
            shadowOffset: { width: 0, height: 2 },
          }}
          onPress={() => navigation.goBack()}
        >
            <Image source={AppImages.BACK} style={styles.backIcon} />
        </TouchableOpacity>

        {/* Title */}
        <Text style={styles.title}>Your Profile</Text>

        {/* Profile Photo */}
        <View style={styles.profileHeader}>
          <View style={styles.profilePhotoWrapper}>
            <Image source={profileImage} style={styles.profilePhoto} />

            <TouchableOpacity
              style={[styles.editIconWrapper, { backgroundColor: "red" }]}
              onPress={openGallery}
            />
          </View>
        </View>

        {/* Phone */}
        <Text style={styles.inputLabel}>Phone Number</Text>
        <TextInput
          style={styles.inputBox}
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
        />

        {/* Email */}
        <Text style={styles.inputLabel}>Email</Text>
        <TextInput
          style={styles.inputBox}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        {/* Full Name */}
        <Text style={styles.inputLabel}>Full Name</Text>
        <TextInput
          style={styles.inputBox}
          value={fullName}
          onChangeText={setFullName}
        />

        {/* DOB */}
        <View style={styles.row}>
          <View style={styles.halfInput}>
            <Text style={styles.inputLabel}>Date of Birth</Text>
            <TouchableOpacity onPress={() => setShowDatePicker(true)}>
              <TextInput
                style={styles.inputBox}
                value={dob}
                editable={false}
                placeholder="07/11/1997"
              />
            </TouchableOpacity>

            {showDatePicker && (
              <DateTimePicker
                value={new Date()}
                mode="date"
                display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                onChange={handleDateChange}
                maximumDate={new Date()}
              />
            )}
          </View>
        </View>

        {/* Gender */}
        <View style={styles.halfInput}>
          <Text style={styles.inputLabel}>Gender</Text>
          <View style={styles.dropdownWrapper}>
            <RNPickerSelect
              value={gender}
              onValueChange={setGender}
              placeholder={{ label: 'Select Gender', value: null }}
              items={[
                { label: 'Male', value: 'Male' },
                { label: 'Female', value: 'Female' },
              ]}
              style={{
                inputIOS: styles.inputBox,
                inputAndroid: styles.inputBox,
                placeholder: { color: '#999' },
              }}
              useNativeAndroidPickerStyle={false}
            />
          </View>
        </View>

        {/* Address */}
        <Text style={styles.inputLabel}>Address</Text>
        <TextInput
          style={[styles.inputBox, { height: 80 }]}
          value={address}
          onChangeText={setAddress}
          multiline
        />

        {/* Continue Button */}
        <TouchableOpacity 
          style={styles.continueBtn}
          onPress={() => navigation.navigate("FaceScreen")}
        >
          <Text style={styles.continueText}>Continue</Text>
        </TouchableOpacity >
              <TouchableOpacity   onPress={() => navigation.navigate("FaceScreen")}>
        <TouchableOpacity onPress={()=>(navigation.navigate("LoginScreen"))}><Text style={styles.skipText}>Skip</Text></TouchableOpacity>
</TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
