import React from 'react';
import { StyleSheet,Image, Text, View, TouchableOpacity } from 'react-native';

import { API_HOST } from '../utils/API';

const MovieCard = ({ id, imageLink, title, onMovieSelected }) => ( //arrow function dengan syarat tidak ada state dan lifecycle
    <TouchableOpacity onPress={onMovieSelected}>
    <View>
    <Text>{ title }</Text>
    <Image 
        style={{width: 50, height: 50}} 
        source={{uri: `${API_HOST}/${imageLink}` }} //backtik karena template
   />
  </View>
    </TouchableOpacity>

)

export default MovieCard
