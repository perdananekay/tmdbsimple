import React from 'react';
import { StyleSheet, Text, ScrollView, Image} from 'react-native';

import axios from 'axios';

import {
  API_KEY,
  HOST,
  API_HOST,
} from '../utils/API';


export default class MovieDetails extends React.Component {

  constructor(props) {
    super(props);
    const { navigation } = this.props;
    this.state = {
      poster: navigation.getParam('poster_path', '0'),
      title: navigation.getParam('title', 'movie title'),
    };
  }

  componentDidMount() { //pertama kali dimount komponen melakkan sesuatu
    const context = this;
    axios.get(`${HOST}${API_KEY}`)
    .then(response => {
      context.setState({ //async
          loaded: true,
          movieList:response.data.results,
      })
      //alert(JSON.stringify(response.data))
    })
    .catch(err => alert(`error ! => ${err}`))
  }

  render() {
    const {
      poster,
      title,
    } = this.state;
     //memecahkan ke masing -masing field
    return (
      <ScrollView style={styles.container}>
        <Image 
        style={{width: 50, height: 50}} 
        source={{uri: `${API_HOST}/${poster}` }} //backtik karena template
        />
        <Text>{title}</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: 20,
  },
});