import React from 'react'
import { View, StatusBar, ActivityIndicator } from 'react-native'

import { Provider } from 'mobx-react'

import AppNavigator from './layout/index'
import colors from './theme/colors'
import stores from './store'

export default class Root extends React.Component {
  render() {
    return (
      <Provider {...stores}>
        <View style={{ flex: 1 }}>
          <StatusBar
            barStyle={'light-content'}
            backgroundColor={colors.border}
          />
          <AppNavigator />
        </View>
      </Provider>
    )
  }
}