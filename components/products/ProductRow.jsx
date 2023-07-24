import { Text, View, FlatList } from 'react-native'
import React from 'react'
import { SIZES } from '../../constants'
import styles from './products.style'
import ProductCardView from './ProductCardView'

const ProductRow = () => {

    const products = [ 1,2,3,4 ]

  return (
    <View style={{
        marginTop: SIZES.medium
    }}>
        <FlatList 
            data={products}
            horizontal
            contentContainerStyle={{
                columnGap: SIZES.medium
            }}
            renderItem={({item}) => (
                <ProductCardView />
            )}
        />
    </View>
  )
}

export default ProductRow

