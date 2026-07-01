import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  Animated,
  Dimensions,
} from 'react-native';

import { AppStrings } from '../../utils';
import { useAppNavigation } from '../../hooks';
import { styles } from './styles';

const slides = [
  {
    id: '1',
    title: 'Wide Selection',
    description: 'More than 400 restaurants nationwide.',
    image: require('../../assets/images/image1.png'),
  },
  {
    id: '2',
    title: 'Fast Delivery',
    description: 'Receive goods after 10 minutes.',
    image: require('../../assets/images/image2.png'),
  },
  {
    id: '3',
    title: 'Order Tracking',
    description: 'Track your orders in real-time.',
    image: require('../../assets/images/image3.png'),
  },
  {
    id: '4',
    title: 'Special Offers',
    description: 'Weekly deals and discounts.',
    image: require('../../assets/images/image4.png'),
  },
];

const { width } = Dimensions.get('window');

const IntroScreen = () => {
  const navigation = useAppNavigation('IntroScreen');

  const scrollX = useRef(new Animated.Value(0)).current;
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);

  const viewability = {
    viewAreaCoveragePercentThreshold: 50,
  };

  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  });

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      flatListRef.current.scrollToIndex({ index: currentIndex + 1 });
    } else {
      navigation.navigate('LoginScreen'); // When last slide
    }
  };

  const handleSkip = () => {
    navigation.navigate('LoginScreen');
  };

  return (
    <View style={[styles.flexContainer]}>
      <FlatList
        ref={flatListRef}
        data={slides}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.slide}>
            <Image
              source={item.image}
              style={styles.image}
              resizeMode="contain"
            />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        )}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false },
        )}
        onViewableItemsChanged={onViewableItemsChanged.current}
        viewabilityConfig={viewability}
      />

      {/* Dots */}
      <View style={styles.dotContainer}>
        {slides.map((_, i) => {
          const opacity = scrollX.interpolate({
            inputRange: [(i - 1) * width, i * width, (i + 1) * width],
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp',
          });

          return <Animated.View key={i} style={[styles.dot, { opacity }]} />;
        })}
      </View>

      {/* Next / Skip Buttons */}
      <View style={styles.bottomButtons}>
        {currentIndex === slides.length - 1 ? (
          <>
            <TouchableOpacity style={[styles.enjoyButton]} onPress={handleNext}>
              <Text style={styles.enjoyText}>{AppStrings.start_enjoying}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.loginButton]} onPress={handleSkip}>
              <Text style={styles.loginText}>
                {AppStrings.login_registration}
              </Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
              <Text style={styles.nextText}>{AppStrings.next}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSkip}>
              <Text style={styles.skipText}>{AppStrings.skip}</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
};

export default IntroScreen;
