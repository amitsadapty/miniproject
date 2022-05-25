import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {CustomButton} from '../custompackage/src/common';

const App = () => {
  return (
    <SafeAreaView>
      <CustomButton
        pressMe={() => console.log('press me')}
        showLoading={true}
      />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
