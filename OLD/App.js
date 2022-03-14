/* eslint-disable prettier/prettier */
import React, {Fragment, useState, useRef, useEffect} from 'react';
import {View, Button, TextInput, Text, FlatList, TouchableOpacity, Modal} from 'react-native';
import {StylesRoot} from './Assets/Css/styles';
import uuid from 'react-native-uuid';
import CustomTitle from './Assets/Components/atoms/CustomTitle';
import CustomSearch from './Assets/Components/atoms/CustomSearch';

const App = () => {
  const [text,setText] = useState('');
  const [textList,setTextList] = useState([
    // {id: 1,value: 'buy some water 1'},
    // {id: 2,value: 'buy some water 2'},
    // {id: 3,value: 'buy some water 3 '},
    // {id: 4,value: 'buy some water 4'},
    // {id: 5,value: 'buy some water 5'},
    // {id: 6,value: 'buy some water 6'},
  ]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});



  const handleOnChangeInput = (value) => {
    // console.warn(value);
    setText(value);
  };

  const addItem = () => {
    // console.warn(text);
    // console.log(text);
    if (text !== ''){
      // setTextList([...textList, { id: textList.length + 1, value: (uuid.v4()).toString() + text }]);
      setTextList([...textList, { id: uuid.v4(), value: text }]);
      setText('');
    }
  };

//#region Eventos Modal
  const handleDeleteItem = (id) => {
    const newList = textList.filter(itemList => itemList.id !== id);
    setSelectedItem({});
    setTextList(newList);
    setModalVisible(!modalVisible);
  };


  const onHandleModal = (id) => {
    setSelectedItem(textList.find(itemList => itemList.id === id));
    setModalVisible(!modalVisible);
  };
//#endregion

 const placeholder_ = 'Ingresar Item';
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
          maxLength={35}
        />
        <Button
          title="+"
          color="#B03C23"
          onPress={() =>  addItem()}
        />
      </View>




      {/* <View style={StylesHome.containerList}>
          {textList.map(item => (
              <Text key={item.id} style={StylesHome.textList}>{item.value}</Text>
          ))}
      </View> */}
      <View style={StylesRoot.containerList}>
        <FlatList
          data={textList}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => onHandleModal(item.id)}>
              <Text key={item.id} style={StylesRoot.textList}>{item.value}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id.toString()}
        />
      </View>
      {/* <Modal
        animationType="slide"
        transparency={false}
        visible={modalVisible}
      >
        <Text>Texto de Prueba</Text>
      </Modal> */}
{/*     <Modal style={StylesRoot.modalContainer}
          animationType="slide"
          visible={modalVisible}
          transparent={true}
        >
          <View style={StylesRoot.modalTitle}>
            <Text>Description</Text>
          </View>
          <View style={StylesRoot.modalContent}>
            <Text>Are you sure delete this item ?</Text>
            <Text style={StylesRoot.modalContentText} >{selectedItem.value}</Text>
          </View>
          <View style={StylesRoot.modalButton}>
            <Button
              title="Yes"
              color="#B03C23"
              onPress={() => handleDeleteItem(selectedItem.id)}
            />
          </View>
        </Modal> */}


      <View style={StylesRoot.modalContainer}>
        <Modal 
          animationType="slide"
          visible={modalVisible}
          transparent={true}
        >
          <View style={StylesRoot.modalContainerContent}>
            <View style={StylesRoot.modalTitle}>
              <Text>Description</Text>
            </View>
            <View style={StylesRoot.modalContent}>
              <Text style={{color:'red'}}>Are you sure delete this item ?</Text>
              <Text style={StylesRoot.modalContentText} >{selectedItem.value}</Text>
            </View>
            <View style={StylesRoot.modalButton}>
              <Button
                title="Yes"
                color="#B03C23"
                onPress={() => handleDeleteItem(selectedItem.id)}
              />
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default App;
