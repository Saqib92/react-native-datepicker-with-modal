/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type { Node } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal
} from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";

const App: () => Node = () => {

  //Modal from React-native
  const [modalVisible, setModalVisible] = React.useState(false);

  const showModal = () => {
    setModalVisible(true)
  }

  const closeModal = () => {
    setModalVisible(false)
  }

  const ModalContainer = () => {
    return (
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
          backdropTransitionOutTiming={0}
          hideModalContentWhileAnimating={true}
          onBackdropPress={() => { alert('wow') }}
        >

          <View style={styles.mView}>
            <TouchableOpacity style={styles.btn} onPress={showDatePicker} >
              <Text>Open Date Picker</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn} onPress={closeModal} >
              <Text>Close Modal</Text>
            </TouchableOpacity>

            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="datetime"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            />
          </View>

        </Modal>
      </View>
    );
  }


  //Date Picker 
  const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };

  return (
    <SafeAreaView>

      <View styles={styles.container}>
        <TouchableOpacity style={styles.btn} onPress={showModal} >
          <Text>Open Modal</Text>
        </TouchableOpacity>

        <View>
          <Text style={{ textAlign: 'center' }}>
            {'Date Picker and Modal Flickers on \n OPEN datepicker / CANCEL datepicker / Date Selection.'}</Text>
        </View>

        <ModalContainer />
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  btn: {
    height: 40,
    backgroundColor: 'lightgreen',
    width: '80%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    borderRadius: 10
  },

  centeredView: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: (22),

  },
  mView: {
    height: '40%',
    marginTop: 'auto',
    backgroundColor: 'gray',
    padding: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  }
});

export default App;
