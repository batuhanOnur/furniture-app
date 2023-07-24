import { Text, View } from 'react-native'
import React from 'react'
import styles from './productDetails.style'
import { Ionicons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'

const ProductDetails = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.upperRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons 
                name="chevron-back-circle"
                size={30}
            />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ProductDetails
