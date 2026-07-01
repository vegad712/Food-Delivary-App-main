import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useCart } from '../context/CartContext';

export default function CartIcon({ navigation }: any) {
  const { cart } = useCart();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Cart')}
      style={{ marginRight: 15 }}
    >
      <Icon name="cart-outline" size={26} />

      {cart.length > 0 && (
        <View
          style={{
            position: 'absolute',
            top: -6,
            right: -6,
            backgroundColor: 'red',
            width: 17,
            height: 17,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={{ color: 'white', fontSize: 10 }}>{cart.length}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
}
