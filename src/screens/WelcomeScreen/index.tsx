import React, { useEffect } from 'react';
import { View, Text, ImageBackground } from 'react-native';

import { AppImages, AppStrings } from '../../utils';
import { useAppNavigation } from '../../hooks';
import { styles } from './styles';

const WelcomeScreen = () => {
  const navigation = useAppNavigation('WelcomeScreen');

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('IntroScreen');
    }, 2000);
  }, [navigation]);

  return (
    <View style={[styles.flexContainer]}>
      <ImageBackground
        source={AppImages.LOGO}
        resizeMode="cover"
        style={[styles.image]}
        imageStyle={styles.imageBorder}
      >
        <View style={[styles.textBox]}>
          <Text style={[styles.text1]}>{AppStrings.welcome_to}</Text>
          <Text style={[styles.text2]}>{AppStrings.speedy_chow}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default WelcomeScreen;
