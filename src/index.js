import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Provider } from 'react-redux'
import store from './store'
import App from './App'
import CSSReset from '@chakra-ui/css-reset'
import { ChakraProvider } from '@chakra-ui/react'

const app = document.getElementById('root')

ReactDOM.render(
  <Provider store={store}>
    <ChakraProvider>
      <CSSReset />
      <App />

    </ChakraProvider>
  </Provider>,
  app
)
