import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// import {h1, h2, div, span} from 'react'

//const h1 = <h1>Hello World</h1> // 리액트 컴포넌트
//const h2 = React.createElement('h2', null, 'Hello World!') // React.createElement 생성
// root.render([<App />, h1, h2]) // 대괄호

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<App />)
