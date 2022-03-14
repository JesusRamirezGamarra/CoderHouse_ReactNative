/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';



export const StylesRoot = StyleSheet.create({
  container: {
    flex: 1,
  },

  containerInput:{
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // padding: 25,
    // flex:1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // justifyContent: 'space-around',
    // justifyContent: 'flex-start',
  },
  containerList: {
    paddingHorizontal: 25,
  },
  checkbox: {
    alignSelf: 'center',
  },
  textInput: {
    borderColor: 'black',
    borderBottomWidth: 1,
    marginBottom: 10,
    width: '70%',
    height: 40,
    fontSize: 14,
    // color:'#212121',
  },

  textList: {
    fontSize: 14,
    color: '#212121',
    // marginBottom: 10,
  },

  textListDate: {
    fontSize: 8,
    color: '#212121',
    marginBottom: 5,
  },


  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainerContent: {
    backgroundColor: '#000000',
    width: '80%',
    height: '25%',
    elevation: 4,
    justifyContent: 'center',
    borderRadius: 4,
    padding:20,
    marginLeft: 40,
    marginTop: 200,
    shadowColor: 'black',
    shadowOpacity: 0.2,
  },
  modalTitle: {
    padding: 25,
    paddingBottom: 10,
    borderBottomColor: '#FFFFFF',
    borderBottomWidth: 1,
  },
  modalTitleText: {
    fontSize: 12,
    color: '#FFFFFF',
  },
  modalContent: {
    paddingHorizontal: 25,
  },
  modalContentTextQuestion: {
    fontSize: 12,
    color: '#FFFFFF',
  },
  modalContentText: {
    fontSize: 12,
    color: '#ffffbf',
    fontWeight: 'bold',
    marginVertical: 10,
  },
  modalButton: {
    // width: '20%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    paddingHorizontal: 25,
  },








});
