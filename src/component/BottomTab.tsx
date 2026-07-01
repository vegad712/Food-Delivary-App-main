import React, { useRef, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Animated,
} from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";

import { styles } from "./bottomTabStyles";

const BottomTab = ({ state, descriptors, navigation }: BottomTabBarProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.tabBar}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];

          const label = options.tabBarLabel ?? route.name;
          const isFocused = state.index === index;

          // ⭐ Get icon directly (because in Navigator you passed an image, not a function)
          const icon = options.tabBarIcon;

          // ⭐ Bounce animation
          const scaleAnim = useRef(new Animated.Value(1)).current;

          useEffect(() => {
            Animated.spring(scaleAnim, {
              toValue: isFocused ? 1.25 : 1,
              friction: 4,
              tension: 120,
              useNativeDriver: true,
            }).start();
          }, [isFocused]);

          return (
            <TouchableOpacity
              key={route.key}
              onPress={() => navigation.navigate(route.name)}
              style={styles.tabItem}
              activeOpacity={0.8}
            >
              <Animated.View
                style={[
                  isFocused ? styles.centerActiveIcon : styles.iconWrapper,
                  { transform: [{ scale: scaleAnim }] },
                ]}
              >
                <Image
                  source={icon}
                  resizeMode="contain"
                  style={[
                    styles.icon,
                    isFocused && styles.activeIcon,
                  ]}
                />
              </Animated.View>

              {isFocused && (
                <Text style={styles.activeLabel}>{label}</Text>
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default BottomTab;
