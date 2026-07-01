import React, { useEffect, useRef } from 'react';
import { View, Animated } from 'react-native';

import { AppImages, AppStrings } from '../../utils';
import { useAppNavigation } from '../../hooks';
import { styles } from './styles';

const LoadingScreen = () => {
  const navigation = useAppNavigation('LoadingScreen');

  const loaderAnim = useRef(new Animated.Value(0)).current; // width animation
  const imageOpacity = useRef(new Animated.Value(0)).current;
  const bottomTextOpacity = useRef(new Animated.Value(0)).current;
  const headerOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // 1️⃣ Loader animation starts immediately
    Animated.timing(loaderAnim, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: false,
    }).start(() => {
      navigation.navigate('WelcomeScreen');
    });

    // 2️⃣ Image + bottom text fade in as soon as loader starts
    Animated.parallel([
      Animated.timing(imageOpacity, {
        toValue: 1,
        duration: 700,
        delay: 300, // slight delay
        useNativeDriver: true,
      }),
      Animated.timing(bottomTextOpacity, {
        toValue: 1,
        duration: 700,
        delay: 300,
        useNativeDriver: true,
      }),
    ]).start();

    // 3️⃣ Header text fades in after image + bottom text
    Animated.timing(headerOpacity, {
      toValue: 1,
      duration: 800,
      delay: 1300,
      useNativeDriver: true,
    }).start();
  }, []);

  const animatedWidth = loaderAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
  });

  return (
    <View style={styles.flexContainer}>
      <View style={styles.container}>
        {/* Fade-in IMAGE */}
        <Animated.Image
          source={AppImages.COMPANY_LOGO}
          style={[styles.image, { opacity: imageOpacity }]}
          resizeMode="contain"
        />

        {/* Fade-in HEADER */}
        <Animated.Text style={[styles.headerText, { opacity: headerOpacity }]}>
          {AppStrings.speedy_chow}
        </Animated.Text>
        <Animated.Text style={[styles.mediumText, { opacity: headerOpacity }]}>
          {AppStrings.version}
        </Animated.Text>
      </View>

      <View style={styles.bottomContainer}>
        {/* Fade-in BOTTOM TEXT */}
        <Animated.Text
          style={[styles.bottomText1, { opacity: bottomTextOpacity }]}
        >
          {AppStrings.as_fast_as_lightning}
        </Animated.Text>
        <Animated.Text
          style={[styles.bottomText2, { opacity: bottomTextOpacity }]}
        >
          {AppStrings.as_delicious_as_thunder}
        </Animated.Text>

        {/* Loader bar */}
        <View style={styles.loader}>
          <Animated.View
            style={[styles.loaderFill, { width: animatedWidth }]}
          />
        </View>
      </View>
    </View>
  );
};

export default LoadingScreen;
