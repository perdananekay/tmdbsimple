import { createStackNavigator, createAppContainer } from "react-navigation";
import MovieDetails from './src/component/MovieDetails';
import MovieList from './src/component/MovieList';


const App = createStackNavigator (
{
  MovieList: {screen: MovieList},
  MovieDetails: {screen: MovieDetails},
},
{
  initialRouteName: "MovieList"
});

export default createAppContainer(App);