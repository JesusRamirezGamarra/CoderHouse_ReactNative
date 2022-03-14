/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Button, Text, TextInput } from 'react-native';
import {styles} from './styles';

const CustomSearch = ({value,placeholder,handleOnChangeInput}) => {
    return (
    <View style={styles.containerInput}>
        <TextInput
            placeholder={placeholder}
            autoCorrect={false}
            autoFocus={true}
            placeholderTextColor="#B03C23"
            style={styles.textInput}
            value={value}
            onChangeText={handleOnChangeInput}
            maxLength={35}
        />
        <Button
            title="+"
            color="#B03C23"
            // onPress={() => null}
            onPress={() =>  addItem()}
        /> 
    </View>
    )}
export default CustomSearch;
