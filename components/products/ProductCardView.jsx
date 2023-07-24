import { View,Image,TouchableOpacity,Text } from 'react-native'
import React from 'react'
import styles from './productcardview.style'

const ProductCardView = () => {
  return (
    <TouchableOpacity onPress={() => {}}>
        <View style={styles.container}>
            <View style={styles.imageContainer}> 
                <Image 
                    source={require('../../assets/images/fn5.jpg')}
                    style={styles.image}
                />
            </View>

            <View style={styles.details}>
                <Text 
                style={styles.title} 
                numberOfLines={1}
                >
                    Product
                </Text>

                <Text 
                style={styles.supplier}
                numberOfLines={1}
                >
                    Product
                </Text>

                <Text 
                style={styles.price}
                >
                    $ 235
                </Text>
            </View>
        </View>
    </TouchableOpacity>
  )
}

export default ProductCardView