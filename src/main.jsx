import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './home/App'
import GlobalStyles from './styles/globalStyles'
import { ThemeProvider } from 'styled-components'

const theme = {
  primary: '#707070',
  secundary: '#888888',
  third: '#ffff'
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}> 
    <App />
    </ThemeProvider>
    <GlobalStyles/>
  </React.StrictMode>
)
