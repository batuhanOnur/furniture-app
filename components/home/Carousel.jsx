import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SliderBox } from 'react-native-image-slider-box'
import { COLORS } from '../../constants'
import fn1 from '../../assets/images/fn1.jpg'
import fn2 from '../../assets/images/fn2.jpg'
import fn3 from '../../assets/images/fn3.jpg'
import fn4 from '../../assets/images/fn4.jpg'
import fn5 from '../../assets/images/fn5.jpg'

const Carousel = () => {

    const slides = [
        fn1,fn2,fn3,fn4,fn5
    ]

  return (
    <View style={styles.crouseContainer}>
      <SliderBox 
        images={slides}
        dotColor={COLORS.primary}
        inactiveDotColor={COLORS.secondary}
        autoplay
        circleLoop
        ImageComponentStyle={{
            borderRadius: 15,
            width: "95%",
            marginTop: 15
        }}
      />
    </View>
  )
}

export default Carousel

const styles = StyleSheet.create({
    crouseContainer: {
        flex:1,
        alignItems: "center"
    }
})