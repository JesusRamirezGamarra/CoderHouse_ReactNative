/* eslint-disable prettier/prettier */
import React, {Fragment, useState, useRef, useEffect} from 'react';
import {View, Button, TextInput} from 'react-native';
// import {styles} from './styles';
import {stylesHome} from './Assets/Css/styles';

const App = () => {
  return (
    //<Fragment>
    //   <h1>Prueba</h1>
      <View style={stylesHome.container}>
        <TextInput
          placeholder="Type here Coder Task"
          autoCorrect={false}
          autoFocus={true}
          placeholderTextColor="#B03C23"
          style={stylesHome.textInput}
        />

        <Button title="Add" color="#B03C23" onPress={() => null} />
      </View>
    //
    //</Fragment>
  );
};

export default App;
