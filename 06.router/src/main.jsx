import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import{BrowserRouter} from 'react-router'
import App from './App.jsx'

// BrowserRouter 역할
// -페이지 이동 관련 컴포넌트를 동작시켜주는 컴포넌트

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
