import ReactDOM from 'react-dom/client'
const children = [
  <li key="google">
    <a href="http://www.google.com" target="_blank">
      <p>go to google</p>
    </a>
  </li>,
  <li>
    <a href="http://www.facebook.com" target="_blank">
      <p>go to Facebook</p>
    </a>
  </li>,
  <li>
    <a href="http://www.twitter.com" target="_blank">
      <p>go to Twitter</p>
    </a>
  </li>
]
// const rootVirtualDOM = <div>{children}</div>
const rootVirtualDOM = <ul>{children}</ul> // 부모 영역

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(rootVirtualDOM)

// import ReactDom from 'react-dom/client'
// import * as D from './data'

// // const children = [0, 1, 2].map((n: number) => <h3>Hello word!{n}</h3>)
// const children = D.makeArray(10).map((notUsed, index) => (
//   <div key={index}>
//     <p>{D.randomId()}</p>
//     <p>{D.randomName()}</p>
//     <p>{D.randomJobTitle()}</p>
//     <p>{D.randomSentence()}</p>
//     <img src={D.randomAvatar()} width={100} height={100}></img>
//   </div>
// ))
// const rootVirtualDom = <div>{children}</div>

// const root = ReactDom.createRoot(document.getElementById('root') as HTMLElement)
// root.render(rootVirtualDom)
