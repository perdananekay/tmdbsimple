// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import MovieCard from './src/component/MovieCard';

// import axios from 'axios';

// export default class App extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       movieList: [ //array
//         {id: 1, imageLink: "87hTDiay2N2qWyX4Ds7ybXi9h8I.jpg", title: "Fight Club"},
//         {id: 2, imageLink: "87hTDiay2N2qWyX4Ds7ybXi9h8I.jpg", title: "Fight Club"},
//         {id: 3, imageLink: "87hTDiay2N2qWyX4Ds7ybXi9h8I.jpg", title: "Fight Club"}
//       ],
//       loading: false,
//     };
//   }

//   componentDidMount() {

//   }

//   render() {
//     const { movieList } = this.state //memecahkan ke masing -masing field
//     return (
//       <View style={styles.container}>
//         {
//           movieList.map(movie => (
//           <MovieCard 
//             id={ movie.id }
//             imageLink={ movie.imageLink }
//             title={ movie.title }
//           />
//           ))
//         }
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import MovieCard from './src/component/MovieCard';

// import axios from 'axios';

// import {
//   API_KEY,
//   HOST,
//   API_HOST,
// } from './src/utils/API';


// export default class App extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       movieList: [],
//       loaded: false,
//       selected: {},
//     };
//   }

//   componentDidMount() { //pertama kali dimount komponen melakkan sesuatu
//     const context = this;
//     axios.get(`${HOST}${API_KEY}`)
//     .then(response => {
//       context.setState({ //async
//           loaded: true,
//           movieList:response.data.results,
//       })
//       //alert(JSON.stringify(response.data))
//     })
//     .catch(err => alert(`error ! => ${err}`))
//   }

//   render() {
//     const { 
//       movieList,
//       loaded,
//       selected,
//      } = this.state //memecahkan ke masing -masing field


//     return (
//       <View style={styles.container}>
//         {
//         }
//         {
//           loaded ? 
//           movieList.map(movie => (
//             <MovieCard 
//               key={ movie.id }
//               id={ movie.id }
//               imageLink={ movie.poster_path }
//               title={ movie.title }
//             />
//           )) 
//             : <Text>Loading</Text>
//         }
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import MovieCard from './src/component/MovieCard';

// import axios from 'axios';

// import {
//   API_KEY,
//   HOST,
//   API_HOST,
// } from './src/utils/API';


// export default class App extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       movieList: [],
//       loaded: false,
//       selected: {},
//     };
//   }

//   componentDidMount() { //pertama kali dimount komponen melakkan sesuatu
//     const context = this;
//     axios.get(`${HOST}${API_KEY}`)
//     .then(response => {
//       context.setState({ //async
//           loaded: true,
//           movieList:response.data.results,
//       })
//       //alert(JSON.stringify(response.data))
//     })
//     .catch(err => alert(`error ! => ${err}`))
//   }

//   render() {
//     const { 
//       movieList,
//       loaded,
//       selected,
//      } = this.state //memecahkan ke masing -masing field


//     return (
//       <View style={styles.container}>
//         {
//         }
//         {
//           loaded  
//           ?movieList.map(movie => (
//             <MovieCard 
//               key={ movie.id }
//               id={ movie.id }
//               imageLink={ movie.poster_path }
//               title={ movie.title }
//             />
//           )) 
//             : <Text>Loading</Text>
//         }
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// import React from 'react';
// import { StyleSheet, Text, ScrollView } from 'react-native';
// import MovieCard from './src/component/MovieCard';

// import axios from 'axios';

// import {
//   API_KEY,
//   HOST,
//   API_HOST,
// } from './src/utils/API';


// export default class App extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       movieList: [],
//       loaded: false,
//       selected: {},
//     };
//   }

//   componentDidMount() { //pertama kali dimount komponen melakkan sesuatu
//     const context = this;
//     axios.get(`${HOST}${API_KEY}`)
//     .then(response => {
//       context.setState({ //async
//           loaded: true,
//           movieList:response.data.results,
//       })
//       //alert(JSON.stringify(response.data))
//     })
//     .catch(err => alert(`error ! => ${err}`))
//   }

//   render() {
//     const { 
//       movieList,
//       loaded,
//       selected,
//      } = this.state //memecahkan ke masing -masing field


//     return (
//       <ScrollView style={styles.container}>
//         {
//         }
//         {
//           loaded  
//           ?movieList.map(movie => (
//             <MovieCard 
//               key={ movie.id }
//               id={ movie.id }
//               imageLink={ movie.poster_path }
//               title={ movie.title }
//             />
//           )) 
//             : <Text>Loading</Text>
//         }
//       </ScrollView>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   contentContainer: {
//     paddingVertical: 20,
//   },
// });

import React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
import MovieCard from './MovieCard';

import axios from 'axios';

import {
  API_KEY,
  HOST,
  API_HOST,
} from '../utils/API';


export default class MovieList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      movieList: [],
      loaded: false,
      selected: {},
    };
  }

  static navigationOptions = {
    title: 'MovieList'
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
    const { navigate } = this.props.navigation; //2
    const { 
      movieList,
      loaded,
     } = this.state //memecahkan ke masing -masing field


    return (
      <ScrollView style={styles.container}>
        {
        }
        {
          loaded  
          ?movieList.map(movie => (
            <MovieCard 
              key={ movie.id }
              id={ movie.id }
              imageLink={ movie.poster_path }
              title={ movie.title }
              onMovieSelected={() => navigate('MovieDetails', movie)}
            />
          )) 
            : <Text>Loading</Text>
        }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: 20,
  },
});