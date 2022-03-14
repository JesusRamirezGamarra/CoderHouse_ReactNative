/* eslint-disable prettier/prettier */
import React, {Fragment, useState, useRef, useEffect} from 'react';
import {View, Button, TextInput, Text, FlatList, TouchableOpacity, Modal} from 'react-native';
import { CheckBox, Icon } from 'react-native-elements';
import {StylesRoot} from './Assets/Css/styles';
import uuid from 'react-native-uuid';
import CustomTitle from './Assets/Components/atoms/CustomTitle';
import CustomSearch from './Assets/Components/atoms/CustomSearch';
import CustomResume from './Assets/Components/atoms/CustomResume';

const App = () => {
  const [text,setText] = useState('');
  const [textList,setTextList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});



  const handleOnChangeInput = (value) => {
    // console.warn(value);
    setText(value);
  };

  const addItem = () => {
    // console.warn(text);
    // console.log(textList);
    if (text !== ''){
      setTextList([...textList, {orden:textList.length + 1, id: uuid.v4(), value: text, isCompleted: false, createdIn: (Date.now()), modifiedIn:null }]);
      setText('');
    }
    // console.warn(text);
    console.log(textList);
  };

//#region Eventos Modal
  const onhandleChangeCompletedItem = (item) => {
    console.log(textList);
    console.log(item);
    // const newList = textList.filter(itemList => itemList.id !== item.id);
    let indice = textList.findIndex(itemList => itemList.id === item.id);
    // console.log(indice);
    // const newList = textList.splice(indice,0,{id: item.id,value: item.value,isCompleted: false});
    // let fecha = new Date();
    textList[indice] = {id: item.id,value: item.value,isCompleted: !item.isCompleted,createdIn: item.createdIn, modifiedIn:  new Date(Date.now()) };
    setSelectedItem({});
    setTextList(textList);
    setModalVisible(!modalVisible);
  };


  const onHandleModal = (id,isCompleted) => {
    // if (!isCompleted) {
      setSelectedItem(textList.find(itemList => itemList.id === id));
      setModalVisible(!modalVisible);
    // } else {

    // }

  };

  const onHandleModalCancel = () => {
    setModalVisible(!modalVisible);
  }
//#endregion

 const placeholder_ = 'Ingresar Tarea';
 const title_ = 'Desafio 01 : Lista Optimizada';


  return (
    <View style={StylesRoot.container}>
      <CustomTitle title={title_}/>
      {/* <CustomSearch value={text} placeholder={placeholder_} handleOnChangeInput={handleOnChangeInput} onPress={addItem}/> */}
      <View style={StylesRoot.containerInput}>
        <TextInput
          placeholder={placeholder_}
          autoCorrect={false}
          autoFocus={true}
          placeholderTextColor="#B03C23"
          style={StylesRoot.textInput}
          value={text}
          onChangeText={handleOnChangeInput}
          maxLength={20}
        />
        <Button
          title="Agregar"
          color="#B03C23"
          onPress={() =>  addItem()}
        />
      </View>
      <CustomResume data={textList}/>
      
      <View style={StylesRoot.containerList}>
        <FlatList
          data={textList}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => onHandleModal(item.id,item.isCompleted)}>
              <Text
                key={item.id}
                style={
                  item.isCompleted
                  ? [StylesRoot.textList,{textDecorationLine:'line-through',color:'#73737330'}]
                  : StylesRoot.textList
                }
              >
                {item.value}
              </Text>
              <Text style={StylesRoot.textListDate}>
              {new Date(item.createdIn).toLocaleDateString()} - {new Date(item.createdIn).toLocaleTimeString()}
              {'\n'}
              {item.isCompleted
              ? new Date(item.modifiedIn).toLocaleDateString() + ' - '
              : ''}
              {item.isCompleted
              ?  new Date(item.modifiedIn).toLocaleTimeString()
              : ''}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id.toString()}
        />
      </View>


      <View style={StylesRoot.modalContainer}>
        <Modal
          animationType="slide"
          visible={modalVisible}
          transparent={true}
        >
          <View style={StylesRoot.modalContainerContent}>
            <View style={StylesRoot.modalTitle}>
              {/* <Text style={StylesRoot.modalTitleText}>Description</Text> */}
              <Text style={StylesRoot.modalContentTextQuestion}>
                { selectedItem.isCompleted
                  ? '¿ Desea (Re)Activar la Tarea ?'
                  : '¿ Desea Finalizar la Tarea ?'
                }
              </Text>
            </View>
            <View style={StylesRoot.modalContent}>
              <Text style={StylesRoot.modalContentText} >{selectedItem.value}</Text>
            </View>
            <View style={StylesRoot.modalButton}>
              <Button
                title="Confirmar"
                color="#B03C23"
                // onPress={() => onhandleDeleteItem(selectedItem.id)}
                onPress={() => onhandleChangeCompletedItem(selectedItem)}
              />
              <Button
                title="Cancelar"
                color="#B03C23"
                onPress={() => onHandleModalCancel()}
              />
            </View>
          </View>
        </Modal>
      </View>



    </View>
  );
};

export default App;
