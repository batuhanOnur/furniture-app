import { Text, View,Image } from 'react-native'
import React,{ useState } from 'react'
import styles from './productDetails.style'
import { Ionicons,SimpleLineIcons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'
import { COLORS } from '../constants'
import fn1 from '../assets/images/fn1.jpg'

const ProductDetails = ({navigation}) => {


  const [ count,setCount ] = useState(1)


  const increment = () => {
    setCount(prevState => prevState + 1)
  }

  const decrement = () => {

    if(count > 1) {
      setCount(prevState => prevState - 1)
    }
    
  }

  return (
    <View style={styles.container}>
      <View style={styles.upperRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons 
                name="chevron-back-circle"
                size={30}
            />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
            <Ionicons 
                name="heart"
                size={30}
                color={COLORS.primary}
            />
        </TouchableOpacity>
      </View>

      <Image 
        source={fn1}
        style={styles.image}
      />

      <View style={styles.details}>

        <View style={styles.titleRow}>
          <Text style={styles.title}>Product</Text>
          <View style={styles.priceWrapper}>
            <Text style={styles.price}>$ 600</Text>
          </View>
        </View>


        <View style={styles.ratingRow}> 
          <View style={styles.rating}>
            {
              [1,2,3,4,5].map((index) => (
                <Ionicons 
                  key={index}
                  name="star"
                  size={24}
                  color="gold"
                />
              ))
            }

            <Text style={styles.ratingText}>(4.9)</Text>
          </View>

          <View style={styles.rating}>
            <TouchableOpacity onPress={() => decrement()}>
              <SimpleLineIcons 
                name="minus"
                size={20}
              />
            </TouchableOpacity>
            <Text style={styles.ratingText}>{ count }</Text>
            <TouchableOpacity onPress={() => increment()}>
              <SimpleLineIcons 
                name="plus"
                size={20}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.descriptionWrapper}>
          <Text stlye={styles.desc}></Text>
        </View>

      </View>
    </View>
  )
}

export default ProductDetails
