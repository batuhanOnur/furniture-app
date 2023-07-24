import { View,Image,TouchableOpacity,Text } from 'react-native'
import React from 'react'
import styles from './productcardview.style'
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from '../../constants'
import { useNavigation } from '@react-navigation/native'


const ProductCardView = () => {

    const navigation = useNavigation()

  return (
    <TouchableOpacity onPress={() => navigation.navigate("ProductDetails")}>
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

            <TouchableOpacity style={styles.addBtn}>
                <Ionicons 
                    name="add-circle"
                    size={35}
                    color={COLORS.primary}
                />
            </TouchableOpacity>
        </View>
    </TouchableOpacity>
  )
}

export default ProductCardView