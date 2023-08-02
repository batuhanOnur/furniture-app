import { Text, View, FlatList } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../constants'
import styles from './products.style'
import ProductCardView from './ProductCardView'
import useFetch from '../../hook/useFetch'
import { ActivityIndicator } from 'react-native'

const ProductRow = () => {

    const { data, isLoading, error } = useFetch()

    console.log("err", error)
  return (
    <View style={styles.container}>
        {
            isLoading ? (
                <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary}/>
            ) 
            :
            error ? (
                <Text>Something went wrong,</Text>
            ) :
            <FlatList 
            data={data}
            keyExtractor={(item) => item._id}
            horizontal
            contentContainerStyle={{
                columnGap: SIZES.medium
            }}
            renderItem={({item}) => (
                <ProductCardView item={item}/>
            )}
        />
        }
    </View>
  )
}

export default ProductRow

