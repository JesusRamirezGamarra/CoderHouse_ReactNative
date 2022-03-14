/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text } from 'react-native';
import {styles} from './styles';

const CustomTitle = ({title }) => {
    return (
    <View>
        <View style={styles.containerTitle}>
            <Text style={styles.textTitle} >{title}</Text>
        </View>
        <View style={styles.containerTitleSecundary}>
            <Text style={styles.textTitle} >TODO : Tareas</Text>
        </View>
    </View>
    )}
export default CustomTitle;
