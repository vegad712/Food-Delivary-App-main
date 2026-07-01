import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Switch,
} from "react-native";
import { styles } from "./styles";
import Icon from "react-native-vector-icons/Feather";
import { useAppNavigation } from '../../hooks';
import { SafeAreaView } from "react-native-safe-area-context";

const ProfileScreen = () => {
      const navigation = useAppNavigation('LoginScreen');
    
  const [push, setPush] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [sound, setSound] = useState(true);
  const [autoUpdate, setAutoUpdate] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <SafeAreaView>

      {/* HEADER */}
      <View style={styles.headerRow}>
<Text style={styles.icon}>←</Text>   
        <Text style={styles.headerTitle}>Profile</Text>
        <Text style={styles.icon}>⋮</Text>
      </View>

      {/* USER CARD */}
      <View style={styles.userCard}>
        <Image
          source={{
            uri: "https://i.pravatar.cc/150?img=5",
          }}
          style={styles.avatar}
        />
        <View>
          <Text style={styles.username}>Thomas K. Wilson</Text>
          <Text style={styles.subText}>+44 20 1234 5629</Text>
          <Text style={styles.subText}>thomas.abc.inc@gmail.com</Text>
        </View>

        <TouchableOpacity >

                  <Text style={styles.icon}>     ✎ </Text>   

ִֶָ        </TouchableOpacity>
      </View>

      {/* LOGOUT */}
      <TouchableOpacity style={styles.logoutRow} onPress={()=>navigation.navigate('LoginScreen')}>
        <Text style={styles.icon}>👤 </Text>   

       <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>

      {/* MENU LIST */}
      <View style={styles.listCard}>
        {[
          "My Locations",
          "My Promotions",
          "Payment Methods",
          "Messages",
          "Invite Friends",
          "Security",
          "Help Center",
        ].map((item, i) => (
          <View style={styles.row} key={i}>
            <Text style={styles.rowText}>{item}</Text>
                    <Text style={styles.icon}>› </Text>

         </View>
        ))}

        {/* Language */}
        <View style={styles.row}>
          <Text style={styles.rowText}>Language</Text>
          <View style={styles.languageBox}>
            <Text style={{ marginRight: 6 }}>English</Text>
                           <Text style={styles.icon}>友</Text>

          </View>
        </View>

        {/* Switches */}
        <View style={styles.row}>
          <Text style={styles.rowText}>Push Notification</Text>
          <Switch value={push} onValueChange={setPush} />
        </View>

        <View style={styles.row}>
          <Text style={styles.rowText}>Dark Mode</Text>
          <Switch value={darkMode} onValueChange={setDarkMode} />
        </View>

        <View style={styles.row}>
          <Text style={styles.rowText}>Sound</Text>
          <Switch value={sound} onValueChange={setSound} />
        </View>

        <View style={styles.row}>
          <Text style={styles.rowText}>Automatically Updated</Text>
          <Switch value={autoUpdate} onValueChange={setAutoUpdate} />
        </View>

        {/* Footer */}
        <Text style={styles.footerText}>Term of Service</Text>
        <Text style={styles.footerText}>Privacy Policy</Text>
        <Text style={styles.footerText}>About App</Text>
      </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default ProfileScreen;
