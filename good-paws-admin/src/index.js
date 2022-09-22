import { ChakraProvider } from '@chakra-ui/react'

import * as React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { theme } from '../src/styles/ChakraTheme'
import App from './components/App'
import LoginProvider from './context/loginContext'
import reportWebVitals from './reportWebVitals'
import './styles/index.css'


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>    
      <LoginProvider>
        <ChakraProvider theme={theme}>
          <App />
        </ChakraProvider>
      </LoginProvider>
    </BrowserRouter>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
