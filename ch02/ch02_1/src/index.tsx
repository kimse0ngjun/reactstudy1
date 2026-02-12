import React from 'react'
import ReactDOM from 'react-dom/client'

let pPhysicalDom = document.createElement('p') // 물리 DOM
pPhysicalDom.innerText = 'Hello physical Dom world!'
document.body.appendChild(pPhysicalDom)

let pVirtualDom = React.createElement('p', null, 'Hello World!! virtual') // 가상 DOM
let root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(pVirtualDom)
