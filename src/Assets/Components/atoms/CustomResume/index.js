/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text } from 'react-native';
import {styles} from './styles';

const CustomResume = ({data }) => {
    return (
    <View>
        <View style={styles.containerTitleSecundary}>
            <Text style={styles.textTitle} >Finalizada: {(data.filter(itemList => itemList.isCompleted === true)).length} </Text>
        </View>
        <View style={styles.containerTitleSecundary}>
            <Text style={styles.textTitle} >Pendiente : {(data.filter(itemList => itemList.isCompleted !== true)).length} </Text>
        </View>
    </View>
    )}
export default CustomResume;
