import { View, Image } from 'react-native'
import React from 'react'
import { Card,Button,Icon,Text } from '@rneui/themed';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import PizzaCard from './Products/PizzaCard';

const RestaurantScreen = () => {
  return (
    <View>
      <KeyboardAwareScrollView>
        <PizzaCard/>
      </KeyboardAwareScrollView>
    </View>
  )
}

export default RestaurantScreen;