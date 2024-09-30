import React from 'react';
import { View } from 'react-native';
import QuestionScreen from './components/QuestionScreen';
import FeedbackScreen from './components/FeedbackScreen';

const App = () => {
  return (
    <View>
      <QuestionScreen />
      {/* Add FeedbackScreen or any other components based on app flow */}
    </View>
  );
};

export default App;
