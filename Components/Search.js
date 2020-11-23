import React from 'react'
import {View, Button, TextInput} from 'react-native'
class Search extends React.Component {
  render(){
    return(
      <View>
      <TextInput placeHolder = "look for a movie.." />
      <Button title = "Search" onpress= {() => {}} />
      </View>
    )
  }
}
export default Search
